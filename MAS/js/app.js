var MAS = angular.module('MAS', [
    'ngRoute'
]);
MAS.controller('SearchAndFilter', ['$scope', 'filterFilter', 'Strategies', 'Categories', 'Filters',
  function($scope, filterFilter, Strategies, Categories, Filters) {
    var strategies = Strategies;
    $scope.strategies = strategies;
    $scope.categories = Categories;
    $scope.filters = Filters;

    $scope.selectCategory = function(category) {
      $scope.selectedcategory.active = false;
      delete $scope.selectedcategory;
      $scope.selectedcategory = category;
      category.active = true;
    };

    $scope.selectedcategory = $scope.categories[0];
    $scope.selectedcategory.active = true;  

    $scope.selectedFilter = null;

    $scope.selectFilter = function(filter){
      delete $scope.selectedFilter;
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
      };

      $scope.filterNameEditMode = true;
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
      //first check if there is a filter, if not, create it
      if(!$scope.selectedFilter){
        $scope.selectedFilter = {
          name : "New Filter",
          categories : [{
            name : category.name,
            values : [value]
          }]
        }
        //update strategy filter
        $scope.filterStrategies($scope.selectedFilter.categories);
      }else{
        //declare common values needed for both cases
        var selectedFilterCategoryNames = _.pluck($scope.selectedFilter.categories, "name");
        var indexOfCategoryName = selectedFilterCategoryNames.indexOf(category.name);

        //if checked, then add
        if(bool){
          //check if category is already added to the filter
          if(indexOfCategoryName !== -1){
            $scope.selectedFilter.categories[indexOfCategoryName].values.push(value);
            $scope.filterStrategies($scope.selectedFilter.categories);
          }else{
            $scope.selectedFilter.categories.push({
              name : category.name,
              values : [value]
            });
            $scope.filterStrategies($scope.selectedFilter.categories);
          }
        }else{
          var indexOfCategoryValue = $scope.selectedFilter.categories[indexOfCategoryName].values.indexOf(value);
          $scope.selectedFilter.categories[indexOfCategoryName].values.splice(indexOfCategoryValue, 1);
          $scope.filterStrategies($scope.selectedFilter.categories);
        }
      }
    };

    $scope.categoryValue = function(category){
      if(!$scope.selectedFilter){
        return category.displayName
      }else if(!$scope.selectedFilter.categories){
        return category.displayName
      }else if(!$scope.selectedFilter.categories.length) {
        return category.displayName
      }else{
        for(var i=0; i < $scope.selectedFilter.categories.length; i++){
          if(category.name.toLowerCase() == $scope.selectedFilter.categories[i].name.toLowerCase()){
            return category.displayName + ": " +  $scope.selectedFilter.categories[i].values.toString();
          }
        }
        return category.displayName;
      }
    };

    $scope.clearFilters = function(){
      if(!$scope.selectedFilter){
        $scope.strategies = Strategies;
      }else{
        $scope.selectedFilter.categories = [];
        $scope.filterStrategies($scope.selectedFilter.categories);
      }
    };

    $scope.filterStrategies = function(categories){
      if(!categories){
        $scope.strategies = strategies;
      }else{
        $scope.filterObject = {};
        for(var i = 0; i < categories.length; i++){
          $scope.filterObject[categories[i].name] = categories[i].values;
        };
        console.log($scope.filterObject);

        var filteredStrategies =  filterFilter(strategies, customFilter);
        $scope.strategies = filteredStrategies;
      }
    }

    function customFilter(strategy){
      if(_.isEmpty($scope.filterObject)){
        return true
      }else{
        var match = false;
        for(var key in $scope.filterObject){
          var valueMatch = false;
          if(_.isEmpty($scope.filterObject[key])){
            valueMatch = true;
          }else{
            for (var i = 0; i < $scope.filterObject[key].length; i++){
              if(strategy[key] && strategy[key].indexOf($scope.filterObject[key][i]) !== -1){
                valueMatch = true
              }
            }
          }
          match = valueMatch;
        }
        return match
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