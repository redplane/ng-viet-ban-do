'use strict';

// Declare app level module which depends on views, and components
angular
    .module('api-documentation', [
        'ngRoute',
        'pascalprecht.translate',
        'viet-map'
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
            $routeProvider.otherwise({redirectTo: '/personal-summary'});

        }])
    .controller('ApiDocumentationController', ['$scope', function ($scope) {

        $scope.position = new vietbando.LatLng(10.8152328, 96.680505);

        $scope.mapOptions = {
            mapTypeId: 'TERRAIN',
            zoomControl: false
        };

        $scope.clickMap = function(parameter){
            console.log(parameter);
        }
    }]);
