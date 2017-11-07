module.exports = function (ngModule) {

    // Component template import.
    var ngComponentTemplate = require('./map-rectangle.html');

    // Module configuration.
    ngModule.config(
        function ($stateProvider, appStates) {
            $stateProvider
                .state(appStates.mapRectangle.name, {
                    url: appStates.mapRectangle.url,
                    controller: 'mapRectangleTutorialController',
                    template: ngComponentTemplate
                });
        });
};