(function(){
	'use strict';
	angular.module('MsgApp', [])
	.controller('MsgController', MsgController);

	MsgController.$inject = ['$scope', '$filter'];

	function MsgController($scope, $filter){
		$scope.name = 'Afzal';
		$scope.currentState = 'before';
		$scope.value = .45;
		$scope.sayMessage = function(){
			var msg = "Afzal likes to eat french fries.";
			var output = $filter('uppercase')(msg);
			return output;
		};

		$scope.updateStatus = function(){
			$scope.currentState = 'after';
		};
	}
})();