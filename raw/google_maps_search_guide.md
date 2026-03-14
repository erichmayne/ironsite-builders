# Google Maps Business Search Guide
## Finding Tradesmen Without Websites in Seattle

### Search Process

**For each trade category, follow these steps:**

1. Navigate to: https://www.google.com/maps
2. Enter the search term in the search box
3. Review each business listing in the left panel
4. Click on individual businesses to view full details
5. **Identify businesses WITHOUT websites** (no "Website" button/link shown)
6. Record the required information

---

## TRADE 1: Plumbers

**Search term:** `plumber near Seattle WA`

### What to look for:
- Business listings that show:
  - ✓ Phone number
  - ✓ Address
  - ✓ Hours
  - ✓ Rating/Reviews
  - ✗ **NO "Website" link** (this is the key criteria)

### Businesses Found:
_(Record 10-15 businesses without websites)_

| Business Name | Phone | Address | Rating | Reviews |
|--------------|-------|---------|--------|---------|
| | | | | |

---

## TRADE 2: Electricians

**Search term:** `electrician near Seattle WA`

### Businesses Found:
_(Record 10-15 businesses without websites)_

| Business Name | Phone | Address | Rating | Reviews |
|--------------|-------|---------|--------|---------|
| | | | | |

---

## TRADE 3: HVAC Repair

**Search term:** `HVAC repair near Seattle WA`

### Businesses Found:
_(Record 10-15 businesses without websites)_

| Business Name | Phone | Address | Rating | Reviews |
|--------------|-------|---------|--------|---------|
| | | | | |

---

## Tips for Efficient Searching:

1. **Scroll through the list** - Google Maps shows 20+ results, keep scrolling to see more
2. **Skip businesses with websites** - Look for the "Website" button; if present, skip it
3. **Check for complete info** - Some listings may be incomplete; prioritize those with phone & address
4. **Rating format** - Record as "4.5" with review count as a separate number "23"
5. **Phone format** - Copy exactly as shown (usually formatted as (XXX) XXX-XXXX)
6. **Address** - Copy the full street address shown

## Adding Results to CSV:

Once you've collected the data, add each business as a new row in the CSV file:

```
Trade,Name,Phone,Address,Rating,Reviews,Source
Plumber,ABC Plumbing,(206) 555-0123,"123 Main St, Seattle, WA 98101",4.5,23,Google Maps
```

**Important CSV formatting:**
- Wrap addresses in quotes if they contain commas
- Use consistent phone formatting
- Rating should be numeric (4.5, not "4.5 stars")
- Reviews should be just the count number
- Source should always be "Google Maps"
