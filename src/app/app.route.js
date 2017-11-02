module.exports = function (ngModule) {
    ngModule.config(
        function ($locationProvider, $routeProvider) {

        // Url hash configuration
        $locationProvider
            .hashPrefix('!');

        // Fallback url.
        $routeProvider.otherwise({redirectTo: '/'});
    });
};