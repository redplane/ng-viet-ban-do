/**
 * Created by Linh Nguyen on 6/19/2017.
 */
/**
 * Created by Akai on 6/19/2017.
 */
angular.module('map-rectangle', ['ngRoute'])
    .config(['$locationProvider', '$routeProvider',
        function ($locationProvider, $routeProvider) {

            // Url hash configuration
            $locationProvider
                .hashPrefix('!');

            // Fallback url.
            $routeProvider
                .when('/map-rectangle', {
                    controller: 'MapRectangleComponent',
                    templateUrl: 'components/map-rectangle.component.html'
                });
        }])
    .controller('MapRectangleComponent', ['$scope', function ($scope) {

        /*
         * Option of map.
         * */
        $scope.options = {
            backgroundColor: 'red',
            center: new vietbando.LatLng(11.02747219, 107.19360352),
            layer: null,
            disableDoubleClickZoom: true,
            scrollWheel: true,
            limitBounds: null,
            mapTypeId: 'SATELLITE',
            minZoom: null,
            maxZoom: null,
            zoom: 5,
            isMoveInsert: false,
            extendTile: 0,
            zoomControl: false,
            scaleControl: false
        };

        /*
         * Rectangle configuration
         * */
        $scope.mapRectangleOptions = {
            bounds: new vbd.LatLngBounds(new vietbando.LatLng(10.970516, 106.408081), new vbd.LatLng(12.229635, 108.858032)),
            draggable: true,
            fillColor: 'blue',
            fillOpacity: 1,
            strokeColor: 'green',
            strokeWidth: 1,
            strokeOpacity: 1,
            visible: true,
            zIndex: 10
        };
    }]);