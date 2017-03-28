'use strict';

angular.module('viet-map')
    .directive('customMarker', function () {
        return {
            restrict: 'E',
            template: '<div ng-transclude></div>',
            transclude: true,
            require: '^vietMap',
            scope: {
                anchorPoint: '=?',
                crossOnDrag: '=',
                draggable: '=',
                cursor: '=?',
                position: '=?',
                shadow: '=?',
                shape: '=?',
                title: '=?',
                opacity: '=?',
                icon: '=?',
                zIndex: '=?',
                visible: '=?',
                content: '=?',

                // Event listeners
                click: '&',
                doubleClick: '&',
                rightClick: '&',
                dragStart: '&',
                drag: '&',
                dragEnd: '&',
                mouseOver: '&',
                mouseOut: '&',
                mouseDown: '&',
                mouseUp: '&'
            },
            link: function (scope, element, attrs, mapController) {

                // Watch opacity for changes.
                scope.$watch('opacity', function (value) {
                    if (scope.customMarker == null)
                        return;

                    scope.customMarker.setOpacity(value);
                });

                // Watch cursor for changes.
                scope.$watch('cursor', function (value) {
                    if (scope.customMarker == null)
                        return;

                    if (value == null)
                        return;

                    scope.customMarker.setCursor(value);
                });

                // Watch title for changes.
                scope.$watch('title', function (value) {
                    if (scope.customMarker == null)
                        return;

                    scope.customMarker.setTitle(value);
                });

                // Watch position for changes.
                scope.$watch('position', function (value) {
                    if (scope.customMarker == null)
                        return;

                    scope.customMarker.setPosition(value);
                });

                // Watch draggable for changes.
                scope.$watch('draggable', function (value) {
                    if (scope.customMarker == null)
                        return;

                    scope.customMarker.setDraggable(value);
                });

                // Watch z-index for changes.
                scope.$watch('zIndex', function (value) {
                    if (scope.customMarker == null)
                        return;

                    scope.customMarker.setZIndex(value);
                });

                // Watch draggable for changes.
                scope.$watch('visible', function (value) {
                    if (scope.customMarker == null)
                        return;

                    scope.customMarker.setVisible(value);
                });

                scope.$on('map-is-ready', function (event, args) {
                    var position = new vietbando.LatLng(10.8152328, 106.680505);
                    if (scope.position != null)
                        position = scope.position;

                    // Set marker default position.
                    scope.customMarker = new vietbando.Marker({
                        position: position
                    });

                    // Attach marker to the map.
                    scope.customMarker.setMap(args.map);

                    // Initiate events listeners.
                    scope.initiateMarkerEventListeners(scope.customMarker);

                    // Broadcast the event to children.
                    scope.$broadcast('custom-marker-is-ready', scope.customMarker);
                });


                // Initiate marker event listeners.
                scope.initiateMarkerEventListeners = function (marker) {

                    // Marker is invalid.
                    if (marker == null)
                        return;

                    // Catch click event of marker.
                    vietbando.event.addListener(marker, 'click', function (parameter) {
                        // Raise event on scope.
                        scope.click({parameter: parameter});
                    });

                    // Catch double click event.
                    vietbando.event.addListener(marker, 'dblclick', function (parameter) {
                        // Raise event on scope.
                        scope.doubleClick({parameter: parameter});
                    });

                    // Catch right click event.
                    vietbando.event.addListener(marker, 'rightclick', function (parameter) {
                        // Raise event on scope.
                        scope.rightClick({parameter: parameter});
                    });

                    // Catch drag start event.
                    vietbando.event.addListener(marker, 'dragstart', function (parameter) {
                        // Raise event on scope.
                        scope.dragStart({parameter: parameter});
                    });

                    // Catch drag event.
                    vietbando.event.addListener(marker, 'drag', function (parameter) {
                        // Raise event on scope.
                        scope.drag({parameter: parameter});
                    });

                    // Catch dragend event.
                    vietbando.event.addListener(marker, 'dragend', function (parameter) {
                        // Raise event on scope.
                        scope.dragEnd({parameter: parameter});
                    });

                    // Catch mouse over event.
                    vietbando.event.addListener(marker, 'mouseover', function (parameter) {
                        // Raise event on scope.
                        scope.mouseOver({parameter: parameter});
                    });

                    // Catch mouse out event.
                    vietbando.event.addListener(marker, 'mouseout', function (parameter) {
                        // Raise event on scope.
                        scope.mouseOut({parameter: parameter});
                    });

                    // Catch mouse down event.
                    vietbando.event.addListener(marker, 'mousedown', function (parameter) {
                        // Raise event on scope.
                        scope.mouseDown({parameter: parameter});
                    });

                    // Catch mouse up event.
                    vietbando.event.addListener(marker, 'mouseup', function (parameter) {
                        // Raise event on scope.
                        scope.mouseUp({parameter: parameter});
                    });
                }
            },
            controller: ['$scope', function ($scope) {

            }]
        };
    });