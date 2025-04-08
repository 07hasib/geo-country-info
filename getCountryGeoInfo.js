const countries = [
        { name: "Afghanistan", code: "AF", dial: "+93", currencyIsoCode: "AFN" },
        { name: "Albania", code: "AL", dial: "+355", currencyIsoCode: "ALL" },
        { name: "Algeria", code: "DZ", dial: "+213", currencyIsoCode: "DZD" },
        { name: "Andorra", code: "AD", dial: "+376", currencyIsoCode: "EUR" },
        { name: "Angola", code: "AO", dial: "+244", currencyIsoCode: "AOA" },
        { name: "Antigua and Barbuda", code: "AG", dial: "+1-268", currencyIsoCode: "XCD" },
        { name: "Argentina", code: "AR", dial: "+54", currencyIsoCode: "ARS" },
        { name: "Armenia", code: "AM", dial: "+374", currencyIsoCode: "AMD" },
        { name: "Australia", code: "AU", dial: "+61", currencyIsoCode: "AUD" },
        { name: "Austria", code: "AT", dial: "+43", currencyIsoCode: "EUR" },
        { name: "Azerbaijan", code: "AZ", dial: "+994", currencyIsoCode: "AZN" },
        { name: "Bahamas", code: "BS", dial: "+1-242", currencyIsoCode: "BSD" },
        { name: "Bahrain", code: "BH", dial: "+973", currencyIsoCode: "BHD" },
        { name: "Bangladesh", code: "BD", dial: "+880", currencyIsoCode: "BDT" },
        { name: "Barbados", code: "BB", dial: "+1-246", currencyIsoCode: "BBD" },
        { name: "Belarus", code: "BY", dial: "+375", currencyIsoCode: "BYN" },
        { name: "Belgium", code: "BE", dial: "+32", currencyIsoCode: "EUR" },
        { name: "Belize", code: "BZ", dial: "+501", currencyIsoCode: "BZD" },
        { name: "Benin", code: "BJ", dial: "+229", currencyIsoCode: "XOF" },
        { name: "Bhutan", code: "BT", dial: "+975", currencyIsoCode: "BTN" },
        { name: "Bolivia", code: "BO", dial: "+591", currencyIsoCode: "BOB" },
        { name: "Bosnia and Herzegovina", code: "BA", dial: "+387", currencyIsoCode: "BAM" },
        { name: "Botswana", code: "BW", dial: "+267", currencyIsoCode: "BWP" },
        { name: "Brazil", code: "BR", dial: "+55", currencyIsoCode: "BRL" },
        { name: "Brunei", code: "BN", dial: "+673", currencyIsoCode: "BND" },
        { name: "Bulgaria", code: "BG", dial: "+359", currencyIsoCode: "BGN" },
        { name: "Burkina Faso", code: "BF", dial: "+226", currencyIsoCode: "XOF" },
        { name: "Burundi", code: "BI", dial: "+257", currencyIsoCode: "BIF" },
        { name: "Cabo Verde", code: "CV", dial: "+238", currencyIsoCode: "CVE" },
        { name: "Cambodia", code: "KH", dial: "+855", currencyIsoCode: "KHR" },
        { name: "Cameroon", code: "CM", dial: "+237", currencyIsoCode: "XAF" },
        { name: "Canada", code: "CA", dial: "+1", currencyIsoCode: "CAD" },
        { name: "Central African Republic", code: "CF", dial: "+236", currencyIsoCode: "XAF" },
        { name: "Chad", code: "TD", dial: "+235", currencyIsoCode: "XAF" },
        { name: "Chile", code: "CL", dial: "+56", currencyIsoCode: "CLP" },
        { name: "China", code: "CN", dial: "+86", currencyIsoCode: "CNY" },
        { name: "Colombia", code: "CO", dial: "+57", currencyIsoCode: "COP" },
        { name: "Comoros", code: "KM", dial: "+269", currencyIsoCode: "KMF" },
        { name: "Congo, Democratic Republic of the", code: "CD", dial: "+243", currencyIsoCode: "CDF" },
        { name: "Congo, Republic of the", code: "CG", dial: "+242", currencyIsoCode: "XAF" },
        { name: "Costa Rica", code: "CR", dial: "+506", currencyIsoCode: "CRC" },
        { name: "Croatia", code: "HR", dial: "+385", currencyIsoCode: "HRK" },
        { name: "Cuba", code: "CU", dial: "+53", currencyIsoCode: "CUP" },
        { name: "Cyprus", code: "CY", dial: "+357", currencyIsoCode: "EUR" },
        { name: "Czech Republic", code: "CZ", dial: "+420", currencyIsoCode: "CZK" },
        { name: "Denmark", code: "DK", dial: "+45", currencyIsoCode: "DKK" },
        { name: "Djibouti", code: "DJ", dial: "+253", currencyIsoCode: "DJF" },
        { name: "Dominica", code: "DM", dial: "+1-767", currencyIsoCode: "XCD" },
        { name: "Dominican Republic", code: "DO", dial: "+1-809", currencyIsoCode: "DOP" },
        { name: "East Timor (Timor-Leste)", code: "TL", dial: "+670", currencyIsoCode: "USD" },
        { name: "Ecuador", code: "EC", dial: "+593", currencyIsoCode: "USD" },
        { name: "Egypt", code: "EG", dial: "+20", currencyIsoCode: "EGP" },
        { name: "El Salvador", code: "SV", dial: "+503", currencyIsoCode: "USD" },
        { name: "Equatorial Guinea", code: "GQ", dial: "+240", currencyIsoCode: "XAF" },
        { name: "Eritrea", code: "ER", dial: "+291", currencyIsoCode: "ERN" },
        { name: "Estonia", code: "EE", dial: "+372", currencyIsoCode: "EUR" },
        { name: "Eswatini (Swaziland)", code: "SZ", dial: "+268", currencyIsoCode: "SZL" },
        { name: "Ethiopia", code: "ET", dial: "+251", currencyIsoCode: "ETB" },
        { name: "Fiji", code: "FJ", dial: "+679", currencyIsoCode: "FJD" },
        { name: "Finland", code: "FI", dial: "+358", currencyIsoCode: "EUR" },
        { name: "France", code: "FR", dial: "+33", currencyIsoCode: "EUR" },
        { name: "Gabon", code: "GA", dial: "+241", currencyIsoCode: "XAF" },
        { name: "Gambia", code: "GM", dial: "+220", currencyIsoCode: "GMD" },
        { name: "Georgia", code: "GE", dial: "+995", currencyIsoCode: "GEL" },
        { name: "Germany", code: "DE", dial: "+49", currencyIsoCode: "EUR" },
        { name: "Ghana", code: "GH", dial: "+233", currencyIsoCode: "GHS" },
        { name: "Greece", code: "GR", dial: "+30", currencyIsoCode: "EUR" },
        { name: "Grenada", code: "GD", dial: "+1-473", currencyIsoCode: "XCD" },
        { name: "Guatemala", code: "GT", dial: "+502", currencyIsoCode: "GTQ" },
        { name: "Guinea", code: "GN", dial: "+224", currencyIsoCode: "GNF" },
        { name: "Guinea-Bissau", code: "GW", dial: "+245", currencyIsoCode: "XOF" },
        { name: "Guyana", code: "GY", dial: "+592", currencyIsoCode: "GYD" },
        { name: "Haiti", code: "HT", dial: "+509", currencyIsoCode: "HTG" },
        { name: "Honduras", code: "HN", dial: "+504", currencyIsoCode: "HNL" },
        { name: "Hungary", code: "HU", dial: "+36", currencyIsoCode: "HUF" },
        { name: "Iceland", code: "IS", dial: "+354", currencyIsoCode: "ISK" },
        { name: "India", code: "IN", dial: "+91", currencyIsoCode: "INR" },
        { name: "Indonesia", code: "ID", dial: "+62", currencyIsoCode: "IDR" },
        { name: "Iran", code: "IR", dial: "+98", currencyIsoCode: "IRR" },
        { name: "Iraq", code: "IQ", dial: "+964", currencyIsoCode: "IQD" },
        { name: "Ireland", code: "IE", dial: "+353", currencyIsoCode: "EUR" },
        { name: "Israel", code: "IL", dial: "+972", currencyIsoCode: "ILS" },
        { name: "Italy", code: "IT", dial: "+39", currencyIsoCode: "EUR" },
        { name: "Jamaica", code: "JM", dial: "+1-876", currencyIsoCode: "JMD" },
        { name: "Japan", code: "JP", dial: "+81", currencyIsoCode: "JPY" },
        { name: "Jordan", code: "JO", dial: "+962", currencyIsoCode: "JOD" },
        { name: "Kazakhstan", code: "KZ", dial: "+7", currencyIsoCode: "KZT" },
        { name: "Kenya", code: "KE", dial: "+254", currencyIsoCode: "KES" },
        { name: "Kiribati", code: "KI", dial: "+686", currencyIsoCode: "AUD" },
        { name: "Korea, North", code: "KP", dial: "+850", currencyIsoCode: "KPW" },
        { name: "Korea, South", code: "KR", dial: "+82", currencyIsoCode: "KRW" },
        { name: "Kosovo", code: "XK", dial: "+383", currencyIsoCode: "EUR" },
        { name: "Kuwait", code: "KW", dial: "+965", currencyIsoCode: "KWD" },
        { name: "Kyrgyzstan", code: "KG", dial: "+996", currencyIsoCode: "KGS" },
        { name: "Laos", code: "LA", dial: "+856", currencyIsoCode: "LAK" },
        { name: "Latvia", code: "LV", dial: "+371", currencyIsoCode: "EUR" },
        { name: "Lebanon", code: "LB", dial: "+961", currencyIsoCode: "LBP" },
        { name: "Lesotho", code: "LS", dial: "+266", currencyIsoCode: "LSL" },
        { name: "Liberia", code: "LR", dial: "+231", currencyIsoCode: "LRD" },
        { name: "Libya", code: "LY", dial: "+218", currencyIsoCode: "LYD" },
        { name: "Liechtenstein", code: "LI", dial: "+423", currencyIsoCode: "CHF" },
        { name: "Lithuania", code: "LT", dial: "+370", currencyIsoCode: "EUR" },
        { name: "Luxembourg", code: "LU", dial: "+352", currencyIsoCode: "EUR" },
        { name: "Madagascar", code: "MG", dial: "+261", currencyIsoCode: "MGA" },
        { name: "Malawi", code: "MW", dial: "+265", currencyIsoCode: "MWK" },
        { name: "Malaysia", code: "MY", dial: "+60", currencyIsoCode: "MYR" },
        { name: "Maldives", code: "MV", dial: "+960", currencyIsoCode: "MVR" },
        { name: "Mali", code: "ML", dial: "+223", currencyIsoCode: "XOF" },
        { name: "Malta", code: "MT", dial: "+356", currencyIsoCode: "EUR" },
        { name: "Marshall Islands", code: "MH", dial: "+692", currencyIsoCode: "USD" },
        { name: "Mauritania", code: "MR", dial: "+222", currencyIsoCode: "MRU" },
        { name: "Mauritius", code: "MU", dial: "+230", currencyIsoCode: "MUR" },
        { name: "Mexico", code: "MX", dial: "+52", currencyIsoCode: "MXN" },
        { name: "Micronesia", code: "FM", dial: "+691", currencyIsoCode: "USD" },
        { name: "Moldova", code: "MD", dial: "+373", currencyIsoCode: "MDL" },
        { name: "Monaco", code: "MC", dial: "+377", currencyIsoCode: "EUR" },
        { name: "Mongolia", code: "MN", dial: "+976", currencyIsoCode: "MNT" },
        { name: "Montenegro", code: "ME", dial: "+382", currencyIsoCode: "EUR" },
        { name: "Morocco", code: "MA", dial: "+212", currencyIsoCode: "MAD" },
        { name: "Mozambique", code: "MZ", dial: "+258", currencyIsoCode: "MZN" },
        { name: "Myanmar (Burma)", code: "MM", dial: "+95", currencyIsoCode: "MMK" },
        { name: "Namibia", code: "NA", dial: "+264", currencyIsoCode: "NAD" },
        { name: "Nauru", code: "NR", dial: "+674", currencyIsoCode: "AUD" },
        { name: "Nepal", code: "NP", dial: "+977", currencyIsoCode: "NPR" },
        { name: "Netherlands", code: "NL", dial: "+31", currencyIsoCode: "EUR" },
        { name: "New Zealand", code: "NZ", dial: "+64", currencyIsoCode: "NZD" },
        { name: "Nicaragua", code: "NI", dial: "+505", currencyIsoCode: "NIO" },
        { name: "Niger", code: "NE", dial: "+227", currencyIsoCode: "XOF" },
        { name: "Nigeria", code: "NG", dial: "+234", currencyIsoCode: "NGN" },
        { name: "North Macedonia", code: "MK", dial: "+389", currencyIsoCode: "MKD" },
        { name: "Norway", code: "NO", dial: "+47", currencyIsoCode: "NOK" },
        { name: "Oman", code: "OM", dial: "+968", currencyIsoCode: "OMR" },
        { name: "Pakistan", code: "PK", dial: "+92", currencyIsoCode: "PKR" },
        { name: "Palau", code: "PW", dial: "+680", currencyIsoCode: "USD" },
        { name: "Palestine", code: "PS", dial: "+970", currencyIsoCode: "ILS" },
        { name: "Panama", code: "PA", dial: "+507", currencyIsoCode: "PAB" },
        { name: "Papua New Guinea", code: "PG", dial: "+675", currencyIsoCode: "PGK" },
        { name: "Paraguay", code: "PY", dial: "+595", currencyIsoCode: "PYG" },
        { name: "Peru", code: "PE", dial: "+51", currencyIsoCode: "PEN" },
        { name: "Philippines", code: "PH", dial: "+63", currencyIsoCode: "PHP" },
        { name: "Poland", code: "PL", dial: "+48", currencyIsoCode: "PLN" },
        { name: "Portugal", code: "PT", dial: "+351", currencyIsoCode: "EUR" },
        { name: "Qatar", code: "QA", dial: "+974", currencyIsoCode: "QAR" },
        { name: "Romania", code: "RO", dial: "+40", currencyIsoCode: "RON" },
        { name: "Russia", code: "RU", dial: "+7", currencyIsoCode: "RUB" },
        { name: "Rwanda", code: "RW", dial: "+250", currencyIsoCode: "RWF" },
        { name: "Saint Kitts and Nevis", code: "KN", dial: "+1-869", currencyIsoCode: "XCD" },
        { name: "Saint Lucia", code: "LC", dial: "+1-758", currencyIsoCode: "XCD" },
        { name: "Saint Vincent and the Grenadines", code: "VC", dial: "+1-784", currencyIsoCode: "XCD" },
        { name: "Samoa", code: "WS", dial: "+685", currencyIsoCode: "WST" },
        { name: "San Marino", code: "SM", dial: "+378", currencyIsoCode: "EUR" },
        { name: "Sao Tome and Principe", code: "ST", dial: "+239", currencyIsoCode: "STN" },
        { name: "Saudi Arabia", code: "SA", dial: "+966", currencyIsoCode: "SAR" },
        { name: "Senegal", code: "SN", dial: "+221", currencyIsoCode: "XOF" },
        { name: "Serbia", code: "RS", dial: "+381", currencyIsoCode: "RSD" },
        { name: "Seychelles", code: "SC", dial: "+248", currencyIsoCode: "SCR" },
        { name: "Sierra Leone", code: "SL", dial: "+232", currencyIsoCode: "SLL" },
        { name: "Singapore", code: "SG", dial: "+65", currencyIsoCode: "SGD" },
        { name: "Slovakia", code: "SK", dial: "+421", currencyIsoCode: "EUR" },
        { name: "Slovenia", code: "SI", dial: "+386", currencyIsoCode: "EUR" },
        { name: "Solomon Islands", code: "SB", dial: "+677", currencyIsoCode: "SBD" },
        { name: "Somalia", code: "SO", dial: "+252", currencyIsoCode: "SOS" },
        { name: "South Africa", code: "ZA", dial: "+27", currencyIsoCode: "ZAR" },
        { name: "South Sudan", code: "SS", dial: "+211", currencyIsoCode: "SSP" },
        { name: "Spain", code: "ES", dial: "+34", currencyIsoCode: "EUR" },
        { name: "Sri Lanka", code: "LK", dial: "+94", currencyIsoCode: "LKR" },
        { name: "Sudan", code: "SD", dial: "+249", currencyIsoCode: "SDG" },
        { name: "Suriname", code: "SR", dial: "+597", currencyIsoCode: "SRD" },
        { name: "Sweden", code: "SE", dial: "+46", currencyIsoCode: "SEK" },
        { name: "Switzerland", code: "CH", dial: "+41", currencyIsoCode: "CHF" },
        { name: "Syria", code: "SY", dial: "+963", currencyIsoCode: "SYP" },
        { name: "Taiwan", code: "TW", dial: "+886", currencyIsoCode: "TWD" },
        { name: "Tajikistan", code: "TJ", dial: "+992", currencyIsoCode: "TJS" },
        { name: "Tanzania", code: "TZ", dial: "+255", currencyIsoCode: "TZS" },
        { name: "Thailand", code: "TH", dial: "+66", currencyIsoCode: "THB" },
        { name: "Togo", code: "TG", dial: "+228", currencyIsoCode: "XOF" },
        { name: "Tonga", code: "TO", dial: "+676", currencyIsoCode: "TOP" },
        { name: "Trinidad and Tobago", code: "TT", dial: "+1-868", currencyIsoCode: "TTD" },
        { name: "Tunisia", code: "TN", dial: "+216", currencyIsoCode: "TND" },
        { name: "Turkey", code: "TR", dial: "+90", currencyIsoCode: "TRY" },
        { name: "Turkmenistan", code: "TM", dial: "+993", currencyIsoCode: "TMT" },
        { name: "Tuvalu", code: "TV", dial: "+688", currencyIsoCode: "AUD" },
        { name: "Uganda", code: "UG", dial: "+256", currencyIsoCode: "UGX" },
        { name: "Ukraine", code: "UA", dial: "+380", currencyIsoCode: "UAH" },
        { name: "United Arab Emirates", code: "AE", dial: "+971", currencyIsoCode: "AED" },
        { name: "United Kingdom", code: "GB", dial: "+44", currencyIsoCode: "GBP" },
        { name: "United States", code: "US", dial: "+1", currencyIsoCode: "USD" },
        { name: "Uruguay", code: "UY", dial: "+598", currencyIsoCode: "UYU" },
        { name: "Uzbekistan", code: "UZ", dial: "+998", currencyIsoCode: "UZS" },
        { name: "Vanuatu", code: "VU", dial: "+678", currencyIsoCode: "VUV" },
        { name: "Vatican City", code: "VA", dial: "+39", currencyIsoCode: "EUR" },
        { name: "Venezuela", code: "VE", dial: "+58", currencyIsoCode: "VES" },
        { name: "Vietnam", code: "VN", dial: "+84", currencyIsoCode: "VND" },
        { name: "Yemen", code: "YE", dial: "+967", currencyIsoCode: "YER" },
        { name: "Zambia", code: "ZM", dial: "+260", currencyIsoCode: "ZMW" },
        { name: "Zimbabwe", code: "ZW", dial: "+263", currencyIsoCode: "ZWL" },
    ];

function getCountryDetails(countryCode) {
  const country = countries.find(c => c.code === code?.toUpperCase());
  if (country) {
    return {
      name: country.name
      code: country.code,
      dial: country.dial,
      currencyIsoCode: country.currencyIsoCode
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
