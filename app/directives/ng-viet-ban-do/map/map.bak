'use strict';

angular.module('ng-viet-ban-do')
    .directive('ngVietMap', function () {
        return {
            restrict: 'E',
            templateUrl: "directives/ng-viet-ban-do/map/map.html",
            transclude: true,
            scope: {
                center: '=?',
                options: '=?',
                width: '@',
                height: '@',

                // Events.
                clickOnMap: '&',
                doubleClickOnMap: '&',
                rightClickOnMap: '&',
                startZooming: '&',
                finishZooming: '&',
                startDragging: '&',
                finishDragging: '&',
                mapTypeChange: '&',
                mouseOver: '&',
                mouseMove: '&',
                mouseOut: '&',
                centerChange: '&',
                zoomChange: '&',
                resize: '&',
                boundChange: '&'
            },
            link: function (scope, element, attrs, controller) {

                // Watch center property for its change.
                scope.$watch('center', function (value) {
                    if (scope.map == null || value == undefined)
                        return;

                    scope.map.setCenter(value);
                });

                // Initiate the map when document is ready.
                angular.element(document).ready(function () {

                    // Initiate map properties.
                    var mapProperties = {};

                    if (scope.options == null) {
                        // Initiate default properties.
                        mapProperties = {
                            center: new vietbando.LatLng(10.8152328, 106.680505),
                            zoom: 5
                        }
                    } else {
                        mapProperties = Object.assign({}, scope.options);
                    }


                    // Find the map-layout inside component and initiate a map on it.
                    var elementChildren = element[0].getElementsByClassName('map-layout');
                    if (elementChildren == null || elementChildren.length < 1 || elementChildren[0] == null)
                        return;

                    // Initiate map.
                    var map = new vietbando.Map(elementChildren[0], mapProperties);
                    scope.map = map;

                    // Initiate event listeners.
                    scope.initiateEventListeners(scope.map);

                    // Broadcast to all children that map is ready.
                    scope.$broadcast('map-is-ready', {map: map});
                });

                // Initiate event listener for a specific map instance.
                scope.initiateEventListeners = function (map) {
                    // This callback is fired when user clicks on map.
                    vietbando.event.addListener(map, 'click', function (param) {
                        scope.clickOnMap({parameter: param});
                    });

                    // This callback is fired when user double clicks on map.
                    vietbando.event.addListener(map, 'dblclick', function (param) {
                        scope.doubleClickOnMap({parameter: param});
                    });

                    // This callback is fired when user right clicks on map.
                    vietbando.event.addListener(map, 'rightclick', function (param) {
                        scope.rightClickOnMap({parameter: param});
                    });

                    // This callback is fired when user starts zooming on map.
                    vietbando.event.addListener(map, 'zoomstart', function () {
                        scope.startZooming();
                    });

                    // This callback is fired when user finishes zooming on map.
                    vietbando.event.addListener(map, 'zoomstart', function () {
                        scope.finishZooming();
                    });

                    // This callback is fired when user starts dragging map.
                    vietbando.event.addListener(map, 'dragstart', function () {
                        scope.startDragging();
                    });

                    // This callback is fired when user starts dragging map.
                    vietbando.event.addListener(map, 'dragend', function () {
                        scope.finishDragging();
                    });

                    // This callback is fired when map type is changed.
                    vietbando.event.addListener(map, 'maptypeid_changed', function () {
                        scope.mapTypeChange();
                    });

                    // This callback is fired when user moves his/her mouse over the map.
                    vietbando.event.addListener(map, 'mousehover', function (parameter) {
                        scope.mouseOver(parameter);
                    });

                    // This callback is fired when user moves his/her mouse on the map.
                    vietbando.event.addListener(map, 'mousemove', function (parameter) {
                        scope.mouseMove(parameter);
                    });

                    // This callback is fired when user moves his/her mouse out of the map.
                    vietbando.event.addListener(map, 'mouseout', function (parameter) {
                        scope.mouseOut(parameter);
                    });

                    // This callback is fired when map center is changed.
                    vietbando.event.addListener(map, 'center_changed', function () {
                        scope.centerChange();
                    });

                    // This callback is fired when zoom is changed.
                    vietbando.event.addListener(map, 'zoom_changed', function () {
                        scope.zoomChange();
                    });

                    // This callback is fired when map is resized.
                    vietbando.event.addListener(map, 'resize', function () {
                        scope.resize();
                    });

                    // This callback is fired when map bound is changed.
                    vietbando.event.addListener(map, 'boundchange', function () {
                        scope.boundChange();
                    });
                }
            },
            controller: function ($scope, $element) {
            }
        };
    });