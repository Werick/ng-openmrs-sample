/**
 * Created by developer on 6/8/15.
 */
'use strict';
angular.module('ngOpenmrsSampleApp')
.factory('PatientService',['$rootScope','$resource','AppSettings',function($rootScope,$resource,AppSettings){
    var PatientService = {};
    var url;
    var patientRes;

    function getResource()
    {
      url=AppSettings.getServer($rootScope.selServer);
      var r=url+'/ws/rest/v1/person?q:name';
      return $resource(r,{name: '@name'},
        {query: {method: 'GET', isArray: false}});
    }

    PatientService.getPatientByName=function(name,callback){
      patientRes=getResource();
      patientRes.get(name,
        function (data) {
          callback(data);
        }
      );

    };

    return PatientService;

  }]);
