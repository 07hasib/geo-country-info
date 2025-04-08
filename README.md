🧭 Geo Country Info – Step-by-Step Guide
📌 What it does
This JavaScript utility:

Fetches the user's geo-location info (like country, city, IP, etc.) from a remote endpoint.

Maps the country code to its dial code using a built-in list of countries.

Exposes the data globally as window.geoCountryData.

Triggers a browser event geoCountryDataReady once the data is ready.

✅ Steps to Use geo-country-info
1. Include the CDN Script
Paste this inside your HTML <body> or <head>:
----------CDN--------->
<script src="https://cdn.jsdelivr.net/gh/07hasib/geo-country-info/geoCountriesInfo.js"></script>
This script automatically starts fetching geo data on page load.

2. Create a Placeholder in HTML

----------HTML-------->
<pre id="geoOutput">Loading...</pre>

3. Listen for the Ready Event
Once the script finishes fetching and enriching the data, it dispatches a geoCountryDataReady event. Add this code to respond:

--------Javascript---->
<script>
  const outputEl = document.getElementById('geoOutput');

  window.addEventListener('geoCountryDataReady', () => {
    outputEl.textContent = JSON.stringify(window.geoCountryData, null, 2);
    console.log('geoCountryData -->', geoCountryData);
  });
</script>

4. What You Get
Once loaded, the page will:

Display the user’s IP, country, region, city, countryCode, and dialCode in the browser.

Log the same details in the console.

✅  Example Output
{
  "country": "IN",
  "city": "Delhi",
  "country_name": "India",
  "region": "DL",
  "region_name": "National Capital Territory of Delhi",
  "latitude": "28.65420",
  "longitude": "77.23730",
  "postal_code": "110008",
  "countryCode": "IN",
  "dialCode": "+91"
}

