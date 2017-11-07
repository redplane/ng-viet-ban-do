module.exports = function (ngModule) {

    // Import component template.
    var ngComponentTemplate = require('./map-circle.html');

    // Module configuration.
    ngModule.config(
        function ($stateProvider, appStates) {
            // Fallback url.
            $stateProvider
                .state(appStates.mapCircle.name, {
                    url: appStates.mapCircle.url,
                    controller: 'mapCircleTutorialController',
                    template: ngComponentTemplate
                });
        });
};