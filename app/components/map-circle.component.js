/**
 * Created by Linh Nguyen on 6/19/2017.
 */
/**
 * Created by Akai on 6/19/2017.
 */
angular.module('map-circle', ['ngRoute'])
    .config(['$locationProvider', '$routeProvider',
        function ($locationProvider, $routeProvider) {

            // Url hash configuration
            $locationProvider
                .hashPrefix('!');

            // Fallback url.
            $routeProvider
                .when('/map-circle', {
                    controller: 'MapCircleComponentController',
                    templateUrl: 'components/map-circle.component.html'
                });
        }])
    .controller('MapCircleComponentController', ['$scope', function ($scope) {

        /*
         * Option of map.
         * */
        $scope.options = {
            backgroundColor: 'green',
            center: new vietbando.LatLng(21.08450008, 105.67749023),
            layer: null,
            disableDoubleClickZoom: true,
            scrollWheel: true,
            limitBounds: null,
            mapTypeId: 0,
            minZoom: null,
            maxZoom: null,
            zoom: 10,
            isMoveInsert: false,
            extendTile: 0,
            zoomControl: false,
            scaleControl: false
        };

        /*
         * Rectangle configuration
         * */
        $scope.mapCircleOptions = {
            center: new vietbando.LatLng(21.08450008, 105.67749023),
            fillColor: 'red',
            fillOpacity: 0.5,
            strokeOpacity: 1,
            strokeWidth: 1,
            visible: true,
            radius: 20000
        };
    }]);