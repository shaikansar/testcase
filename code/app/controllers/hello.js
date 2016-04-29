angular.module('appTestCase',[]);

function FirstCtrl($scope){
	$scope.greeting = 'Hello World!';
}

FirstCtrl.inject = ['$scope'];

angular.module('appTestCase').controller('FirstCtrl',FirstCtrl);