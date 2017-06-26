/**
 * Created by Akai on 6/19/2017.
 */
angular.module('basic-map', ['ngRoute', 'showcaseModule'])
    .config(['$locationProvider', '$routeProvider',
        function ($locationProvider, $routeProvider) {

            // Url hash configuration
            $locationProvider
                .hashPrefix('!');

            // Fallback url.
            $routeProvider
                .when('/basic-map', {
                    controller: 'BasicMapController',
                    templateUrl: 'components/basic-map.component.html'
                });
        }])
    .controller('BasicMapController', [
        '$scope', 'showcaseService',
        function ($scope, showcaseService) {

            //#region Properties

            // Showcase information.
            $scope.information = null;

            // Map options
            $scope.options = {
                backgroundColor: 'red',
                center: new vietbando.LatLng(17.01476753, 106.76513672),
                layer: null,
                disableDoubleClickZoom: true,
                scrollWheel: true,
                limitBounds: null,
                mapTypeId: 'TERRAIN',
                minZoom: null,
                maxZoom: null,
                zoom: 1,
                isMoveInsert: false,
                extendTile: 0,
                zoomControl: false,
                scaleControl: false
            };

            //#endregion

            //#region Methods

            /*
             * Called when page has been initiated successfully.
             * */
            $scope.init = function () {
                // Load showcase information.
                $scope.loadShowcase();
            };


            /*
             * Load and analyze showcase information
             * */
            $scope.loadShowcase = function () {
                showcaseService.getBasicMapInfo()
                    .then(function (x) {

                        console.log(x);
                        // Obtain data from service.
                        var data = x.data;

                        // Load information.
                        $scope.information = data;
                    });
            }
            //#endregion

        }]);