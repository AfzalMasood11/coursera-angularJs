(function(){
	'use strict';
	angular.module('AssignmentApp', [])
	.controller('LunchController', LunchController);

	LunchController.$inject = ['$scope', '$filter'];

	function LunchController($scope, $filter){
		$scope.items = '';
		$scope.message = '';

		$scope.countNumberOfItems = function(){
			var lunchItems = $scope.items;
			var comma = ',';
			var numberOfItems = lunchItems.split(comma).filter(Boolean).length;
			console.log(numberOfItems);		
			if (numberOfItems == 0) {
    			$scope.message = 'Please enter data first';
			}else if(numberOfItems <= 3){
				$scope.message = 'Enjoy!';
			}else{
				$scope.message = 'Too much!';
			}
			
		};
	}
})();