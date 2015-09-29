angular.module('MAS', [

]).controller('SearchAndFilter', ['$scope', 'filterFilter',
  function($scope, filterFilter) {
    $scope.categories = [
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
            name: 'Strategy',
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

    $scope.selectCategory = function(category) {
      $scope.selectedcategory.active = false;
      delete $scope.selectedcategory;
      $scope.selectedcategory = category;
      category.active = true;
    };

    $scope.selectedcategory = $scope.categories[0];
    $scope.selectedcategory.active = true;

    $scope.filters = [
      {
        name : "Active Status",
        categories: [
          {
            name : 'strategyStatus',
            values : ['Active']
          }
        ]
      },
      {
        name : "Neuberger Strategies",
        categories : [{
          name : 'strategy',
          values : ['Neuberger']
        }]
      },
      {name : "Filter 3"}
    ];

    $scope.selectedFilter = null;

    $scope.selectFilter = function(filter){
      $scope.selectedFilter = filter;
      $scope.filterStrategies(filter.categories);
    };

    $scope.deleteFilter = function(filter){
      alert("Are you sure you want to delete " + filter.name + "?" )
    };

    $scope.editFilterName= function(filter){
      if(!filter){
        $scope.selectedFilter = {
          name : "New Filter",
          categories: []
        }
      }else{
        $scope.selectedFilter = filter;
      }
    };

    $scope.isChecked = function(value, category){
      if(!$scope.selectedFilter){
        return false
      }else if(!$scope.selectedFilter.categories){
        return false
      }else if(!$scope.selectedFilter.categories.length){
        return false
      }else{
        var match = false;
        for(var i=0; i < $scope.selectedFilter.categories.length; i++){
          if(category.name == $scope.selectedFilter.categories[i].name){
            if($scope.selectedFilter.categories[i].values.indexOf(value) !== -1){
              return true
            }
          }
        }
        return match
      }
    };

    $scope.sync = function(bool, value, category){
      console.log("bool", bool, "value", value, "category", category);
    };

    var strategies = [
        {"assetClass":"Equity","style":"All Cap Core","moneyManager":"ThomasPartners, Inc.","strategy":"TPI Dividend Growth Strategy (K-1 generating)","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"All Cap Core","moneyManager":"ThomasPartners, Inc.","strategy":"TPI Dividend Growth Strategy (non K-1 generating)","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Specialty/Other","style":"Asset Allocation","moneyManager":"Windhaven Investment Management, Inc.","strategy":"Windhaven Diversified Aggressive","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Specialty/Other","style":"Asset Allocation","moneyManager":"Windhaven Investment Management, Inc.","strategy":"Windhaven Diversified Conservative","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Specialty/Other","style":"Asset Allocation","moneyManager":"Windhaven Investment Management, Inc.","strategy":"Windhaven Diversified Growth","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Large Cap Core","moneyManager":"Charles Schwab Investment Management, Inc.","strategy":"CSIM Large-Cap Core Portfolio","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Large Cap Value","moneyManager":"Charles Schwab Investment Management, Inc.","strategy":"CSIM Dividend Equity Portfolio","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"All Cap Core","moneyManager":"GW&K Investment Management, LLC","strategy":"GW&K Equity Dividend Plus Strategy","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"All Cap Core","moneyManager":"Neuberger Berman, LLC","strategy":"Neuberger All-Cap Core Tax Aware","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"All Cap Core","moneyManager":"Neuberger Berman, LLC","strategy":"Neuberger All-Cap Core Tax Neutral","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"All Cap Growth","moneyManager":"Legg Mason Private Portfolio Group, LLC","strategy":"ClearBridge Multi-Cap Growth ESG","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"All Cap Growth","moneyManager":"Oak Ridge Investments, LLC","strategy":"Oak Ridge All-Cap Growth","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"All Cap Growth","moneyManager":"Riverbridge Partners LLC","strategy":"Riverbridge All-Cap Growth","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"All Cap Value","moneyManager":"Diamond Hill Capital Management, Inc.","strategy":"Diamond Hill Select","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"All Cap Value","moneyManager":"Jennison Associates LLC","strategy":"Jennison Opportunistic Equity","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Specialty/Other","style":"Asset Allocation","moneyManager":"Nuveen Investments Advisers Inc.","strategy":"Nuveen Aggressive Portfolio","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$250,000 "},
        {"assetClass":"Specialty/Other","style":"Asset Allocation","moneyManager":"Nuveen Investments Advisers Inc.","strategy":"Nuveen Mod Aggressive Portfolio-Muni Bonds","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$650,000 "},
        {"assetClass":"Specialty/Other","style":"Asset Allocation","moneyManager":"Nuveen Investments Advisers Inc.","strategy":"Nuveen Mod Conser Portfolio-Muni Bonds","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$350,000 "},
        {"assetClass":"Specialty/Other","style":"Asset Allocation","moneyManager":"Nuveen Investments Advisers Inc.","strategy":"Nuveen Moderate Portfolio-Muni Bonds","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$350,000 "},
        {"assetClass":"Specialty/Other","style":"Asset Allocation","moneyManager":"Parametric Portfolio Associates LLC","strategy":"Parametric Aggressive Portfolio","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$150,000 "},
        {"assetClass":"Specialty/Other","style":"Asset Allocation","moneyManager":"Parametric Portfolio Associates LLC","strategy":"Parametric Mod Aggressive Portfolio-Muni Bonds","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$650,000 "},
        {"assetClass":"Specialty/Other","style":"Asset Allocation","moneyManager":"Parametric Portfolio Associates LLC","strategy":"Parametric Mod Aggressive Portfolio-Taxable Bonds","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$650,000 "},
        {"assetClass":"Specialty/Other","style":"Asset Allocation","moneyManager":"Parametric Portfolio Associates LLC","strategy":"Parametric Mod Conser Portfolio-Muni Bonds","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$350,000 "},
        {"assetClass":"Specialty/Other","style":"Asset Allocation","moneyManager":"Parametric Portfolio Associates LLC","strategy":"Parametric Mod Conser Portfolio-Taxable Bonds","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$350,000 "},
        {"assetClass":"Specialty/Other","style":"Asset Allocation","moneyManager":"Parametric Portfolio Associates LLC","strategy":"Parametric Moderate Portfolio-Muni Bonds","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$350,000 "},
        {"assetClass":"Specialty/Other","style":"Asset Allocation","moneyManager":"Parametric Portfolio Associates LLC","strategy":"Parametric Moderate Portfolio-Taxable Bonds","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$350,000 "},
        {"assetClass":"Specialty/Other","style":"Balanced","moneyManager":"Eagle Asset Management, Inc.","strategy":"Eagle Asset Management Strategic Income Portfolio","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$250,000 "},
        {"assetClass":"Equity","style":"Emerging Markets","moneyManager":"Lazard Asset Management LLC","strategy":"Lazard Emerging Markets Equity Select ADR","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Global Equity","moneyManager":"Lazard Asset Management LLC","strategy":"Lazard Global Equity Income ADR","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Global Equity","moneyManager":"Lazard Asset Management LLC","strategy":"Lazard Global Equity Select ADR","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Global Equity","moneyManager":"O'Shaughnessy Asset Management, LLC","strategy":"O'Shaughnessy Enhanced Dividend","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"International Core","moneyManager":"JPMorgan Investment Management Inc.","strategy":"JPMorgan International Core ADR","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"International Core","moneyManager":"Neuberger Berman, LLC","strategy":"Neuberger International Core ADR","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"International Core","moneyManager":"Scout Investments, Inc.","strategy":"Scout International Equity ADR","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"International Growth","moneyManager":"Invesco Advisers, Inc.","strategy":"Invesco International ADR Growth\nPending Closure","strategyStatus":"Strategy Update- Pending Strategy Closure","minimum":"$1,000,000 "},
        {"assetClass":"Equity","style":"International Growth","moneyManager":"Thornburg Investment Management, Inc.","strategy":"Thornburg International Growth ADR Strategy - Wrap","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"International Small Cap","moneyManager":"Renaissance Investment Management","strategy":"Renaissance International Small-Cap Equity","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"International Value","moneyManager":"Cambiar Investors, LLC","strategy":"Cambiar International ADR","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"International Value","moneyManager":"Lazard Asset Management LLC","strategy":"Lazard International Equity Select ADR","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Large Cap Core","moneyManager":"Atlanta Capital Management Company, LLC","strategy":"Atlanta High Quality Select Equity","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Large Cap Core","moneyManager":"BlackRock Investment Management, LLC","strategy":"BlackRock Large-Cap Core Equity","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Large Cap Core","moneyManager":"Legg Mason Private Portfolio Group, LLC","strategy":"ClearBridge Appreciation","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Large Cap Core","moneyManager":"Neuberger Berman, LLC","strategy":"Neuberger Socially Responsive Equity","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Large Cap Core","moneyManager":"Parametric Portfolio Associates LLC","strategy":"Parametric Tax-Managed Core - S&P 500","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$250,000 "},
        {"assetClass":"Equity","style":"Large Cap Growth","moneyManager":"Atlanta Capital Management Company, LLC","strategy":"Calvert/Atlanta Socially Responsible Equity","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Large Cap Growth","moneyManager":"Columbia Management Investment Advisers, LLC","strategy":"Columbia Select Large-Cap Growth","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Large Cap Growth","moneyManager":"Columbia Management Investment Advisers, LLC","strategy":"Marsico Capital Large-Cap Growth","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Large Cap Growth","moneyManager":"Goldman Sachs Asset Management, L.P.","strategy":"GSAM Large-Cap Growth","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Large Cap Growth","moneyManager":"Wells Fargo Funds Management, LLC","strategy":"Wells Fargo Fundamental Large-Cap Select Growth","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Large Cap Growth","moneyManager":"Winslow Capital Management LLC","strategy":"Winslow Capital Large-Cap Growth","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Large Cap Value","moneyManager":"Columbia Management Investment Advisers, LLC","strategy":"Columbia Select Large-Cap Value","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Large Cap Value","moneyManager":"Equity Investment Corporation","strategy":"EIC Large-Cap Value Tax Aware","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Large Cap Value","moneyManager":"Equity Investment Corporation","strategy":"EIC Large-Cap Value Tax Neutral","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Large Cap Value","moneyManager":"Geneva Advisors, LLC","strategy":"Geneva Equity Income","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Large Cap Value","moneyManager":"Geneva Advisors, LLC","strategy":"Geneva Equity Income (Non K-1)","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Large Cap Value","moneyManager":"JPMorgan Investment Management Inc.","strategy":"JPMorgan Equity Income","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Large Cap Value","moneyManager":"TCW Investment Management Co.","strategy":"TCW Relative Value Large-Cap","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Large Cap Value","moneyManager":"Zacks Investment Management, Inc.","strategy":"Zacks Dividend","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Mid Cap Core","moneyManager":"Legg Mason Private Portfolio Group, LLC","strategy":"ClearBridge Mid-Cap Core","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Mid Cap Core","moneyManager":"New Amsterdam Partners LLC","strategy":"NAP Mid-Cap Core","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Mid Cap Core","moneyManager":"Principal Global Investors, LLC","strategy":"Principal Mid-Cap Equity","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Mid Cap Growth","moneyManager":"Goldman Sachs Asset Management, L.P.","strategy":"GSAM Mid-Cap Growth","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Mid Cap Value","moneyManager":"JPMorgan Investment Management Inc.","strategy":"JPMorgan Mid-Cap Value (closed)\n","strategyStatus":"Strategy Restricted- Strategy transfers and contributions allowed.","minimum":"$100,000 "},
        {"assetClass":"","style":"","moneyManager":"","strategy":"Closed - See Additional Information","strategyStatus":"","minimum":""},
        {"assetClass":"Equity","style":"Mid Cap Value","moneyManager":"Nuance Investments, LLC","strategy":"Nuance Mid-Cap Value","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Mid Cap Value","moneyManager":"Systematic Financial Management, L.P.","strategy":"Systematic Mid-Cap Value (closed)","strategyStatus":"Strategy Removed- Strategy is no longer available on platform","minimum":"$100,000 "},
        {"assetClass":"","style":"","moneyManager":"","strategy":"Strategy Removed","strategyStatus":"","minimum":""},
        {"assetClass":"Specialty/Other","style":"Master Limited Partnerships","moneyManager":"Salient Capital Advisors, LLC","strategy":"Salient MLP SMA","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Specialty/Other","style":"REITs","moneyManager":"AEW Capital Management, L.P.","strategy":"AEW Diversified REIT","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Specialty/Other","style":"REITs","moneyManager":"Adelante Capital Management LLC","strategy":"Adelante Total Return Strategy-SMA","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Small Cap Core","moneyManager":"Atlanta Capital Management Company, LLC","strategy":"Atlanta High Quality Small-Cap (closed)","strategyStatus":"Strategy Restricted- Strategy transfers only. No contributions allowed.","minimum":"$100,000 "},
        {"assetClass":"","style":"","moneyManager":"","strategy":"Closed - See Additional Information","strategyStatus":"","minimum":""},
        {"assetClass":"Equity","style":"Small Cap Core","moneyManager":"GW&K Investment Management, LLC","strategy":"GW&K Small-Cap Core (closed)","strategyStatus":"Strategy Restricted- Strategy transfers and contributions allowed.","minimum":"$100,000 "},
        {"assetClass":"","style":"","moneyManager":"","strategy":"Closed - See Additional Information","strategyStatus":"","minimum":""},
        {"assetClass":"Equity","style":"Small Cap Core","moneyManager":"Glenmede Investment Management, LP","strategy":"Glenmede Small-Cap Core","strategyStatus":"Strategy Update- Pending Strategy Closure","minimum":"$100,000 "},
        {"assetClass":"","style":"","moneyManager":"","strategy":"Pending Closure","strategyStatus":"","minimum":""},
        {"assetClass":"Equity","style":"Small Cap Core","moneyManager":"PNC Capital Advisors LLC","strategy":"PNC Capital Small-Cap Equity","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Small Cap Core","moneyManager":"Principal Global Investors, LLC","strategy":"Principal Small-Cap Select Core","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Small Cap Growth","moneyManager":"Eagle Asset Management, Inc.","strategy":"Eagle Asset Management Small-Cap Growth (closed)","strategyStatus":"Strategy Restricted- Strategy transfers and contributions allowed.","minimum":"$100,000 "},
        {"assetClass":"","style":"","moneyManager":"","strategy":"Closed - See Additional Information","strategyStatus":"","minimum":""},
        {"assetClass":"Equity","style":"Small Cap Growth","moneyManager":"Franklin Templeton Portfolio Advisors, Inc.","strategy":"Franklin Small-Cap Growth SMA (Closed)","strategyStatus":"Strategy Restricted- Strategy transfers and contributions allowed.","minimum":"$100,000 "},
        {"assetClass":"","style":"","moneyManager":"","strategy":"Closed - See Additional Information","strategyStatus":"","minimum":""},
        {"assetClass":"Equity","style":"Small Cap Value","moneyManager":"Dalton, Greiner, Hartman, Maher & Co., LLC","strategy":"DGHM Micro-Cap Value","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Small Cap Value","moneyManager":"Principal Global Investors, LLC","strategy":"Principal Small-Cap Value","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Small-Mid Cap Core","moneyManager":"Atlanta Capital Management Company, LLC","strategy":"Atlanta High Quality Small/Mid-Cap Core (closed)","strategyStatus":"Strategy Restricted- Strategy transfers only. No contributions allowed.","minimum":"$100,000 "},
        {"assetClass":"","style":"","moneyManager":"","strategy":"Closed - See Additional Information","strategyStatus":"","minimum":""},
        {"assetClass":"Equity","style":"Small-Mid Cap Core","moneyManager":"GW&K Investment Management, LLC","strategy":"GW&K Small/Mid-Cap Equity Strategy","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Small-Mid Cap Growth","moneyManager":"Fred Alger Management, Inc","strategy":"Alger Small/Mid-Cap Growth","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Small-Mid Cap Value","moneyManager":"Neuberger Berman, LLC","strategy":"Neuberger SMID-Cap Intrinsic Value","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Equity","style":"Small-Mid Cap Value","moneyManager":"Principal Global Investors, LLC","strategy":"Edge Small/Mid-Cap Dividend Income","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Fixed Income","style":"Core Bond","moneyManager":"BlackRock Investment Management, LLC","strategy":"BlackRock Core Bond - SMA","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$250,000 "},
        {"assetClass":"Fixed Income","style":"Core Bond","moneyManager":"NGAM Advisors, L.P.","strategy":"Natixis/Loomis Sayles Core Total Return","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$250,000 "},
        {"assetClass":"Fixed Income","style":"Core Bond","moneyManager":"PIMCO","strategy":"PIMCO Total Return","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$250,000 "},
        {"assetClass":"Fixed Income","style":"Intermediate Bond","moneyManager":"Cincinnati Asset Management Inc","strategy":"Cincinnati Investment Grade Corporate Bonds","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$250,000 "},
        {"assetClass":"Fixed Income","style":"Intermediate Bond","moneyManager":"Eagle Asset Management, Inc.","strategy":"Eagle Asset Management High Quality Taxable","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$250,000 "},
        {"assetClass":"Fixed Income","style":"Intermediate Bond","moneyManager":"GW&K Investment Management, LLC","strategy":"GW&K Corporate Bond Opportunities Strategy","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$250,000 "},
        {"assetClass":"Fixed Income","style":"Intermediate Bond","moneyManager":"Madison Investment Advisors, LLC","strategy":"Madison Intermediate Fixed Income","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$250,000 "},
        {"assetClass":"Fixed Income","style":"Intermediate Bond","moneyManager":"PIMCO","strategy":"PIMCO Real Return","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$150,000 "},
        {"assetClass":"Fixed Income","style":"Preferreds","moneyManager":"Principal Global Investors, LLC","strategy":"Spectrum Preferred Securities SMA","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Fixed Income","style":"Preferreds","moneyManager":"Principal Global Investors, LLC","strategy":"Spectrum Preferred Tax Advantaged SMA","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$100,000 "},
        {"assetClass":"Fixed Income","style":"Preferreds","moneyManager":"Stonebridge Advisors LLC","strategy":"Stonebridge Advisors Preferred SMA","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$200,000 "},
        {"assetClass":"Fixed Income","style":"Preferreds","moneyManager":"Stonebridge Advisors LLC","strategy":"Stonebridge Advisors Preferred Tax Advantaged SMA","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$200,000 "},
        {"assetClass":"Fixed Income","style":"Short-Term Bond","moneyManager":"Chandler Asset Management, Inc.","strategy":"Chandler Short-Term Bond SMA","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$250,000 "},
        {"assetClass":"Fixed Income","style":"Short-Term Bond","moneyManager":"GW&K Investment Management, LLC","strategy":"GW&K Short-Term Taxable Bond Strategy","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$250,000 "},
        {"assetClass":"Fixed Income","style":"Short-Term Bond","moneyManager":"PIMCO","strategy":"PIMCO Low Duration SMA","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$250,000 "},
        {"assetClass":"Fixed Income","style":"Intermediate-Term Municipals","moneyManager":"AllianceBernstein L.P.","strategy":"AllianceBernstein Tax Aware Fixed Income Portfolio","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$250,000 "},
        {"assetClass":"Fixed Income","style":"Intermediate-Term Municipals","moneyManager":"Breckinridge Capital Advisors, Inc.","strategy":"Breckinridge Intermediate-Term Municipal Bond","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$500,000 "},
        {"assetClass":"Fixed Income","style":"Intermediate-Term Municipals","moneyManager":"GW&K Investment Management, LLC","strategy":"GW&K Municipal Bond Strategy","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$250,000 "},
        {"assetClass":"Fixed Income","style":"Intermediate-Term Municipals","moneyManager":"JPMorgan Investment Management Inc.","strategy":"JPMorgan Intermediate-Term Municipal Bond","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$250,000 "},
        {"assetClass":"Fixed Income","style":"Intermediate-Term Municipals","moneyManager":"Legg Mason Private Portfolio Group, LLC","strategy":"Western Asset Current Market Muni","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$250,000 "},
        {"assetClass":"Fixed Income","style":"Intermediate-Term Municipals","moneyManager":"Nuveen Asset Management, LLC","strategy":"Nuveen Intermediate-Term Municipal Bond","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$250,000 "},
        {"assetClass":"Fixed Income","style":"Long-Term Municipals","moneyManager":"Wells Fargo Funds Management, LLC","strategy":"Wells Fargo CoreBuilder Municipal Income","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$250,000 "},
        {"assetClass":"Fixed Income","style":"Short-Term Municipals","moneyManager":"Nuveen Asset Management, LLC","strategy":"Nuveen Limited-Maturity Municipal Bond","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$250,000 "},
        {"assetClass":"Fixed Income","style":"Intermediate-Term Municipals","moneyManager":"PIMCO","strategy":"PIMCO 1-12 Year California Municipal Bond Ladder","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$250,000 "},
        {"assetClass":"Fixed Income","style":"Intermediate-Term Municipals","moneyManager":"PIMCO","strategy":"PIMCO 1-12 Year Municipal Bond Ladder","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$250,000 "},
        {"assetClass":"Fixed Income","style":"Intermediate-Term Municipals","moneyManager":"PIMCO","strategy":"PIMCO 1-12 Year New York Municipal Bond Ladder","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$250,000 "},
        {"assetClass":"Fixed Income","style":"Long-Term Municipals","moneyManager":"PIMCO","strategy":"PIMCO 1-18 Year California Municipal Bond Ladder","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$250,000 "},
        {"assetClass":"Fixed Income","style":"Long-Term Municipals","moneyManager":"PIMCO","strategy":"PIMCO 1-18 Year Municipal Bond Ladder","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$250,000 "},
        {"assetClass":"Fixed Income","style":"Long-Term Municipals","moneyManager":"PIMCO","strategy":"PIMCO 1-18 Year New York Municipal Bond Ladder","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$250,000 "},
        {"assetClass":"Fixed Income","style":"Short-Term Municipals","moneyManager":"PIMCO","strategy":"PIMCO 1-6 Year California Municipal Bond Ladder","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$250,000 "},
        {"assetClass":"Fixed Income","style":"Short-Term Municipals","moneyManager":"PIMCO","strategy":"PIMCO 1-6 Year Municipal Bond Ladder","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$250,000 "},
        {"assetClass":"Fixed Income","style":"Short-Term Municipals","moneyManager":"PIMCO","strategy":"PIMCO 1-6 Year New York Municipal Bond Ladder","strategyStatus":"Strategy Active- Open to New Accounts","minimum":"$250,000 "}
    ];

    $scope.strategies = strategies;

    $scope.categoryValue = function(category){
      if(!$scope.selectedFilter){
        return category.name
      }else if(!$scope.selectedFilter.categories){
        return category.name
      }else if(!$scope.selectedFilter.categories.length) {
        return category.name
      }else{
        for(var i=0; i < $scope.selectedFilter.categories.length; i++){
          if(category.name.toLowerCase() == $scope.selectedFilter.categories[i].name.toLowerCase()){
            return category.name + ": " +  $scope.selectedFilter.categories[i].values.toString();
          }
        }
        return category.name
      }
    };

    $scope.filterStrategies = function(categories){
      if(!categories){
        $scope.strategies = strategies;
      }else{
        var filterObject = {};
        for(var i = 0; i < categories.length; i++){
          filterObject[categories[i].name] = categories[i].values.toString();
        };
        console.log(filterObject);

        var filteredStrategies =  filterFilter(strategies, filterObject);
        $scope.strategies = filteredStrategies;

      }
    }
  }
]);

angular.element(document).ready(function() {
  angular.bootstrap(document, ['MAS']);
  $(function() {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 10000000,
      values: [3000000, 5000000],
      slide: function(event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
      " - $" + $("#slider-range").slider("values", 1));
  });
})