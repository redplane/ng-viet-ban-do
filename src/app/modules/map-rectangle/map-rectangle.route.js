module.exports = function (ngModule) {
    ngModule.config(
        function ($locationProvider, $routeProvider) {

            // Url hash configuration
            $locationProvider
                .hashPrefix('!');

            // Fallback url.
            $routeProvider
                .when('/map-rectangle', {
                    controller: 'MapRectangleComponent',
                    templateUrl: 'modules/map-rectangle.component.html'
                });
        });
};