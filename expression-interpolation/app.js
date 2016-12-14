(function(){
	'use strict';
	angular.module('MsgApp', [])
	.controller('MsgController', MsgController);

	MsgController.$inject = ['$scope'];
	function MsgController($scope){
		$scope.name = 'Afzal';
		$scope.currentState = 'before';
		$scope.sayMessage = function(){
			return "Afzal likes to eat french fries."
		};

		$scope.updateStatus = function(){
			$scope.currentState = 'after';
		};
	}
})();