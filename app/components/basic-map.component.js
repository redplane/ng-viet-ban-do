/**
 * Created by Akai on 6/19/2017.
 */
angular.module('basic-map', ['ngRoute'])
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
    .controller('BasicMapController', ['$scope', function ($scope) {

        /*
        * Option of map.
        * */
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
    }]);