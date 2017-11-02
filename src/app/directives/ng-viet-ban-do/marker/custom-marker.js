'use strict';

angular.module('ng-viet-ban-do')
    .directive('customMapMarker', function () {
        return {
            restrict: 'E',
            template: '<div ng-transclude></div>',
            transclude: true,
            require: '^ngVietMap',
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

                // List of properties which should be listened for changes.
                var properties = [
                    {name: 'anchorPoint', function: null, default: null},
                    {name: 'crossOnDrag', function: null, default: null},
                    {name: 'draggable', function: 'setDraggable', default: null},
                    {name: 'cursor', function: 'setCursor', default: null},
                    {name: 'position', function: 'setPosition', default: null},
                    {name: 'shadow', function: 'setShadow', default: null},
                    {name: 'shape', function: 'setShape', default: null},
                    {name: 'title', function: 'setTitle', default: null},
                    {name: 'opacity', function: 'setOpacity', default: null},
                    {name: 'icon', function: 'setIcon', default: null},
                    {name: 'zIndex', function: 'setZIndex', default: null},
                    {name: 'visible', function: 'setVisible', default: true},
                    {name: 'content', function: 'setContent', default: null}
                ];

                /*
                 * Events list and their alias
                 * */
                var events = [
                    {name: 'click', alias: 'click'},
                    {name: 'dblclick', alias: 'doubleClick'},
                    {name: 'rightclick', alias: 'rightClick'},
                    {name: 'dragstart', alias: 'dragStart'},
                    {name: 'drag', alias: 'drag'},
                    {name: 'dragEnd', alias: 'dragEnd'},
                    {name: 'mouseover', alias: 'mouseOver'},
                    {name: 'mouseout', alias: 'mouseOut'},
                    {name: 'mousedown', alias: 'mouseDown'},
                    {name: 'mouseup', alias: 'mouseUp'}
                ];

                /*
                 * This event is fired when map has been initiated and is ready.
                 * */
                scope.$on('map-is-ready', function (event, args) {

                    // Initiate marker.
                    var options = new vietbando.MarkerOptions();
                    for (var index = 0; index < properties.length; index++) {
                        var property = properties[index];
                        if (scope[property.name] != null)
                            options[property.name] = scope[property.name];
                        else{
                            if (property.default != null)
                                options[property.name] = property.default;
                        }

                        if (property.function != null) {
                            var szPropertyName = property.name;
                            var szFunctionName = property.function;

                            // Start listening changes.
                            scope.listenChanges(szPropertyName, szFunctionName);
                        }
                    }

                    options['map'] = args.map;

                    console.log(options);
                    // Initiate marker which will be attached into map.
                    scope.customMarker = new vietbando.CustomMarker(options);

                    // Listen to events list.
                    for (var iEventId = 0; iEventId < events.length; iEventId++) {
                        var pEvent = events[iEventId];
                        var szEventName = pEvent.name;
                        var szAlias = pEvent.alias;

                        scope.hookEvents(scope.customMarker, szEventName, szAlias);
                    }

                    scope.$broadcast('marker-is-ready', {map: args.map, marker: scope.customMarker});
                });

                /*
                 * Listen to property changes.
                 * */
                scope.listenChanges = function (szPropertyName, szFunctionName) {
                    // Find the name of property.
                    scope.$watch(szPropertyName, function (current, past, innerScope) {
                        if (innerScope.customMarker == null)
                            return;

                        innerScope.customMarker[szFunctionName](current);
                    })

                };

                /*
                 * Listen to events.
                 * */
                scope.hookEvents = function(marker, szEventName, szAlias){
                    // Catch drag start event.
                    vietbando.event.addListener(marker, szEventName, function (parameter) {
                        // Raise event on scope.
                        scope[szAlias]({parameter: parameter});
                    });
                }
            },
            controller: ['$scope', function ($scope) {
            }]
        };
    });