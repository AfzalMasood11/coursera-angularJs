(function(){
	'use strict';
	angular.module('CounterApp', [])
	.controller('CounterController', CounterController);

	CounterController.$inject = ['$scope'];

	function CounterController($scope){
		$scope.onceCount = 0;
		$scope.counter = 0;
		$scope.name = 'Afzal';

		$scope.countOnce = function(){
			$scope.onceCount = 1;
		};

		$scope.upCounter = function(){
			$scope.counter++;
		};

		$scope.showNumberOfWatchers = function(){
			console.log('# of watchers: ', $scope.$$watchersCount);	
		};

		$scope.$watch(function(){
			console.log('Digest loop fired!')
		});

		// $scope.$watch('onceCount', function(newValue, oldValue){
		// 	console.log('old value: ', oldValue);
		// 	console.log('new value: ', newValue);
		// });

		// $scope.$watch('counter', function(newValue, oldValue){
		// 	console.log('counter old value: ', oldValue);
		// 	console.log('counter new value: ', newValue);
		// });
		
	}

})();