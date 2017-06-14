'use strict';

// Declare app level module which depends on views, and components
angular
    .module('ng-viet-ban-do-tutorial', [
        'ngRoute',
        'pascalprecht.translate',
        'ng-viet-ban-do'
    ])
    .config(['$locationProvider', '$routeProvider', '$translateProvider',
        function ($locationProvider, $routeProvider, $translateProvider) {

            // Use static files loader.
            $translateProvider.useStaticFilesLoader({
                prefix: 'assets/data/language/locale-',
                suffix: '.json'
            });

            // Url hash configuration
            $locationProvider
                .hashPrefix('!');

            // Fallback url.
            $routeProvider.otherwise({redirectTo: '/ng-viet-ban-do-tutorial'});

        }])
    .controller('NgVietBanDoTutorialController', ['$scope', function ($scope) {

        $scope.position = new vietbando.LatLng(10.8152328, 96.680505);

        /*
        * Polyline configuration.
        * */
        $scope.polyline = {
            path: [
                new vietbando.LatLng(10.6957166, 106.549606),
                new vietbando.LatLng(10.7526291, 106.979296),
                new vietbando.LatLng(10.8920646, 106.708961),
                new vietbando.LatLng(10.6160392, 106.794330)
            ],
            strokeColor: 'green',
            strokeOpacity: 7,
            strokeWidth: 5,
            visible: true,
            drawArrows: false
        };

        /*
        * Polygon configuration.
        * */
        $scope.polygon = {
            fillColor: 'red',
            fillOpacity: 1,
            paths: [
                new vietbando.LatLng(10.823864119711999, 106.62918090820312),
                new vietbando.LatLng(10.841061577718563, 106.64497375488281),
                new vietbando.LatLng(10.827236248136629, 106.67964935302734),
                new vietbando.LatLng(10.815096408251193, 106.67930603027344),
                new vietbando.LatLng(10.80261883853781, 106.66488647460938),
                new vietbando.LatLng(10.808689072388347, 106.63536071777344)
            ],
            strokeOpacity: 0.5,
            strokeWidth: 3,
            zIndex: 5,
            visible: true
        };

        $scope.mapOptions = {
            mapTypeId: 'TERRAIN',
            zoomControl: false
        };

        $scope.visibilities = [
            {
                text: 'Hidden',
                value: false
            },
            {
                text: 'Visible',
                value: true
            }];

        /*
         * This event is fired when marker is clicked.
         * */
        $scope.clickMarker = function (parameter) {
            console.log(parameter);
        };

        //#region Polygon events

        $scope.clickPolygon = function(parameter){
            console.log(parameter);
        }

        //#endregion
    }]);
