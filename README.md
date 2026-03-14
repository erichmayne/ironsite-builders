# Seattle Tradesmen Contact Aggregator

Collects contact info for sole operators and small tradesmen in the greater Seattle area who **do not have a website**. Built for outreach to businesses that could benefit from web design, marketing, or other services.

## Files

| File | Description |
|---|---|
| `seattle_tradesmen_master.csv` | Master contact list — deduplicated, all sources merged |
| `google_places_search.py` | Google Places API script to find no-website businesses on Google Maps |
| `raw/` | Raw data files from individual platform searches (Craigslist, Thumbtack, etc.) |

## Trades Covered

1. Plumbing
2. Electrical
3. HVAC
4. Carpentry
5. Painting
6. Roofing
7. Landscaping / Lawn Care
8. General Handyman
9. Concrete / Masonry
10. Pressure Washing

## Data Sources

- **Craigslist Seattle** — Skilled trades (sks), household services (hss), labor (lbs) sections
- **Thumbtack** — No-website profiles in Seattle metro
- **Facebook** — Business pages for sole operators
- **Nextdoor** — Local business listings
- **Google Places API** — Businesses on Google Maps with no website field

## Running the Google Places Script

### 1. Get an API key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a project (or select an existing one)
3. Go to **APIs & Services > Library** and enable **Places API**
4. Go to **APIs & Services > Credentials** and create an **API key**
5. Free tier gives you $200/month credit (~28,000 place detail requests)

### 2. Set the key and run

```bash
export GOOGLE_PLACES_API_KEY="your-key-here"
cd ~/handy-men
python3 google_places_search.py
```

### 3. Output

- `google_places_results.csv` — New contacts found via Google Places
- `seattle_tradesmen_master.csv` — Automatically updated with new contacts (deduped)

### Cost estimate

One full run (10 trades) uses roughly 500-1000 API calls. At $0.017 per call, that's ~$8-17 per run. Well within the free $200/month credit.

## Master CSV Format

| Column | Description |
|---|---|
| Trade | Trade category (Plumbing, Electrical, etc.) |
| Name | Business or person name |
| Phone | Phone number, normalized to (XXX) XXX-XXXX |
| Email | Email address (when available) |
| Post_Date | Date of listing (Craigslist posts) |
| Status | Active (posted in last 30 days) or Recent |
| Source_URL | Link to original listing for verification |
