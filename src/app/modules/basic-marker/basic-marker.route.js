/**
 * Created by Akai on 6/19/2017.
 */
module.exports = function (ngModule) {

    // Templates import.
    var ngComponentTemplate = require('./basic-marker.html');

    // Module configuration.
    ngModule.config(function ($stateProvider, appStates) {
        $stateProvider.state(appStates.basicMarker.name, {
            url: appStates.basicMarker.url,
            controller: 'basicMarkerTutorialController',
            template: ngComponentTemplate
        });
    })
};

