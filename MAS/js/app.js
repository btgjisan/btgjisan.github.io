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
            values
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
        name : "Filter 1",
        categories: [
          {
            name : 'strategyStatus',
            values : ['Active']
          }
        ]
      },
      {name : "Filter 2"},
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
      {
        status : 'fa-info-circle',
        strategy: 'TPI Divident Growth (K-1 generating)',
        style: 'All Cap Core',
        moneyManager : 'ThomasPartners, Inc.',
        assetClass : 'Equity',
        minimum : 100000,
        strategyStatus: 'Active',
        profile : '',
        review : ''
      },
      {
        status : 'fa-bolt',
        strategy: 'JPMorgan Investment Management',
        style: 'Mid Cap Value',
        moneyManager : 'JPMorgan Mid-Cap',
        assetClass : 'Equity',
        minimum : 100000,
        strategyStatus: 'Restricted',
        profile : '',
        review : ''
      }
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
          if(category.name == $scope.selectedFilter.categories[i].name){
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
        $scope.strategies = filteredStrategies
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