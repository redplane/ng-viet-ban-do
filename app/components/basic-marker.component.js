/**
 * Created by Akai on 6/19/2017.
 */
angular.module('basic-marker', ['ngRoute', 'showcaseModule'])
    .config(['$locationProvider', '$routeProvider',
        function ($locationProvider, $routeProvider) {

            // Url hash configuration
            $locationProvider
                .hashPrefix('!');

            // Fallback url.
            $routeProvider
                .when('/basic-marker', {
                    controller: 'BasicMarkerComponent',
                    templateUrl: 'components/basic-marker.component.html'
                });
        }])
    .controller('BasicMarkerComponent', [
        '$scope', 'showcaseService',
        function ($scope, showcaseService) {

            //#region Properties

            // Options of map.
            $scope.options = {
                backgroundColor: 'red',
                center: new vietbando.LatLng(10.8152328, 106.680505),
                layer: null,
                disableDoubleClickZoom: true,
                scrollWheel: true,
                limitBounds: null,
                mapTypeId: 'TERRAIN',
                minZoom: null,
                maxZoom: null,
                zoom: 10,
                isMoveInsert: false,
                extendTile: 0,
                zoomControl: false,
                scaleControl: false
            };

            // Settings of marker.
            $scope.markers = [
                {
                    anchorPoint: null,
                    crossOnDrag: true,
                    draggable: false,
                    cursor: 'default',
                    position: new vietbando.LatLng(10.8152328, 106.680505),
                    shadow: null,
                    shape: null,
                    title: 'Area 01',
                    opacity: 1,
                    zIndex: 999,
                    visible: true
                }
            ];

            // Information which is used for displaying on the screen.
            $scope.information = null;

            //#endregion

            //#region Methods

            /*
             * Called when component has been initiated successfully.
             * */
            $scope.init = function () {
                // Load information.
                $scope.loadInfo();

                // Initiate a marker.

                var position = new vietbando.LatLng(16.404470456702423, 107.2320556640625);
                var marker = _.cloneDeep($scope.markers[0]);
                marker.position = position;
                marker['icon'] = new vietbando.Icon({
                    url: '/assets/icon/marker-32.ico',
                    size: new vietbando.Size(32, 32)
                });

                $scope.markers.push(marker);
            };

            /*
             * Load component information.
             * */
            $scope.loadInfo = function () {
                showcaseService.getBasicMarkerInfo()
                    .then(function (x) {
                        var data = x.data;
                        $scope.information = data;
                    });
            }
            //#endregion
        }]);