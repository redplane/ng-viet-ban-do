/**
 * Created by Akai on 6/19/2017.
 */
module.exports = function(ngModule){

    // Load component template.
    var ngComponentTemplate = require('./main.html');

    // Module configuration.
    ngModule.config(['$locationProvider', '$routeProvider',
        function ($locationProvider, $routeProvider) {

            // Url hash configuration
            $locationProvider
                .hashPrefix('!');

            // Fallback url.
            $routeProvider
                .when('/', {
                    controller: 'MainComponentController',
                    template: ngComponentTemplate
                })
                .when('', {
                    controller: 'MainComponentController',
                    template: ngComponentTemplate
                });
        }])
};
angular.module('main-component', ['ngRoute', 'showcaseModule'])

