/**
 * Created by Akai on 6/19/2017.
 */
module.exports = function (ngModule) {

    // Load component template.
    var ngComponentTemplate = require('./main.html');

    // Module configuration.
    ngModule.config(
        function ($stateProvider, appStates) {
            // Fallback url.
            $stateProvider.state(appStates.main.name, {
                url: appStates.main.url,
                controller: 'mainComponentTutorialController',
                template: ngComponentTemplate
            });
        });
};

