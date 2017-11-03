module.exports = function (ngModule) {

    // Import component template.
    var ngComponentTemplate = require('./map-polygon.html');

    // Module configuration.
    ngModule.config(
        function ($stateProvider, appStates) {
            // Fallback url.
            $stateProvider
                .state(appStates.mapPolygon.name, {
                    url: appStates.mapPolygon.url,
                    controller: 'mapPolygonTutorialController',
                    template: ngComponentTemplate
                });
        });
};