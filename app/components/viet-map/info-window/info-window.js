'use strict';

angular.module('viet-map')
    .directive('infoWindow', function () {
        return {
            restrict: 'E',
            template: '<div ng-transclude></div>',
            transclude: true,
            require: ['^vietMap', '?^marker'],
            scope: {
                content: '@',
                autoPan: '=',
                pixelOffset: '=',
                position: '=',
                zIndex: '=',

                closeClick: '&',
                contentChanged: '&',
                positionChanged: '&',
                zIndexChanged: '&'
            },
            link: function (scope, element, attrs, controllers) {

                // Watch content for its changes.
                scope.$watch('content', function (value) {
                    // Info window is invalid.
                    if (scope.infoWindow == null)
                        return;

                    scope.infoWindow.setContent(value);
                });

                // Watch position for its change.
                scope.$watch('position', function (value) {
                    // Info window is invalid.
                    if (scope.infoWindow == null)
                        return;

                    scope.infoWindow.setPosition(value);
                });

                // Watch zIndex for its change.
                scope.$watch('zIndex', function (value) {
                    // Info window is invalid.
                    if (scope.infoWindow == null)
                        return;

                    scope.infoWindow.setZIndex(value);
                });

                // Catch marker ready event.
                scope.$on('marker-is-ready', function (event, arg) {

                    // Update marker.
                    scope.parentMarker = arg.marker;
                    scope.$applyAsync();

                    // Load info window default setting.
                    var settings = {
                        content: scope.content,
                        autoPan: scope.autoPan,
                        pixelOffset: scope.pixelOffset,
                        position: scope.position,
                        zIndex: scope.zIndex
                    };

                    scope.infoWindow = new vietbando.InfoWindow(settings);
                    scope.openInfoWindow();
                });

                scope.$on('map-is-ready', function (event, arg) {
                    scope.parentMap = arg.map;
                    scope.$applyAsync();
                    scope.openInfoWindow();
                });

                // Open info window.
                scope.openInfoWindow = function () {
                    if (scope.parentMap == null || !(scope.parentMap instanceof vietbando.Map))
                        return;

                    scope.infoWindow.open(scope.parentMap, scope.parentMarker);
                }
            },
            controller: function ($scope, $element) {
                $scope.infoWindow = new vietbando.InfoWindow();
                $scope.parentMap = {};
                $scope.parentMarker = {};
            }
        };
    });