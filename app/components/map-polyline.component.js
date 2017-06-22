/**
 * Created by Linh Nguyen on 6/19/2017.
 */
/**
 * Created by Akai on 6/19/2017.
 */
angular.module('map-polyline', ['ngRoute'])
    .config(['$locationProvider', '$routeProvider',
        function ($locationProvider, $routeProvider) {

            // Url hash configuration
            $locationProvider
                .hashPrefix('!');

            // Fallback url.
            $routeProvider
                .when('/map-polyline', {
                    controller: 'MapPolylineComponentController',
                    templateUrl: 'components/map-polyline.component.html'
                });
        }])
    .controller('MapPolylineComponentController', ['$scope', function ($scope) {

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
        $scope.polylineOptions = {
            path: null,
            strokeColor: 'red',
            strokeOpacity: 0.5,
            strokeWidth: 1,
            visible: true,
            drawArrows: true,
            draggable: true
        };

        $scope.init = function(){

            var paths = [];
            paths.push(new vbd.LatLng(19.36297613334183, 105.435791015625)); // Nghe an
            paths.push(new vbd.LatLng(17.486911100806864, 106.6058349609375)); // Quang binh
            paths.push(new vbd.LatLng(16.056371485561684, 108.2098388671875)); // Da nang
            paths.push(new vbd.LatLng(12.297068292853808, 109.15191650390625)); // Khanh hoa
            paths.push(new vbd.LatLng(10.860281096281653, 106.754150390625)); // Sai gon
            paths.push(new vbd.LatLng(9.221404620134237, 105.1446533203125)); // Ca mau

            $scope.polylineOptions.path = paths;

        }
    }]);