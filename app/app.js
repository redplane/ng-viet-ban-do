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
    }]);
