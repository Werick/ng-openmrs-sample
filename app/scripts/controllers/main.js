'use strict';

/**
 * @ngdoc function
 * @name ngOpenmrsSampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngOpenmrsSampleApp
 */
angular.module('ngOpenmrsSampleApp')
  .controller('MainCtrl', ['AuthService','$scope','$location','$rootScope', function (AuthService,$scope,$location,$rootScope) {
    $scope.username='';
    $scope.password='';
    $scope.feedback='';
    $scope.selServer='local';

    $scope.authenticate=function()
    {
      AuthService.authenticate($scope.selServer,$scope.username,$scope.password,function(data){
        console.log(data);

        if(AuthService.authenticated){
          $scope.feedback="login Successful";
          $location.path('/about');
        }
        else
        {
          $scope.feedback="Wrong username or password";
        }
      })

    }
  }]);
