(function () {
'use strict';
	
angular.module('myFirstApp', [])
.controller('MyFirstController', function($scope){
		$scope.name = "Afzal Masood";
		$scope.sayHello = function(){
			return 'Hello Afzal';
		};
	});
})();