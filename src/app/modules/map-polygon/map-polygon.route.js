module.exports = function (ngModule) {
    ngModule.config(['$locationProvider', '$routeProvider',
        function ($locationProvider, $routeProvider) {

            // Url hash configuration
            $locationProvider
                .hashPrefix('!');

            // Fallback url.
            $routeProvider
                .when('/map-polygon', {
                    controller: 'MapPolygonComponentController',
                    templateUrl: 'modules/map-polygon.component.html'
                });
        }]);
};