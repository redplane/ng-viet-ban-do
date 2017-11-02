module.exports = function (ngModule) {
    ngModule.config(['$locationProvider', '$routeProvider',
        function ($locationProvider, $routeProvider) {

            // Url hash configuration
            $locationProvider
                .hashPrefix('!');

            // Fallback url.
            $routeProvider
                .when('/map-circle', {
                    controller: 'MapCircleComponentController',
                    templateUrl: 'modules/map-circle.component.html'
                });
        }]);
};