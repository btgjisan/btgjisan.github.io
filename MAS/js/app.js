angular.module('MAS', [
  
]).controller('SearchAndFilter', ['$scope', function($scope){
	$scope.categories = [
		{
			name: 'Research',
			active : true,
			filterCategories : ['Style','Strategy', 'Fund', 'Account Min.', 'Asset Class', 'Status']
		}, {
			name: 'Requirements',
			active : false,
			filterCategories : ['Fun 1', "Fun 2"]
		} , {
			name: 'Tax',
			active : false,
			filterCategories : ['Tax 1' , 'Tax2']
		}
	];

	$scope.selectCategory = function(category){
		$scope.selectedcategory.active = false;
		delete $scope.selectedcategory;
		$scope.selectedcategory = category;
		category.active = true;
	};

	$scope.selectedcategory = $scope.categories[0];
	$scope.selectedcategory.active = true;
}]);

angular.element(document).ready(function(){
	angular.bootstrap(document, ['MAS'])
})