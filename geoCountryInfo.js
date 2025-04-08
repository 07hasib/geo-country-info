const countries = [
  { code: 'US', name: 'United States', dialCode: '+1' },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44' },
  { code: 'CA', name: 'Canada', dialCode: '+1' },
  { code: 'AU', name: 'Australia', dialCode: '+61' },
  { code: 'IN', name: 'India', dialCode: '+91' },
  { code: 'JP', name: 'Japan', dialCode: '+81' },
  { code: 'DE', name: 'Germany', dialCode: '+49' },
  { code: 'FR', name: 'France', dialCode: '+33' },
  { code: 'BR', name: 'Brazil', dialCode: '+55' },
  { code: 'CN', name: 'China', dialCode: '+86' },
  { code: 'RU', name: 'Russia', dialCode: '+7' },
  { code: 'ZA', name: 'South Africa', dialCode: '+27' },
  { code: 'MX', name: 'Mexico', dialCode: '+52' },
  { code: 'IT', name: 'Italy', dialCode: '+39' },
  { code: 'ES', name: 'Spain', dialCode: '+34' },
  { code: 'KR', name: 'South Korea', dialCode: '+82' },
  { code: 'SG', name: 'Singapore', dialCode: '+65' },
  { code: 'AE', name: 'United Arab Emirates', dialCode: '+971' },
  { code: 'NG', name: 'Nigeria', dialCode: '+234' },
  { code: 'EG', name: 'Egypt', dialCode: '+20' }
];

function getCountryDetails(countryCode) {
  const country = countries.find(c => c.code === countryCode?.toUpperCase());
  if (country) {
    return {
      countryCode: country.code,
      dialCode: country.dialCode
    };
  } else {
    return null;
  }
}

window.geoCountryData = {};

function fetchGeoInfo() {
  fetch('https://d2pu3v2r6r77j3.cloudfront.net/geo-info')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const countryInfo = getCountryDetails(data.country);
      window.geoCountryData = {
        ...data,
        ...countryInfo
      };
      window.dispatchEvent(new Event('geoCountryDataReady'));
    })
    .catch(error => {
      console.error('Error fetching the geo-info:', error);
    });
}

window.addEventListener('DOMContentLoaded', fetchGeoInfo);
