describe('Sort example', function() {

	beforeEach(module('sortingMod'));

	var $controller, scope;

	beforeEach(inject(function (_$controller_) {
		$controller = _$controller_;
	}));

	describe('$scope.sort', function() {
    var $scope, controller;
    beforeEach(function() {
      $scope = {};
      controller = $controller('SortCtrl', { $scope: $scope });
    });

    it('sets the true if sort is true', function() {
      $scope.arr = [1,3,2,5,1,5,2];
      $scope.sort();
      expect($scope.arr).toEqual([1,1,2,2,3,5,5]);
    });
    
  });


});