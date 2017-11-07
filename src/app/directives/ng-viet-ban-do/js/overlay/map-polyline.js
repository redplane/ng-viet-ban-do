'use strict';

angular.module('ng-viet-ban-do')
    .directive('mapPolyline', function () {
        return {
            restrict: 'E',
            require: '^ngVietMap',
            scope: {
                path: '=',
                strokeColor: '=?',
                strokeOpacity: '=?',
                strokeWidth: '=?',
                visible: '=?',
                drawArrows: '=?',
                draggable: '=?',
                repeatArrow: '=?',
                widthArrow: '=?',

                // Event listeners
                click: '&',
                doubleClick: '&',
                rightClick: '&',
                mouseOver: '&',
                mouseOut: '&',
                mouseMove: '&',
                mouseDown: '&',
                mouseUp: '&'
            },
            link: function (scope, element, attrs, controller) {

                // List of properties which should be listened for changes.
                var properties = [
                    {name: 'path', function: 'setPath', default: null},
                    {name: 'strokeColor', function: 'setStrokeColor', default: null},
                    {name: 'strokeOpacity', function: 'setStrokeOpacity', default: null},
                    {name: 'strokeWidth', function: 'setStrokeWidth', default: null},
                    {name: 'visible', function: 'setVisible', default: true},
                    {name: 'drawArrows', function: 'setDrawArrows', default: false},
                    {name: 'draggable', function: null, default: null},
                    {name: 'repeatArrow', function: null},
                    {name: 'widthArrow', function: null}
                ];

                /*
                * Events list and their alias
                * */
                var events = [
                    {name: 'click', alias: 'click'},
                    {name: 'dblclick', alias: 'doubleClick'},
                    {name: 'rightclick', alias: 'rightClick'},
                    {name: 'mouseover', alias: 'mouseOver'},
                    {name: 'mouseout', alias: 'mouseOut'},
                    {name: 'mousedown', alias: 'mouseDown'},
                    {name: 'mouseup', alias: 'mouseUp'}
                ];

                /*
                 * This event is fired when map has been initiated and is ready.
                 * */
                scope.$on('map-is-ready', function (event, args) {

                    // Initiate polyline.
                    var polylineOptions = new vietbando.PolylineOptions();
                    for (var index = 0; index < properties.length; index++) {
                        var property = properties[index];
                        if (scope[property.name] != null)
                            polylineOptions[property.name] = scope[property.name];
                        else{
                            if (property.default != null)
                                polylineOptions[property.name] = property.default;
                        }

                        if (property.function != null) {
                            var szPropertyName = property.name;
                            var szFunctionName = property.function;

                            // Start listening changes.
                            scope.listenChanges(szPropertyName, szFunctionName);
                        }
                    }

                    // Initiate polyline which will be attached into map.
                    scope.polyline = new vietbando.Polyline(polylineOptions);

                    // Initiate polyline.
                    scope.polyline.setMap(args.map);

                    // Listen to events list.
                    for (var iEventId = 0; iEventId < events.length; iEventId++) {
                        var pEvent = events[iEventId];
                        var szEventName = pEvent.name;
                        var szAlias = pEvent.alias;

                        scope.hookEvents(scope.polyline, szEventName, szAlias);
                    }
                });

                /*
                * Listen to property changes.
                * */
                scope.listenChanges = function (szPropertyName, szFunctionName) {
                    // Find the name of property.
                    scope.$watch(szPropertyName, function (current, past, internalScope) {
                        if (internalScope.polyline == null)
                            return;
                        scope.polyline[szFunctionName](current);
                    })

                };

                /*
                * Listen to events.
                * */
                scope.hookEvents = function(polyline, szEventName, szAlias){
                    // Catch drag start event.
                    vietbando.event.addListener(polyline, szEventName, function (parameter) {
                        // Raise event on scope.
                        scope[szAlias]({parameter: parameter});
                    });
                }
            },
            controller: ['$scope', function ($scope) {
            }]
        };
    });