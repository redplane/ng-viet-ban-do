module.exports = function (ngModule) {
    ngModule.config(
        function ($locationProvider, $urlRouterProvider, $stateProvider, appStates) {
            // Url hash configuration
            $locationProvider
                .hashPrefix('!');

            // Fallback url.
            $urlRouterProvider.otherwise(appStates.main.url);
        });
};