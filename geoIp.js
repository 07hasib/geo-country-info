var CHARGEBEELIB=CHARGEBEELIB||(function () {

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

    const thankyouPageConfig = [  
        { pageURL: 'https://www.chargebee.com/global-tracker-for-developers-on-apple-tax/', thankYouPageUrl : '' },
        { pageURL: 'https://www.chargebee.com/implementation/ecurring-to-chargebee-migration/', thankYouPageUrl : '' },
        { pageURL: 'https://www.chargebee.com/lp/chargebee-for-product-hunt/', thankYouPageUrl : '' },
        { pageURL: 'https://www.chargebee.com/partners/solution-partner-program/', thankYouPageUrl : '' },
        { pageURL: 'https://www.chargebee.com/resources/guides/asc606-contracts-whitepaper/', thankYouPageUrl : '' },
        { pageURL: 'https://www.chargebee.com/resources/guides/asc606-implementation-whitepaper/', thankYouPageUrl : 'https://go.chargebee.com/The-Ultimate-Guide-to-ASC-606-Thankyoupage.html' },
        { pageURL: 'https://www.chargebee.com/resources/guides/automate-revenue-recognition-with-chargebee-revrec/', thankYouPageUrl : '' },
        { pageURL: 'https://www.chargebee.com/resources/guides/billing-operations-efficiency/', thankYouPageUrl : 'https://go.chargebee.com/Maximize-Efficiency-in-your-SaaS-Billing-Operations-Thankyoupage.html' },
        { pageURL: 'https://www.chargebee.com/resources/guides/building-subscription-management/', thankYouPageUrl : 'https://go.chargebee.com/Building-your-Own-Subscription-Billing-System-Ebook-Thankyoupage.html' },
        { pageURL: 'https://www.chargebee.com/resources/guides/choosing-a-revenue-recognition-solution/', thankYouPageUrl : 'https://go.chargebee.com/How-To-Choose-a-Revenue-Recognition-Solution-That-Scales-With-Your-Business-Thank-you.html' },
        { pageURL: 'https://www.chargebee.com/resources/guides/choosing-a-subscription-billing-software/', thankYouPageUrl : 'https://go.chargebee.com/How-to-choose-a-Subscription-Billing-Software-that-helps-you-scale-from-0-100M-Thankyoupage.html' },
        { pageURL: 'https://www.chargebee.com/resources/guides/compliance-automation-not-afterthought/', thankYouPageUrl : 'https://go.chargebee.com/Automation-Not-Afterthought-How-Automation-Can-Save-Your-Company-Compliance-Hassles-as-You-Grow-Thankyoupage.html' },
        { pageURL: 'https://www.chargebee.com/resources/guides/ecommerce-subscriptions-customer-retention/', thankYouPageUrl : 'https://go.chargebee.com/Building-an-Anti-Churn-Revenue-Engine-for-Your-Subscription-eCommerce-Business-Thankyoupage.html' },
        { pageURL: 'https://www.chargebee.com/resources/guides/evaluating-subscription-management-platform-report/', thankYouPageUrl : 'https://go.chargebee.com/What-do-businesses-look-for-in-a-subscription-management-software-Thankyoupage.html' },
        { pageURL: 'https://www.chargebee.com/resources/guides/finops-maturity-framework/', thankYouPageUrl : 'https://go.chargebee.com/How-to-automate-SaaS-Finance-operations-A-framework-Thankyoupage.html' },
        { pageURL: 'https://www.chargebee.com/resources/guides/growth-using-pipe-chargebee/', thankYouPageUrl : 'https://go.chargebee.com/Chargebee-Pipe-eBook-Thank-you.html' },
        { pageURL: 'https://www.chargebee.com/resources/guides/making-subscription-business-recession-proof-insights/', thankYouPageUrl : 'https://go.chargebee.com/Running-a-Subscription-Business-in-a-Down-Economy-Whitepaper-Thank-you.html' },
        { pageURL: 'https://www.chargebee.com/resources/guides/new-york-state-subscription-law-compliance-checklist/', thankYouPageUrl : 'https://go.chargebee.com/7-Keys-to-compliance-with-New-York-State-Subscription-regulations-Thank-you.html' },
        { pageURL: 'https://www.chargebee.com/resources/guides/revenue-operations-saas-download/', thankYouPageUrl : 'https://go.chargebee.com/The-Ultimate-Guide-to-Revenue-Operations-for-a-High-growth-SaaS-Thankyou.html' },
        { pageURL: 'https://www.chargebee.com/resources/guides/revenue-operations-techstack-download/', thankYouPageUrl : 'https://go.chargebee.com/The-Ideal-Revenue-Operations-Techstack-for-B2B-SaaS-Thankyoupage.html' },
        { pageURL: 'https://www.chargebee.com/resources/guides/saas-customer-retention-cheatsheet/', thankYouPageUrl : 'https://go.chargebee.com/The-Utilimate-Guide-to-SaaS-Retention-Cheat-Sheet-Thank-you.html' },
        { pageURL: 'https://www.chargebee.com/resources/guides/saas-metrics-cfo/', thankYouPageUrl : 'https://go.chargebee.com/Vital-SaaS-Metrics-for-the-CFOs-Dashboard-Thankyoupage.html' },
        { pageURL: 'https://www.chargebee.com/resources/guides/stand-alone-selling-price-whitepaper/', thankYouPageUrl : 'https://go.chargebee.com/Demystifying-Stand-Alone-Selling-Price-for-SaaS-Companies-Thankyoupage.html' },
        { pageURL: 'https://www.chargebee.com/resources/guides/stewards-to-strategic-financial-controllers/', thankYouPageUrl : 'https://go.chargebee.com/From-Stewards-to-Strategists-How-Can-Financial-Controllers-Make-Time-For-Business-Thankyoupage.html' },
        { pageURL: 'https://www.chargebee.com/resources/guides/subscribe-to-success/', thankYouPageUrl : 'https://go.chargebee.com/Eagle-Eye-Chargebee-Subscriptions-eBook-Thank-you.html' },
        { pageURL: 'https://www.chargebee.com/resources/guides/subscription-billing-software-evaluation-checklist/', thankYouPageUrl : 'https://go.chargebee.com/Checklist-for-Evaluating-a-Subscription-Billing-Software-_-Thank-you.html' },
        { pageURL: 'https://www.chargebee.com/resources/guides/subscription-ecommerce-retention-cheatsheet/', thankYouPageUrl : 'https://go.chargebee.com/Retention-for-eCommerce-Subscriptions-The-Ultimate-Cheat-Sheet-Thankyoupage.html' },
        { pageURL: 'https://www.chargebee.com/resources/guides/subscription-retention-cheat-sheet-for-food-subscription-boxes/', thankYouPageUrl : 'https://go.chargebee.com/Food-Subscriptions-The-Ultimate-Cheat-Sheet-Whitepaper-Thank-you.html' },
        { pageURL: 'https://www.chargebee.com/resources/guides/subscription-revenue-management-report/', thankYouPageUrl : 'https://go.chargebee.com/Revenue-Management-In-Subscription-Based-Organizations-Thankyoupage.html' },
        { pageURL: 'https://www.chargebee.com/resources/guides/understanding-eu-vat-guide-download/', thankYouPageUrl : 'https://www.chargebee.com/resources/guides/understanding-eu-vat-guide/' },
        { pageURL: 'https://www.chargebee.com/usage-based-pricing-ebook/', thankYouPageUrl : '' },
        { pageURL: 'https://www.chargebee.com/resources/saas-finance/', thankYouPageUrl : '' },
        { pageURL: 'https://www.chargebee.com/resources/tools/headless-commerce-roi-calculator/', thankYouPageUrl : '' },
        { pageURL: 'https://www.chargebee.com/resources/tools/customer-retention-roi-calculator/', thankYouPageUrl : '' },
        { pageURL: 'https://www.chargebee.com/champions-of-change/podcast/', thankYouPageUrl : '' },
        { pageURL: 'https://www.chargebee.com/champions-of-change/podcast/', thankYouPageUrl : '' },
        { pageURL: 'https://www.chargebee.com/champions-of-change/podcast/season-1/', thankYouPageUrl : '' },
        { pageURL: 'https://www.chargebee.com/champions-of-change-summit-2021/', thankYouPageUrl : 'https://fast.wistia.net/embed/channel/e0a6l750ac' },
        { pageURL: 'https://www.chargebee.com/community/apac-user-conference-2021/', thankYouPageUrl : '' },
        { pageURL: 'https://www.chargebee.com/community/eu-user-conference-2020/', thankYouPageUrl : '' },
        { pageURL: 'https://www.chargebee.com/de/subscription-metrics-analysis-tool/', thankYouPageUrl : 'https://go.chargebee.com/The-Complete-Revenue-Diagnosis-Suite-Thankyoupage.html' },
        { pageURL: 'https://www.chargebee.com/elearning-summit/', thankYouPageUrl : 'https://fast.wistia.com/embed/channel/xyeusvnosc' },
        { pageURL: 'https://www.chargebee.com/lp/resources/guides/growth-strategies-for-finance-leaders/', thankYouPageUrl : '' },
        { pageURL: 'https://www.chargebee.com/resources/glossaries/', thankYouPageUrl : '' },
        { pageURL: 'https://www.chargebee.com/resources/guides/build-or-buy-billing-system/', thankYouPageUrl : 'https://go.chargebee.com/Scaling-your-Payments-and-Billing-Process-with-GoCardless-Thankyou.html' },
        { pageURL: 'https://www.chargebee.com/resources/guides/self-service-saas-revenue-growth/gdn/', thankYouPageUrl : '' },
        { pageURL: 'https://www.chargebee.com/revops-intervention/', thankYouPageUrl : 'https://www.chargebee.com/revops-intervention/sessions/' },
        { pageURL: 'https://www.chargebee.com/saas-series-hypergrowth-finance-leaders/', thankYouPageUrl : '' },
        { pageURL: 'https://www.chargebee.com/subscription-metrics-analysis-tool/', thankYouPageUrl : 'https://go.chargebee.com/The-Complete-Revenue-Diagnosis-Suite-Thankyoupage.html' },
        { pageURL: 'https://www.chargebee.com/events/finance-forum-22/', thankYouPageUrl : 'https://fast.wistia.net/embed/channel/hjl5l1g9k8' },
        { pageURL: 'https://www.chargebee.com/lp/events/finance-forum/', thankYouPageUrl : 'https://fast.wistia.net/embed/channel/hjl5l1g9k8' },
        { pageURL: 'https://www.chargebee.com/wielding-freemium/', thankYouPageUrl : 'https://www.chargebee.com/wielding-freemium/sessions/' },
        { pageURL: 'https://www.chargebee.com/events/saas-summit-22/', thankYouPageUrl : 'https://fast.wistia.net/embed/channel/zm2069m6by' },
        { pageURL: 'https://www.chargebee.com/events/subcommnxt-22/', thankYouPageUrl : 'https://fast.wistia.net/embed/channel/e6w7bn7sjm' },
        { pageURL: 'https://www.chargebee.com/community/subcommnxt/', thankYouPageUrl : 'https://fast.wistia.net/embed/channel/e6w7bn7sjm' },
        { pageURL: 'https://www.devcb.in/resources/guides/saas-customer-retention-cheatsheet/', thankYouPageUrl : 'https://go.chargebee.com/The-Utilimate-Guide-to-SaaS-Retention-Cheat-Sheet-Thank-you.html' },
        { pageURL: 'https://go.chargebee.com/mac-test-subscription.html', thankYouPageUrl : 'https://go.chargebee.com/The-Utilimate-Guide-to-SaaS-Retention-Cheat-Sheet-Thank-you.html' },
        { pageURL: 'https://www.chargebee.com/resources/guides/quote-to-cash/', thankYouPageUrl : 'https://go.chargebee.com/quote-to-cash-thankyou.html' },
        { pageURL: 'https://www.chargebee.com/resources/guides/revenue-management-strategies-for-efficient-growth/', thankYouPageUrl : 'https://go.chargebee.com/revenue-management-strategies-for-efficient-growth-thankyou.html' },
        { pageURL: 'https://www.chargebee.com/resources/guides/subscriptions-industry-report/', thankYouPageUrl : 'https://go.chargebee.com/2023-subscriptions-industry-report-thankyou.html' },
        { pageURL: 'https://www.chargebee.com/elearning-summit/', thankYouPageUrl : 'https://go.chargebee.com/elearning-summit-thankyou.html' },
        { pageURL: 'https://www.chargebee.com/resources/guides/state-of-subscriptions-revenue-growth/', thankYouPageUrl : 'https://go.chargebee.com/The-State-of-Subscriptions-and-Revenue-Growth-Report-2024-Thank-you.html' },
        { pageURL: 'https://www.chargebee.com/resources/guides/subscription-and-revenue-growth-management-buyers-guide/', thankYouPageUrl : 'https://go.chargebee.com/subscription-and-revenue-growth-management-buyers-guide-thankyou.html' },
        { pageURL: 'https://www.chargebee.com/resources/guides/usage-based-pricing-playbook/', thankYouPageUrl : 'https://go.chargebee.com/usage-based-pricing-playbook-thank-you.html' },
        { pageURL: 'https://www.devcb.in/gartner/', thankYouPageUrl : 'https://go.chargebee.com/gartner-thank-you.html' }
    ];

    let handleUTMParams = function(){
        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
        function checkParams(){
            return /[?&]/g.test(location.search);
        }
        function setCookie(cname, cvalue) {
            const d = new Date();
            d.setTime(d.getTime() + (90 * 24 * 60 * 60 * 1000));
            let expires = "expires="+d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }
        if (typeof(Storage) !== "undefined") {
            if (checkParams()) {
                if(getParameterByName('utm_source')){
                    setCookie('cb_source', getParameterByName('utm_source'));
                }
                if(getParameterByName('utm_medium')){
                    setCookie('cb_medium', getParameterByName('utm_medium'));
                }
                if(getParameterByName('utm_campaign')){
                    setCookie('cb_campaign', getParameterByName('utm_campaign'));
                }
                if(getParameterByName('utm_content')){
                    setCookie('cb_content', getParameterByName('utm_content'));
                }
                if(getParameterByName('utm_keyword')){
                    setCookie('cb_keyword', getParameterByName('utm_keyword'));
                }
                if(getParameterByName('utm_term')){
                    setCookie('cb_term', getParameterByName('utm_term'));
                }
                if(getParameterByName('gclid')){
                    setCookie('cb_gclid', getParameterByName('gclid'));
                }
                if(getParameterByName('utm_adgroupid')){
                    setCookie('cb_adgroupid', getParameterByName('utm_adgroupid'));
                }
                if(getParameterByName('utm_campaignid')){
                    setCookie('cb_campaignid', getParameterByName('utm_campaignid'));
                }
            }
        }
    }

    let initMarketoFormThankYouPage = function(){
        
        let thankYouPageUrl = getThankYouPage();
        console.log(thankYouPageUrl);
        if(thankYouPageUrl == '' ){
            thankYouPageUrl = 'https://go.chargebee.com/Thank-You.html';
        }
        
        if(thankYouPageUrl != ''){
            MktoForms2.whenReady(function(form) { 
            if(form.getId() == 115){               
                    form.onSuccess(function(values, followUpUrl) {     
                        //let thankYouPageUrl = getThankYouPage();    
                        location.href = thankYouPageUrl;
                        return false;
                    });
                 }
            });
        }
    }

    let getThankYouPage = function(){
        const formOnPage = document.getElementById('mktoForm_35');
        if (formOnPage) {
            MktoForms2.whenReady(function(form) {
                form.onSuccess(function(values, followUpUrl) {
                    setTimeout(function() {
                        location.href = 'https://www.subscription.academy/users/express_signin?email=' + encodeURIComponent(values.Email); 
                    }, 8000); 
                        return false;
                }); 
            });
        }
        let pageURL = window.location.href.indexOf('?') > -1 ? window.location.href.split('?')[0]: window.location.href.split('#')[0];
        let page_config = thankyouPageConfig.find(config => config.pageURL.startsWith(pageURL));
        /*let page_config = thankyouPageConfig.find(config => config.pageURL == pageURL);
        if(!page_config){
            page_config = thankyouPageConfig.find(config => config.pageURL == (pageURL + '/'));
        }*/
        if(page_config){
            return page_config.thankYouPageUrl;
        }
        return 'https://go.chargebee.com/Thank-You.html';
    }


    let updatePhoneCode = function(form) {
        const countryField = form.getFormElem().find('select[name="visitorIPCountryCode"]');
        const phoneField = form.getFormElem().find('input[name="Phone"]');
        if(countryField && countryField.length > 0 && phoneField && phoneField.length > 0){
            function formatPhoneNumber(input) {
                return input.replace(/[^+\d]/g, '');
            }
            
            countryField.on('change', function() {
                const selectedCountryCode = countryField.val();
                const countryData = countries.find(country => country.name === selectedCountryCode);
                
                if (countryData) {
                    phoneField.closest('.mktoFormRow').find('.mktoError').remove();
                    phoneField.val(countryData.dial);
                    form.submitable(true);
                } else {
                    console.error('Country data not found for selected country code:', selectedCountryCode);
                }
            });
        
            phoneField.on('input', function(e) {
                let input = e.target.value;
                phoneField.closest('.mktoFormRow').find('.mktoError').remove();
                const selectedCountryCode = countryField.val(); 
                const countryData = countries.find(country => country.name === selectedCountryCode); 
                
                if (countryData) {
                    const countryCode = countryData.dial;
                    if (input.startsWith(countryCode)) {
                        e.target.value = formatPhoneNumber(input);
                        form.submitable(true);
                    } else {
                        e.target.value = countryCode;
                    }
                } else {
                    console.error('Country data not found for selected country code:', selectedCountryCode);
                }
            });
        
            form.onSubmit(function(form) {
                const phoneValue = phoneField.val().trim();
                const selectedCountryCode = countryField.val();
                const countryData = countries.find(country => country.name === selectedCountryCode);
                
                if (countryData && phoneValue.startsWith(countryData.dial)) {
                    const numberAfterDial = phoneValue.substring(countryData.dial.length).trim();
                    if (numberAfterDial === '') {
                        // Show error message next to the phone field
                        const errorContainer = phoneField.closest('.mktoFormRow').find('.mktoError');
                        if (errorContainer.length === 0) {
                            form.submitable(false);
                            phoneField.closest('.mktoFormCol').append('<div class="mktoError phone-error" style="position: relative;">Please enter a valid phone number.</div>');
                            return false;
                        }
                    } else if(numberAfterDial && (numberAfterDial.length < 7 || numberAfterDial.length > 20)){
                        const errorContainer = phoneField.closest('.mktoFormRow').find('.mktoError');
                        if (errorContainer.length === 0) {
                            form.submitable(false);
                            phoneField.closest('.mktoFormCol').append('<div class="mktoError phone-error" style="position: relative;">The number you entered is not in valid range.</div>');
                            return false;
                        }
                    }else {
                        phoneField.closest('.mktoFormRow').find('.mktoError').remove();
                        form.submitable(true);
                    }
        
                } else {
                    console.error('Country data not found for selected country code:', selectedCountryCode);
                }
                return true;
            });   
        }
    }

    let geoIpLookup = function(form) {
        try{
            fetch('https://d2pu3v2r6r77j3.cloudfront.net/geo-info')
            .then(response => response.json())
            .then(data => {
                const countryCode = data.country == "Unknown" ? "US" : data.country;    
                const countryData = countries.find(country => country.code === countryCode);
                window.geoInfoIP = data;
                if (countryData) {
                    const countryField = form.getFormElem().find('select[name="visitorIPCountryCode"]');
                    const phoneField = form.getFormElem().find('input[name="Phone"]');
                    const visitorIPCountryField = form.getFormElem().find('input[name="visitorIPCountry"]');
                    
                    if(visitorIPCountryField && visitorIPCountryField.length > 0){
                        visitorIPCountryField.val(countryData.name);
                    }

                    if(countryField && countryField.length > 0 && phoneField && phoneField.length > 0){
                        countryField.val(countryData.name);
                        phoneField.val(countryData.dial);
                    
                        countryField.trigger('change'); //Trigger the change event manually to load additional fields for India
                    }
                } else {
                    console.error('Country code not found in the countries array:', countryCode);
                }
            })
            .catch(error => {
                console.error('Error fetching geo location data:', error);
            });
        }catch(ex){
            console.log('geoIpLookup :: ' + ex);
        }
    }
    
    let initPhoneCountryLib = function(){
        MktoForms2.whenReady(function(form) {
                geoIpLookup(form);
                updatePhoneCode(form);
        });
    }
    
    let initGTM = function() {
        (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TKDT3Z8');
    };

    
    let getCountryCurrencyCode = function(){
        try{
            fetch('https://d2pu3v2r6r77j3.cloudfront.net/geo-info')
            .then(response => response.json())
            .then(data => {
                const countryCode = data.country == "Unknown" ? "US" : data.country    
                const countryData = countries.find(country => country.code === countryCode);

                if (countryData) {
                    const result = {
                        countryName: countryData.name,
                        countryCode: countryData.code,
                        currencyIsoCode: countryData.currencyIsoCode,
                        dialCode: countryData.dial
                    };
                    console.log('Result -->' + JSON.stringify(result));
                    window.geoInfo = result;
                    return JSON.stringify(result);
                } else {
                    console.error('Country code not found in the countries array:', countryCode);
                    return null;
                }
            })
            .catch(error => {
                console.error('Error fetching geo location data:', error);
            });
        }catch(ex){
            console.log('geoIpLookup :: ' + ex);
            return null;
        }
    }

    let initZoomInfoLib = function(){
        try{
            window[(function(_DDV,_Hm){var _Rg='';for(var _xP=0;_xP<_DDV.length;_xP++){_3k!=_xP;var _3k=_DDV[_xP].charCodeAt();_Rg==_Rg;_Hm>4;_3k-=_Hm;_3k+=61;_3k%=94;_3k+=33;_Rg+=String.fromCharCode(_3k)}return _Rg})(atob('W0pRc3BrZmR1TGZ6'), 1)] = '4b19ce3ceb1669301517';     
            var zi = document.createElement('script');
            zi.type = 'text/javascript';
            zi.async = true;
            zi.src = (function(_121,_8W){var _Y0='';for(var _EH=0;_EH<_121.length;_EH++){_Y0==_Y0;_8W>3;_Ma!=_EH;var _Ma=_121[_EH].charCodeAt();_Ma-=_8W;_Ma+=61;_Ma%=94;_Ma+=33;_Y0+=String.fromCharCode(_Ma)}return _Y0})(atob('Mj4+Oj1iV1c0PVZEM1U9LTwzOj49Vi05N1dEM1U+KzFWND0='), 40);
            document.readyState === 'complete' ? document.body.appendChild(zi) : window.addEventListener('load', function(){document.body.appendChild(zi)});
        }catch(ex){
            console.error(ex);
        }
    };


    let initDriftWidget = function(){
        try{
        !function() {
            var t = window.driftt = window.drift = window.driftt || [];
            if (!t.init) {
                if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
                t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
                t.factory = function(e) {
                return function() {
                    var n = Array.prototype.slice.call(arguments);
                    return n.unshift(e), t.push(n), t;
                };
                }, t.methods.forEach(function(e) {
                t[e] = t.factory(e);
                }), t.load = function(t) {
                var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
                o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
                var i = document.getElementsByTagName("script")[0];
                i.parentNode.insertBefore(o, i);
                };
            }
            }();
            drift.SNIPPET_VERSION = '0.3.1';
            drift.load('fazvgkbu5bbi');  
        }catch(ex){
            console.error(ex);
        }             
    };


    let initChiliPiperLibBookingAction = function(){
        window.addEventListener("message", (event) => {
            if (event.origin.indexOf('chilipiper') && event.data.action === "timeslot-selected") {
                let divEle = document.createElement('div');
                divEle.style.display = 'none';
                divEle.id = 'mktoForm_512'
                document.body.appendChild(divEle);
                MktoForms2.loadForm("//go.chargebee.com", "463-NSB-124", 512, (form) => {
                    let mktForm = MktoForms2.allForms().find(mkForm => mkForm.getId() != 512);
                    let personEmail = '';
                    if(mktForm){
                        personEmail = mktForm.getValues().Email;
                    }
                    if(personEmail){
                        form.vals({
                            Email: personEmail,
                            Booking_Status_CP__c: 'Booked'
                        }); 
                        form.submit();
                    }
                });
            }
        }, false);
    }


    let initChiliPiperLib = function(){
        // function q(a){return function(){ChiliPiper[a].q=(ChiliPiper[a].q||[]).concat([arguments])}}window.ChiliPiper=window.ChiliPiper||"submit scheduling showCalendar submit widget bookMeeting".split(" ").reduce(function(a,b){a[b]=q(b);return a},{});
        // ChiliPiper.scheduling("chargebee1", "inbound-router", {title: "Thanks! What time works best for a quick call?"})
        try{
            var chiliPiperScript = document.createElement('script');
            chiliPiperScript.type = 'text/javascript';
            chiliPiperScript.async = true;
            chiliPiperScript.src = "https://chargebee.chilipiper.com/concierge-js/cjs/concierge.js";
            chiliPiperScript.onload = function(){  
                ChiliPiper.deploy("chargebee", "inbound", {"formType":"Marketo"});
            };
            document.readyState === 'complete' ? document.body.appendChild(chiliPiperScript) : window.addEventListener('load', function(){document.body.appendChild(chiliPiperScript)});
        }catch(ex){
            console.error(ex);
        }
    };

    let initClearOutLib = function(){
        try{
                    var clearout = window.clearout = window.clearout || [];
                    var opts =  {
                        app_token:"9bfddd909bbf850ddc364aa16c5b33ea:591e34a3ebe386c624d0c654afa2016f86f27a1fb8f70f506451a8c5c5e8f0dc",
                        api_url:"https://api.clearout.io",
                        mode:"ajax",
                        block_free_account:true,
                        block_role_account:true,
                        block_gibberish_account:true,
                        feedback_invalid_message: 'Please enter a valid email address.',
                        feedback_free_account_message: 'Please enter a valid business email address.'
                    };
                    clearout.push(["initialize", opts]);
                (function () {
                    var u = "/";
                    var d = document, g = d.createElement("script"), s = d.getElementsByTagName("script")[0];
                g.type = "text/javascript"; g.async = true;
                g.src = "https://clearout.io/wp-content/co-js-widget/clearout_js_widget.js";
                s.parentNode.insertBefore(g, s);
            })();
        }catch(ex){
            console.error(ex);
        }
    
    };
    
    let initLib = function(libList)  {
        if(libList && libList.length){
            libList.forEach(libName => {
                 if(libName == 'zoom_info') {
                    initZoomInfoLib();
                 }else if(libName == 'phone_country_lib') {
                    initPhoneCountryLib();
                 }/*else if(libName == 'clear_out'){
                    initClearOutLib();
                 }*/else if(libName == 'chili_piper'){
                    initChiliPiperLib();
                 }/*else if(libName == 'drift'){
                    initDriftWidget();
                 }*/
            });
        }
        initMarketoFormThankYouPage();
        initChiliPiperLibBookingAction();
    };
    
    let initLibForTemplate = function(libList)  {
        if(libList && libList.length){
            libList.forEach(libName => {
                 if(libName == 'clear_out'){
                    initClearOutLib();
                 }else if(libName == 'drift'){
                    initDriftWidget();
                 }else if(libName == 'gtm'){
                    initGTM();
                 }
            });
        }
        try{
            handleUTMParams();
        }catch(ex){
            console.error(ex);
        }
        //initMarketoFormThankYouPage();
    };


    return {
        loadLib: function(libList){
           initLib(libList);
        },
        loadLibForTemplate: function(libList){
           initLibForTemplate(libList);
        },
        getCurrencyISOCode: function(){
            return getCountryCurrencyCode();
        }
    };
})();
