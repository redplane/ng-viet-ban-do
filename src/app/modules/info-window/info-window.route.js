/**
 * Created by Akai on 6/19/2017.
 */
module.exports = function (ngModule) {

    // Load component template.
    var ngComponentTemplate = require('./info-window.html');

    // Config module.
    ngModule.config(
        function ($stateProvider, appStates) {
            $stateProvider.state(appStates.infoWindow.name, {
                url: appStates.infoWindow.url,
                controller: 'infoWindowTutorialController',
                template: ngComponentTemplate
            });
        });
};

