/**
 * Created by Linh Nguyen on 6/19/2017.
 */
/**
 * Created by Akai on 6/19/2017.
 */
angular.module('main-component', ['ngRoute'])
    .config(['$locationProvider', '$routeProvider',
        function ($locationProvider, $routeProvider) {

            // Url hash configuration
            $locationProvider
                .hashPrefix('!');

            // Fallback url.
            $routeProvider
                .when('/', {
                    controller: 'MainComponentController',
                    templateUrl: 'components/main.component.html'
                })
                .when('', {
                    controller: 'MainComponentController',
                    templateUrl: 'components/main.component.html'
                });
        }])
    .controller('MainComponentController', ['$scope', function ($scope) {


    }]);