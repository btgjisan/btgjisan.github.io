MAS.factory('Categories', function(){
    //var moneyManagers =

    var categories = [
        {
            name: 'Research',
            active: true,
            filterCategories: [
                {
                    displayName : 'Status',
                    name: 'status',
                    dataType: 'checklist',
                    values : ['New', 'On Watch', 'Closed', 'Pending Closure', 'Removed']
                },
                {
                    displayName : 'Money Managers',
                    name: 'moneyManager',
                    dataType: 'search',
                    values: ["ThomasPartners, Inc.", "Windhaven Investment Management, Inc.", "Charles Schwab Investment Management, Inc.", "GW&K Investment Management, LLC", "Neuberger Berman, LLC", "Legg Mason Private Portfolio Group, LLC", "Oak Ridge Investments, LLC", "Riverbridge Partners LLC", "Diamond Hill Capital Management, Inc.", "Jennison Associates LLC", "Nuveen Investments Advisers Inc.", "Parametric Portfolio Associates LLC", "Eagle Asset Management, Inc.", "Lazard Asset Management LLC", "O'Shaughnessy Asset Management, LLC", "JPMorgan Investment Management Inc.", "Scout Investments, Inc.", "Invesco Advisers, Inc.", "Thornburg Investment Management, Inc.", "Renaissance Investment Management", "Cambiar Investors, LLC", "Atlanta Capital Management Company, LLC", "BlackRock Investment Management, LLC", "Columbia Management Investment Advisers, LLC", "Goldman Sachs Asset Management, L.P.", "Wells Fargo Funds Management, LLC", "Winslow Capital Management LLC", "Equity Investment Corporation", "Geneva Advisors, LLC", "TCW Investment Management Co.", "Zacks Investment Management, Inc.", "New Amsterdam Partners LLC", "Principal Global Investors, LLC", "", "Nuance Investments, LLC", "Systematic Financial Management, L.P.", "Salient Capital Advisors, LLC", "AEW Capital Management, L.P.", "Adelante Capital Management LLC", "Glenmede Investment Management, LP", "PNC Capital Advisors LLC", "Franklin Templeton Portfolio Advisors, Inc.", "Dalton, Greiner, Hartman, Maher & Co., LLC", "Fred Alger Management, Inc", "NGAM Advisors, L.P.", "PIMCO", "Cincinnati Asset Management Inc", "Madison Investment Advisors, LLC", "Stonebridge Advisors LLC", "Chandler Asset Management, Inc.", "AllianceBernstein L.P.", "Breckinridge Capital Advisors, Inc.", "Nuveen Asset Management, LLC"]
                },
                {
                    displayName: 'Strategy',
                    name: 'strategy',
                    dataType: 'search',
                    values: ["TPI Dividend Growth Strategy (K-1 generating)", "TPI Dividend Growth Strategy (non K-1 generating)", "Windhaven Diversified Aggressive", "Windhaven Diversified Conservative", "Windhaven Diversified Growth", "CSIM Large-Cap Core Portfolio", "CSIM Dividend Equity Portfolio", "GW&K Equity Dividend Plus Strategy", "Neuberger All-Cap Core Tax Aware", "Neuberger All-Cap Core Tax Neutral", "ClearBridge Multi-Cap Growth ESG", "Oak Ridge All-Cap Growth", "Riverbridge All-Cap Growth", "Diamond Hill Select", "Jennison Opportunistic Equity", "Nuveen Aggressive Portfolio", "Nuveen Mod Aggressive Portfolio-Muni Bonds", "Nuveen Mod Conser Portfolio-Muni Bonds", "Nuveen Moderate Portfolio-Muni Bonds", "Parametric Aggressive Portfolio", "Parametric Mod Aggressive Portfolio-Muni Bonds", "Parametric Mod Aggressive Portfolio-Taxable Bonds", "Parametric Mod Conser Portfolio-Muni Bonds", "Parametric Mod Conser Portfolio-Taxable Bonds", "Parametric Moderate Portfolio-Muni Bonds", "Parametric Moderate Portfolio-Taxable Bonds", "Eagle Asset Management Strategic Income Portfolio", "Lazard Emerging Markets Equity Select ADR", "Lazard Global Equity Income ADR", "Lazard Global Equity Select ADR", "O'Shaughnessy Enhanced Dividend", "JPMorgan International Core ADR", "Neuberger International Core ADR", "Scout International Equity ADR", "Invesco International ADR Growth?Pending Closure", "Thornburg International Growth ADR Strategy - Wrap", "Renaissance International Small-Cap Equity", "Cambiar International ADR", "Lazard International Equity Select ADR", "Atlanta High Quality Select Equity", "BlackRock Large-Cap Core Equity", "ClearBridge Appreciation", "Neuberger Socially Responsive Equity", "Parametric Tax-Managed Core - S&P 500", "Calvert/Atlanta Socially Responsible Equity", "Columbia Select Large-Cap Growth", "Marsico Capital Large-Cap Growth", "GSAM Large-Cap Growth", "Wells Fargo Fundamental Large-Cap Select Growth", "Winslow Capital Large-Cap Growth"]
                },
                {
                    displayName : 'Investment Style',
                    name: 'style',
                    dataType: 'search',
                    values : ["All Cap Core", "Asset Allocation", "Large Cap Core", "Large Cap Value", "All Cap Growth", "All Cap Value", "Balanced", "Emerging Markets", "Global Equity", "International Core", "International Growth", "International Small Cap", "International Value", "Large Cap Growth", "Mid Cap Core", "Mid Cap Growth", "Mid Cap Value", "", "Master Limited Partnerships", "REITs", "Small Cap Core", "Small Cap Growth", "Small Cap Value", "Small-Mid Cap Core", "Small-Mid Cap Growth", "Small-Mid Cap Value", "Core Bond", "Intermediate Bond", "Preferreds", "Short-Term Bond", "Intermediate-Term Municipals", "Long-Term Municipals", "Short-Term Municipals"]
                },
                {
                    displayName : 'Minimum',
                    name: 'minimum',
                    dataType: 'checklist',
                    values: ["$100,000", "$150,000", "$200,000", "$250,000", "$350,000", "$650,000", "$500,000", "$1,000,000" ]
                },
                {
                    displayName : 'Strategy Status',
                    name: 'strategyStatus',
                    dataType: 'checklist',
                    values : ['Active', 'Removed', 'Restricted', 'Updated']
                }
            ]
        },
        {
            name: 'Requirements',
            active: false,
            filterCategories: [
                {
                    name: 'Requirements 1',
                    dataType: 'category'
                }, {
                    name: "Requirements 2",
                    dataType: 'category'
                }
            ]
        },
        {
            name: 'Tax',
            active: false,
            filterCategories: [
                {
                    name: 'Tax 1',
                    dataType: 'category'
                }, {
                    name: 'Tax2',
                    dataType: 'category'
                }
            ]
        }
    ];

    return categories;
});
