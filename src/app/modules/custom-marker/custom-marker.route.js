/**
 * Created by Linh Nguyen on 6/19/2017.
 */
module.exports = function (ngModule) {

    // Templates import.
    var ngComponentTemplate = require('./custom-marker.html');

    // Module routes declaration.
    ngModule.config(function ($stateProvider, appStates) {
        // Fallback url.
        $stateProvider
            .state(appStates.customMarker.name, {
                controller: 'customMarkerController',
                template: ngComponentTemplate
            });
    });
};