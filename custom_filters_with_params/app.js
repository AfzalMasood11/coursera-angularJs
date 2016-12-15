(function(){
	'use strict';
	angular.module('MsgApp', [])
	.controller('MsgController', MsgController)
	.filter('loves', LovesFilter)
	.filter('truth', TruthFilter);

	MsgController.$inject = ['$scope', 'lovesFilter'];

	function MsgController($scope, lovesFilter){
		$scope.currentState = 'before';
		
		$scope.sayMessage = function(){
			return "Afzal likes to eat french fries.";
		};

		$scope.sayLovesMessage = function(){
			var msg = "Afzal likes to eat french fries.";
			msg = lovesFilter(msg);
			return msg;
		};

		$scope.updateStatus = function(){
			$scope.currentState = 'after';
		};
	}

	function LovesFilter(){
		return function(input){
			input = input || '';
			input = input.replace('likes', 'loves');
			return input;
		}
	}

	function TruthFilter(){
		return function(input, target, replace){
			input = input || '';
			input = input.replace(target, replace);
			return input;
		}
	}

})();