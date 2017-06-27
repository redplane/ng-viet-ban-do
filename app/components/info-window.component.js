/**
 * Created by Akai on 6/19/2017.
 */
angular.module('info-window', ['ngRoute', 'showcaseModule'])
    .config(['$locationProvider', '$routeProvider',
        function ($locationProvider, $routeProvider) {

            // Url hash configuration
            $locationProvider
                .hashPrefix('!');

            // Fallback url.
            $routeProvider
                .when('/info-window', {
                    controller: 'InfoWindowComponentController',
                    templateUrl: 'components/info-window.component.html'
                });
        }])
    .controller('InfoWindowComponentController', [
        '$scope', 'showcaseService',
        function ($scope, showcaseService) {

            //#region Properties

            // Information of directive.
            $scope.information = null;

            // Map configuration.
            $scope.map = {
                center: new vietbando.LatLng(10.8152328, 106.680505),
                zoom: 10
            };

            // Info window configuration.
            $scope.infoWindow = {
                position: new vietbando.LatLng(10.8152328, 106.680505),
                content: 'Hello'
            };

            //#endregion

            /*
             * Called when component has been initiated successfully.
             * */
            $scope.init = function () {
                // Load showcase information.
                $scope.loadInfo();
            };

            /*
            * Load information from service
            * */
            $scope.loadInfo = function(){
                showcaseService.getInfoWindowInfo()
                    .then(function (x) {

                        // Read the returned data.
                        var data = x.data;

                        // Read directives list.
                        $scope.information = data;
                    });
            }
        }]);