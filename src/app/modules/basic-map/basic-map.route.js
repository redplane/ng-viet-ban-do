module.exports = function (ngModule) {
    // Templates import.
    var ngComponentTemplate = require('./basic-map.html');

    ngModule.config(
        function ($stateProvider, appStates) {
            $stateProvider.state(appStates.basicMap.name, {
                url: appStates.basicMap.url,
                controller: 'basicMapTutorialController',
                template: ngComponentTemplate
            });
    })
};