#!/usr/bin/env python3
"""
Google Places API - Seattle Tradesmen Without Websites
Searches for local tradesmen in the greater Seattle area,
identifies businesses without a website, and exports to CSV.

Usage:
  1. Get a Google Places API key:
     - Go to https://console.cloud.google.com/
     - Create a project (or select existing)
     - Enable "Places API (New)" under APIs & Services
     - Create an API key under Credentials
  2. Set your API key:
     export GOOGLE_PLACES_API_KEY="your-key-here"
  3. Run:
     python3 google_places_search.py
  4. Results saved to: google_places_results.csv in this directory

Free tier: $200/month credit = ~28,000 place detail requests.
This script uses ~500-1000 requests per full run (10 trades x 50-100 results each).
"""

import csv
import json
import os
import re
import sys
import time
import urllib.request
import urllib.parse
import urllib.error
from pathlib import Path

API_KEY = os.environ.get("GOOGLE_PLACES_API_KEY", "")

SCRIPT_DIR = Path(__file__).parent
OUTPUT_CSV = SCRIPT_DIR / "google_places_results.csv"
MASTER_CSV = SCRIPT_DIR / "seattle_tradesmen_master.csv"

TRADES = [
    ("Plumbing", ["plumber", "plumbing service"]),
    ("Electrical", ["electrician", "electrical contractor"]),
    ("HVAC", ["HVAC", "heating and cooling", "furnace repair"]),
    ("Carpentry", ["carpenter", "framing contractor"]),
    ("Painting", ["house painter", "painting contractor"]),
    ("Roofing", ["roofer", "roofing contractor"]),
    ("Landscaping", ["landscaper", "lawn care service", "landscaping"]),
    ("General Handyman", ["handyman", "handyman service"]),
    ("Concrete / Masonry", ["concrete contractor", "masonry contractor"]),
    ("Pressure Washing", ["pressure washing", "power washing"]),
]

SEATTLE_LAT = 47.6062
SEATTLE_LNG = -122.3321
SEARCH_RADIUS = 40000  # 40km covers greater Seattle metro


def api_request(url):
    """Make an API request with basic error handling and rate limiting."""
    req = urllib.request.Request(url)
    req.add_header("Content-Type", "application/json")
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            return json.loads(resp.read().decode())
    except urllib.error.HTTPError as e:
        body = e.read().decode() if e.fp else ""
        print(f"  HTTP {e.code}: {body[:200]}")
        return None
    except Exception as e:
        print(f"  Request error: {e}")
        return None


def text_search(query, page_token=None):
    """Search for places using the Text Search endpoint."""
    params = {
        "query": f"{query} in Seattle WA",
        "location": f"{SEATTLE_LAT},{SEATTLE_LNG}",
        "radius": SEARCH_RADIUS,
        "type": "establishment",
        "key": API_KEY,
    }
    if page_token:
        params["pagetoken"] = page_token
    url = f"https://maps.googleapis.com/maps/api/place/textsearch/json?{urllib.parse.urlencode(params)}"
    return api_request(url)


def get_place_details(place_id):
    """Get full details for a place including website and phone."""
    fields = "name,formatted_phone_number,formatted_address,website,rating,user_ratings_total,business_status,place_id,url"
    params = {
        "place_id": place_id,
        "fields": fields,
        "key": API_KEY,
    }
    url = f"https://maps.googleapis.com/maps/api/place/details/json?{urllib.parse.urlencode(params)}"
    return api_request(url)


def normalize_phone(phone):
    if not phone:
        return ""
    digits = re.sub(r'\D', '', phone)
    if len(digits) == 11 and digits.startswith('1'):
        digits = digits[1:]
    if len(digits) == 10:
        return f"({digits[:3]}) {digits[3:6]}-{digits[6:]}"
    return phone


def load_existing_phones():
    """Load phone numbers already in the master CSV to avoid duplicates."""
    phones = set()
    if MASTER_CSV.exists():
        with open(MASTER_CSV, 'r') as f:
            for row in csv.DictReader(f):
                phone = row.get('Phone', '')
                digits = re.sub(r'\D', '', phone)
                if len(digits) >= 10:
                    phones.add(digits[-10:])
    return phones


def search_trade(trade_name, queries):
    """Search for all businesses in a trade category, return no-website ones."""
    results = []
    seen_ids = set()

    for query in queries:
        print(f"  Searching: '{query} in Seattle WA'")
        data = text_search(query)
        if not data or data.get("status") != "OK":
            status = data.get("status", "unknown") if data else "no response"
            print(f"    Search failed: {status}")
            continue

        places = data.get("results", [])
        print(f"    Found {len(places)} results")

        # Follow pagination (up to 2 more pages = 60 results max per query)
        next_token = data.get("next_page_token")
        page = 1
        while next_token and page < 3:
            time.sleep(2)  # Google requires delay before using page token
            more = text_search(query, page_token=next_token)
            if more and more.get("status") == "OK":
                places.extend(more.get("results", []))
                next_token = more.get("next_page_token")
                page += 1
            else:
                break

        for place in places:
            pid = place.get("place_id")
            if not pid or pid in seen_ids:
                continue
            seen_ids.add(pid)

            if place.get("business_status") == "CLOSED_PERMANENTLY":
                continue

            time.sleep(0.1)  # Gentle rate limiting
            details_resp = get_place_details(pid)
            if not details_resp or details_resp.get("status") != "OK":
                continue

            details = details_resp.get("result", {})
            website = details.get("website", "")
            phone = details.get("formatted_phone_number", "")
            name = details.get("name", "")
            address = details.get("formatted_address", "")
            rating = details.get("rating", "")
            reviews = details.get("user_ratings_total", "")
            gmaps_url = details.get("url", "")

            if website:
                continue

            if not phone:
                continue

            results.append({
                "Trade": trade_name,
                "Name": name,
                "Phone": normalize_phone(phone),
                "Email": "",
                "Address": address,
                "Rating": rating,
                "Reviews": reviews,
                "Post_Date": "",
                "Status": "Active",
                "Source_URL": gmaps_url,
            })

    return results


def merge_into_master(new_contacts, existing_phones):
    """Append new unique contacts to the master CSV."""
    added = 0
    master_rows = []

    if MASTER_CSV.exists():
        with open(MASTER_CSV, 'r') as f:
            master_rows = list(csv.DictReader(f))

    fieldnames = ['Trade', 'Name', 'Phone', 'Email', 'Post_Date', 'Status', 'Source_URL']

    for contact in new_contacts:
        digits = re.sub(r'\D', '', contact['Phone'])
        key = digits[-10:] if len(digits) >= 10 else digits
        if key in existing_phones:
            continue
        existing_phones.add(key)

        master_rows.append({
            'Trade': contact['Trade'],
            'Name': contact['Name'],
            'Phone': contact['Phone'],
            'Email': contact.get('Email', ''),
            'Post_Date': '',
            'Status': 'Active',
            'Source_URL': contact['Source_URL'],
        })
        added += 1

    master_rows.sort(key=lambda x: x.get('Trade', ''))

    with open(MASTER_CSV, 'w', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for row in master_rows:
            writer.writerow({k: row.get(k, '') for k in fieldnames})

    return added


def main():
    if not API_KEY:
        print("=" * 60)
        print("ERROR: No API key found.")
        print()
        print("Set your Google Places API key:")
        print("  export GOOGLE_PLACES_API_KEY='your-key-here'")
        print()
        print("To get a key:")
        print("  1. https://console.cloud.google.com/")
        print("  2. Enable 'Places API' (or 'Places API (New)')")
        print("  3. Create credentials -> API key")
        print("  4. Free tier: $200/month credit")
        print("=" * 60)
        sys.exit(1)

    print(f"Google Places API - Seattle Tradesmen Search")
    print(f"Output: {OUTPUT_CSV}")
    print(f"Master: {MASTER_CSV}")
    print()

    existing_phones = load_existing_phones()
    print(f"Loaded {len(existing_phones)} existing phone numbers to deduplicate against\n")

    all_results = []
    trade_counts = {}

    for trade_name, queries in TRADES:
        print(f"\n{'='*50}")
        print(f"TRADE: {trade_name}")
        print(f"{'='*50}")

        results = search_trade(trade_name, queries)
        no_dupes = []
        for r in results:
            digits = re.sub(r'\D', '', r['Phone'])
            key = digits[-10:] if len(digits) >= 10 else digits
            if key not in existing_phones:
                no_dupes.append(r)

        trade_counts[trade_name] = len(no_dupes)
        all_results.extend(no_dupes)
        print(f"  -> {len(results)} no-website businesses found, {len(no_dupes)} are new")

    # Write Google Places results to their own CSV
    gp_fields = ['Trade', 'Name', 'Phone', 'Email', 'Address', 'Rating', 'Reviews', 'Post_Date', 'Status', 'Source_URL']
    with open(OUTPUT_CSV, 'w', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=gp_fields)
        writer.writeheader()
        for r in all_results:
            writer.writerow(r)

    print(f"\n{'='*50}")
    print(f"RESULTS")
    print(f"{'='*50}")
    print(f"Total new no-website businesses: {len(all_results)}")
    print(f"\nBy trade:")
    for trade, count in sorted(trade_counts.items()):
        print(f"  {trade}: {count}")
    print(f"\nSaved to: {OUTPUT_CSV}")

    # Merge into master
    added = merge_into_master(all_results, existing_phones)
    print(f"\nMerged {added} new contacts into master CSV: {MASTER_CSV}")

    # Final master count
    with open(MASTER_CSV, 'r') as f:
        total = sum(1 for _ in csv.DictReader(f))
    print(f"Master CSV now has {total} total contacts")


if __name__ == "__main__":
    main()
