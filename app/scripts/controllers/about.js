'use strict';

/**
 * @ngdoc function
 * @name ngOpenmrsSampleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngOpenmrsSampleApp
 */
angular.module('ngOpenmrsSampleApp')
  .controller('AboutCtrl', ['$scope','PatientService',function ($scope,PatientService) {
    $scope.searchname='';
    $scope.test;

    $scope.search=function(){
      PatientService.getPatientByName($scope.searchname,function(data){
        console.log(data);
        $scope.test=data;
      })

    }

  }]);
