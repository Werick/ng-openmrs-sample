/**
 * Created by developer on 6/8/15.
 */
'use strict';
angular.module('ngOpenmrsSampleApp')
.factory('PatientService',['$resource',function($resource){
    var PatientService = {};
    var url='https://10.50.80.75:8443/amrs/';
    var patientRes;

    function getResource()
    {
      var r=url+'/ws/rest/v1/person?q:name';
      return $resource(r,{name: '@name'},
        {query: {method: "GET", isArray: false}});
    };

    PatientService.getPatientByName=function(name,callback){
      patientRes=getResource();
      patientRes.get(name,
        function (data) {
          callback(data);
        }
      );

    }

    return PatientService;

  }]);
