/**
 * Created by Linh Nguyen on 7/1/2017.
 */
module.factory('httpInterceptor', ['$q', function($q){
    return {
        response: function(response){
            console.log(response);
        }
    };
}]);