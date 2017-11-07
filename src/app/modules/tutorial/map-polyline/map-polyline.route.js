module.exports = function (ngModule) {

    // Import component template.
    var ngComponentTemplate = require('./map-polyline.html');

    // Module configuration.
    ngModule.config(
        function ($stateProvider, appStates) {
            // Fallback url.
            $stateProvider
                .state(appStates.mapPolyline.name, {
                    url: appStates.mapPolyline.url,
                    controller: 'mapPolyLineTutorialController',
                    template: ngComponentTemplate
                });
        })
};