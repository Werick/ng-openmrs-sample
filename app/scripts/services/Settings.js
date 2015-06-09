/**
 * Created by developer on 6/8/15.
 */
'use strict';
angular.module('ngOpenmrsSampleApp')
.factory('AppSettings',function(){
    var context={};
    context.getServer=function(server)
    {
      var url;
      console.log("Selected Server: "+server);
      if(server=='etl')
      {
        url='https://10.50.110.67:8443/amrs/';
      }
      else if(server=='test')
      {
        url='https://10.50.80.75:8443/amrs/';
      }
      else if (server=='local')
      {
        url='http://localhost:8080/amrs/';
      }
      else
      {
        url='https://10.50.80.75:8443/amrs/';
      }
      return url;
    }

    return context;
  });
