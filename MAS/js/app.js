angular.module('MAS', [

]).controller('SearchAndFilter', ['$scope',
  function($scope) {
    $scope.categories = [{
      name: 'Research',
      active: true,
      filterCategories: [{
        name: 'Style',
        dataType: 'category'
      }, {
        name: 'Strategy',
        dataType: 'category'
      }, {
        name: 'Fund',
        dataType: 'category'
      }, {
        name: 'Account Min.',
        dataType: 'number'
      }, {
        name: 'Asset Class',
        dataType: 'category'
      }, {
        name: 'Status',
        dataType: 'category'
      }]
    }, {
      name: 'Requirements',
      active: false,
      filterCategories: [{
        name: 'Requirements 1',
        dataType: 'category'
      }, {
        name: "Requirements 2",
        dataType: 'category'
      }]
    }, {
      name: 'Tax',
      active: false,
      filterCategories: [{
        name: 'Tax 1',
        dataType: 'category'
      }, {
        name: 'Tax2',
        dataType: 'category'
      }]
    }];

    $scope.selectCategory = function(category) {
      $scope.selectedcategory.active = false;
      delete $scope.selectedcategory;
      $scope.selectedcategory = category;
      category.active = true;
    };

    $scope.selectedcategory = $scope.categories[0];
    $scope.selectedcategory.active = true;
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