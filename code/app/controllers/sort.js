angular.module('sortingMod',[]);

function SortCtrl($scope){
	$scope.arr = [1,3,2];
	$scope.sort = function(){
		$scope.arr.sort();
	}
}

FirstCtrl.inject = ['$scope'];

angular.module('sortingMod').controller('SortCtrl', SortCtrl);