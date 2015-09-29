MAS.factory('Categories', function(){
    var categories = [
        {
            name: 'Research',
            active: true,
            filterCategories: [
                {
                    name: 'strategyStatus',
                    dataType: 'checklist',
                    values : ['Active', 'Removed', 'Restricted', 'Updated']
                },
                {
                    name: 'Manager',
                    dataType: 'checklist'
                },
                {
                    name: 'strategy',
                    dataType: 'search',
                    values: ["TPI Dividend Growth Strategy (K-1 generating)", "TPI Dividend Growth Strategy (non K-1 generating)", "Windhaven Diversified Aggressive", "Windhaven Diversified Conservative", "Windhaven Diversified Growth", "CSIM Large-Cap Core Portfolio", "CSIM Dividend Equity Portfolio", "GW&K Equity Dividend Plus Strategy", "Neuberger All-Cap Core Tax Aware", "Neuberger All-Cap Core Tax Neutral", "ClearBridge Multi-Cap Growth ESG", "Oak Ridge All-Cap Growth", "Riverbridge All-Cap Growth", "Diamond Hill Select", "Jennison Opportunistic Equity", "Nuveen Aggressive Portfolio", "Nuveen Mod Aggressive Portfolio-Muni Bonds", "Nuveen Mod Conser Portfolio-Muni Bonds", "Nuveen Moderate Portfolio-Muni Bonds", "Parametric Aggressive Portfolio", "Parametric Mod Aggressive Portfolio-Muni Bonds", "Parametric Mod Aggressive Portfolio-Taxable Bonds", "Parametric Mod Conser Portfolio-Muni Bonds", "Parametric Mod Conser Portfolio-Taxable Bonds", "Parametric Moderate Portfolio-Muni Bonds", "Parametric Moderate Portfolio-Taxable Bonds", "Eagle Asset Management Strategic Income Portfolio", "Lazard Emerging Markets Equity Select ADR", "Lazard Global Equity Income ADR", "Lazard Global Equity Select ADR", "O'Shaughnessy Enhanced Dividend", "JPMorgan International Core ADR", "Neuberger International Core ADR", "Scout International Equity ADR", "Invesco International ADR Growth?Pending Closure", "Thornburg International Growth ADR Strategy - Wrap", "Renaissance International Small-Cap Equity", "Cambiar International ADR", "Lazard International Equity Select ADR", "Atlanta High Quality Select Equity", "BlackRock Large-Cap Core Equity", "ClearBridge Appreciation", "Neuberger Socially Responsive Equity", "Parametric Tax-Managed Core - S&P 500", "Calvert/Atlanta Socially Responsible Equity", "Columbia Select Large-Cap Growth", "Marsico Capital Large-Cap Growth", "GSAM Large-Cap Growth", "Wells Fargo Fundamental Large-Cap Select Growth", "Winslow Capital Large-Cap Growth"]
                },
                {
                    name: 'Investment Style',
                    dataType: 'number'
                },
                {
                    name: 'Minimum',
                    dataType: 'checklist'
                },
                {
                    name: 'Status',
                    dataType: 'checklist'
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
