/**
 * Created by Linh Nguyen on 6/19/2017.
 */
/**
 * Created by Akai on 6/19/2017.
 */
angular.module('custom-marker', ['ngRoute'])
    .config(['$locationProvider', '$routeProvider',
        function ($locationProvider, $routeProvider) {

            // Url hash configuration
            $locationProvider
                .hashPrefix('!');

            // Fallback url.
            $routeProvider
                .when('/custom-marker', {
                    controller: 'CustomMarkerComponent',
                    templateUrl: 'components/custom-marker.component.html'
                });
        }])
    .controller('CustomMarkerComponent', ['$scope', function ($scope) {

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
            mapTypeId: 'SATELLITE',
            minZoom: null,
            maxZoom: null,
            zoom: 1,
            isMoveInsert: false,
            extendTile: 0,
            zoomControl: false,
            scaleControl: false
        };

        /*
         * Settings of marker.
         * */
        $scope.markerSettings = [
            {
                anchorPoint: null,
                crossOnDrag: true,
                draggable: false,
                cursor: 'default',
                position: new vietbando.LatLng(21.39170473, 105.85327148),
                shadow: null,
                shape: null,
                title: 'Area 01',
                opacity: 0.5,
                icon: null,
                zIndex: 999,
                visible: true,
                content: '<span class="glyphicon glyphicon-calendar"></span>'
            },
            {
                anchorPoint: null,
                crossOnDrag: true,
                draggable: true,
                cursor: 'default',
                position: new vietbando.LatLng(17.76961225, 106.02905273),
                shadow: null,
                shape: null,
                title: 'Area 02',
                opacity: 1,
                icon: null,
                zIndex: 999,
                visible: true,
                content: '<div style="background-color: white; vertical-align: middle; text-align: center"><span class="glyphicon glyphicon-alert"></span></div>'
            },
            {
                anchorPoint: null,
                crossOnDrag: true,
                draggable: true,
                cursor: 'default',
                position: new vietbando.LatLng(20.76961225, 106.02905273),
                shadow: null,
                shape: null,
                title: 'Area 03',
                opacity: 1,
                zIndex: 999,
                visible: true,
                content: '<div style="background-color: transparent; vertical-align: middle; text-align: center"><span class="glyphicon glyphicon-apple"></span></div>'
            }];

        $scope.specialMarker = {
            anchorPoint: null,
            crossOnDrag: true,
            draggable: false,
            cursor: 'no-drop',
            position: new vietbando.LatLng(20.41671699, 104.92630005),
            shadow: null,
            shape: null,
            title: 'Special marker',
            opacity: 0.5,
            icon: null,
            zIndex: 999,
            visible: true
        }
    }]);