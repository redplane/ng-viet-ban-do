module.exports = function (ngModule) {
    ngModule.config(
        function ($locationProvider, $stateProvider, appStates) {
            // Url hash configuration
            $locationProvider
                .hashPrefix('!');

            // Fallback url.
            $stateProvider.state('default',{
                url: '/',
                redirectTo: appStates.main.name
            })
        });
};