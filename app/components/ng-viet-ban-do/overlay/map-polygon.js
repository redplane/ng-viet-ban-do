'use strict';

angular.module('ng-viet-ban-do')
    .directive('mapPolygon', function () {
        return {
            restrict: 'E',
            require: '^ngVietMap',
            scope: {
                paths: '=',
                fillColor: '=?',
                fillOpacity: '=?',
                zIndex: '=?',
                visible: '=?',
                strokeColor: '=?',
                strokeOpacity: '=?',
                strokeWidth: '=?',

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
                    {name: 'paths', function: 'setPaths', default: null},
                    {name: 'fillColor', function: 'setFillColor', default: null},
                    {name: 'fillOpacity', function: 'setFillOpacity', default: null},
                    {name: 'zIndex', function: 'setZIndex', default: null},
                    {name: 'visible', function: 'setVisible', default: true},
                    {name: 'strokeColor', function: 'setStrokeColor', default: 'green'},
                    {name: 'strokeOpacity', function: 'setStrokeOpacity', default: 1},
                    {name: 'strokeWidth', function: 'setStrokeWidth', default: 1}
                ];

                // List of events and their alias in directive.
                var events = [
                    {name: 'click', alias: 'click'},
                    {name: 'dblclick', alias: 'doubleClick'},
                    {name: 'rightclick', alias: 'rightClick'},
                    {name: 'mouseover', alias: 'mouseOver'},
                    {name: 'mouseout', alias: 'mouseOut'},
                    {name: 'mousemove', alias: 'mouseMove'},
                    {name: 'mousedown', alias: 'mouseDown'},
                    {name: 'mouseup', alias: 'mouseUp'}
                ];

                /*
                 * This event is fired when map has been initiated and is ready.
                 * */
                scope.$on('map-is-ready', function (event, args) {

                    // Initiate polyline.
                    var polygonOptions = new vietbando.PolygonOptions();
                    for (var index = 0; index < properties.length; index++) {
                        var property = properties[index];
                        if (scope[property.name] != null)
                            polygonOptions[property.name] = scope[property.name];
                        else{
                            if (property.default != null)
                                polygonOptions[property.name] = property.default;
                        }

                        if (property.function != null) {
                            var szPropertyName = property.name;
                            var szFunctionName = property.function;

                            // Start listening changes.
                            scope.listenChanges(szPropertyName, szFunctionName);
                        }
                    }

                    // Initiate polyline which will be attached into map.
                    scope.polygon = new vietbando.Polygon(polygonOptions);

                    // Initiate polyline.
                    scope.polygon.setMap(args.map);

                    // Hook all events fires from polygon.
                    for (var iEventId = 0; iEventId < events.length; iEventId++){
                        var pEvent = events[iEventId];
                        var szEventName = pEvent.name;
                        var szEventAlias = pEvent.alias;

                        scope.hookEvents(scope.polygon, szEventName, szEventAlias);
                    }
                });

                /*
                * Listen for directive property changes.
                * */
                scope.listenChanges = function (szPropertyName, szFunctionName) {
                    // Find the name of property.
                    scope.$watch(szPropertyName, function (current, past, internalScope) {
                        if (internalScope.polygon == null)
                            return;
                        internalScope.polygon[szFunctionName](current);
                    })

                };

                /*
                * Hook event and fires event from scope by using alias.
                * */
                scope.hookEvents = function(polygon, szEventName, szAlias){
                    // Catch drag start event.
                    vietbando.event.addListener(polygon, szEventName, function (parameter) {
                        // Raise event on scope.
                        scope[szAlias]({parameter: parameter});
                    });
                }
            },
            controller: ['$scope', function ($scope) {
            }]
        };
    });