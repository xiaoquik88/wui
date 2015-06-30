/*#############################  SERVICE ##############################*/

hyBridApp.factory('HttpServices', function ($http, $q,$stateParams) {
    return {
        get : function(r_url,params) {
            return  $http.get(r_url ,{ params:params })
                .then(function(response) {
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        // invalid response
                        return $q.reject(response.data);
                    }
                }, function(response) {
                    // something went wrong
                    return $q.reject(response.data);
                });
        },
        post : function(r_url,params){
            return $http.post(r_url,params);
        }
    };
});


hyBridApp.factory('pagePointer', function(){
  return { pageNumber: 1 };
});

hyBridApp.factory('selDate', function(){
    var datus = [];
    options = [];
    var populate = function  () {


    var months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    for (i = new Date().getFullYear() ; i < 2050; i++) {
        $.each(months, function (index, value) {

            datus.push(value+"/"+i);
        });
    }

    };

    populate();

    return{
       options : datus
    };
});


