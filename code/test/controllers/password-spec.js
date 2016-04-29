describe('PasswordController', function() {
  beforeEach(module('app'));

  var $controller, $httpBackend, $scope, name, deffered, callingName, elm;

  beforeEach(inject(function(_$controller_, _$rootScope_, _$httpBackend_, _name_, _callingName_, _$q_, _$compile_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $scope = _$rootScope_.$new();
    $controller = _$controller_('PasswordController', { $scope: $scope });
    $httpBackend = _$httpBackend_;
    name = _name_;
    callingName = _callingName_;
    deffered = _$q_.defer();
    elm = angular.element('<div class="clickable" ng-click="checkClick()"></div>');
   _$compile_(elm)($scope);
    //$scope.$digest();
  }));
  afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
  });
  describe('$scope.grade', function() {

/*    it('sets the strength to "strong" if the password length is >8 chars', function() {
      $scope.password = 'longerthaneightchars';
      $scope.grade();
      expect($scope.strength).toEqual('strong');
    });

    it('sets the strength to "weak" if the password length <3 chars', function() {
      $scope.password = 'a';
      $scope.grade();
      expect($scope.strength).toEqual('weak');
    });

    it('sets the strength to "weak" if the password length <3 chars', function() {
      $scope.password = 'abnf';
      $scope.grade();
      expect($scope.strength).toEqual('medium');
    });*/

   /* it("testing the service", function ()  { 
      $httpBackend.whenGET('data.json').respond({ "name":"ansar1", "id":"3033"});
      $scope.getData();
      $httpBackend.flush();
      expect($scope.response.name).toEqual("ansar1")
    }); */ 
/*
   it("testing the service with returning data", function ()  { 
      $httpBackend.whenGET('data.json').respond({ "name":"ansar1", "id":"3033"});
      $scope.getData();
      $httpBackend.flush();
      expect($scope.response.name).toEqual("ansar1")
    });*/

   /*it("testing the service with returning data using promise object", function ()  { 
      $scope.jsonURL = 'data.json';
      spyOn(callingName, 'callTheName').and.returnValue(deffered.promise);
      $scope.getData();
      deffered.resolve({ "name":"ansar1", "id":"3033"});
      $scope.$digest();
      expect($scope.response.name).toEqual("ansar1")
    });
*/
   it("testing the service with returning data using promise object", function ()  { 
      $scope.jsonURL = 'data.json';
      var returnData = {"name":"ansar1", "id":"3033"};
      $httpBackend.whenGET($scope.jsonURL).respond(returnData);
      var returnedPromise = callingName.callTheName($scope.jsonURL);
      returnedPromise.then(function (response) {
        $scope.response = response;
      });
      $httpBackend.flush();
      expect($scope.response.name).toEqual("ansar1");
    });
/*
   it("testing the method with click", function ()  { 
      elm.click();
      $scope.$digest();
      expect($scope.datas).toEqual("ansars");
    });*/

  });
});