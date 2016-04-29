/*angular.module('app', [])
.controller('PasswordController', function PasswordController($scope, $http) {
  $scope.password = '';
  $scope.grade = function() {
    var size = $scope.password.length;
    if (size > 8) {
      $scope.strength = 'strong';
    } else if (size > 3) {
      $scope.strength = 'medium';
    } else {
      $scope.strength = 'weak';
    }
  };
  $scope.response = {};
  $scope.getData = function() {
    var request = $http.get('data.json').then(function(response){
      $scope.response = response.data;
    },function(){

    });
  };
});

angular.module('app', [])
.controller('PasswordController', function PasswordController($scope, $http, name) {
  $scope.password = '';
  $scope.grade = function() {
    var size = $scope.password.length;
    if (size > 8) {
      $scope.strength = 'strong';
    } else if (size > 3) {
      $scope.strength = 'medium';
    } else {
      $scope.strength = 'weak';
    }
  };
  $scope.response = {};
  $scope.getData = function(){
    name.returnData().then(function(response) {
      $scope.response = response.data;
    },function() {

    });
  }
});

angular.module('app').service('name', ['$http', function($http){
  this.returnData = function() {
    return $http.get('data.json');
  }
}]);*/


angular.module('app', [])
.controller('PasswordController', function PasswordController($scope, $http, name, $q, callingName) {
  $scope.password = '';
  $scope.grade = function() {
    var size = $scope.password.length;
    if (size > 8) {
      $scope.strength = 'strong';
    } else if (size > 3) {
      $scope.strength = 'medium';
    } else {
      $scope.strength = 'weak';
    }
  };
  $scope.datas='';
  $scope.checkClick = function(){
    $scope.datas = 'ansars';
  };
  $scope.response = {};
  $scope.jsonURL = '';
  $scope.resultMethod = function(response){
    $scope.response = response;
  };
  $scope.getData = function(){
    callingName.callTheName($scope.jsonURL).then(function(response){
      $scope.resultMethod(response);
    },function(){

    });
  }
});

angular.module('app').service('callingName', ['name','$http','$q', function(name,$http,$q){
  this.callTheName = function(jsonURL) {
    return name.returnData(jsonURL);
  }
}]);

angular.module('app').service('name', ['$http','$q', function($http, $q){
  this.returnData = function(jsonURL) {
    var  deferred = $q.defer();
    $http.get(jsonURL) .success(function(data) {
        deferred.resolve(data);
    }).error(function(err) {
        deferred.resolve(err);
    });
    return deferred.promise;
  }
}]);
