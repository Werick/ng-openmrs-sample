/**
 * Created by developer on 6/8/15.
 */
'use strict';
angular.module('ngOpenmrsSampleApp')
.factory('PatientService',['$rootScope','$resource','AppSettings','AuthService',
    function($rootScope,$resource,AppSettings,AuthService){
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
      console.log('Logged Status '+$rootScope.authdata)
      console.log('Default Creds: '+$rootScope.getCredentials());

      patientRes=getResource();
      patientRes.get(name)
        .$promise
        //on success
        .then(
        function (data) {
          callback(data);
        }
      ),
        //on failure
      function(error)
      {
        console.log('error');
        var error = {error: true, result: error};
        console.log(error);
        callback(error);
      }



    };

    return PatientService;

  }]);
