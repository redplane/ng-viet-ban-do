module.exports = function(ngModule){
    ngModule.config(['$locationProvider', '$routeProvider',
        function ($locationProvider, $routeProvider) {

            // Url hash configuration
            $locationProvider
                .hashPrefix('!');

            // Fallback url.
            $routeProvider
                .when('/map-polyline', {
                    controller: 'MapPolylineComponentController',
                    templateUrl: 'modules/map-polyline.component.html'
                });
        }])
};