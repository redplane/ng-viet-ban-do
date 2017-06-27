/**
 * Created by Akai on 6/19/2017.
 */
angular.module('main-component', ['ngRoute', 'showcaseModule'])
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
    .controller('MainComponentController', ['$scope', 'showcaseService',
        function ($scope, showcaseService) {

        //#region Properties

        // List of directives information.
        $scope.directives = null;

        //#endregion

        /*
         * Called when component has been initiated successfully.
         * */
        $scope.init = function () {
            showcaseService.getDirectivesList()
                .then(function (x) {

                    // Read the returned data.
                    var data = x.data;

                    // Read directives list.
                    $scope.directives = data.directives;
                });
        }

    }]);