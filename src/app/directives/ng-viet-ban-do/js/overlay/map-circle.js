'use strict';

angular.module('ng-viet-ban-do')
    .directive('mapCircle', function () {
        return {
            restrict: 'E',
            require: '^ngVietMap',
            scope: {
                center: '=?',
                fillColor: '=?',
                fillOpacity: '=?',
                strokeColor: '=?',
                strokeOpacity: '=?',
                strokeWidth: '=?',
                visible: '=?',
                zIndex: '=?',
                radius: '=?',

                // Event listeners
                click: '&',
                doubleClick: '&',
                rightClick: '&',
                dragStart: '&',
                drag: '&',
                dragEnd: '&',
                mouseOver: '&',
                mouseOut: '&',
                mouseMove: '&',
                mouseDown: '&',
                mouseUp: '&',
                centerChanged: '&',
                radiusChanged: '&'
            },
            link: function (scope, element, attrs, controller) {

                // List of properties which should be listened for changes.
                var properties = [
                    {name: 'center', function: 'setCenter', default: null},
                    {name: 'fillColor', function: 'setFillColor', default: 'black'},
                    {name: 'fillOpacity', function: 'setFillOpacity', default: 0.5},
                    {name: 'strokeColor', function: 'setStrokeColor', default: true},
                    {name: 'strokeOpacity', function: 'setStrokeOpacity', default: 0.5},
                    {name: 'strokeWidth', function: 'setStrokeWidth', default: 1},
                    {name: 'visible', function: 'setVisible', default: true},
                    {name: 'zIndex', function: 'setZIndex', default: 1},
                    {name: 'radius', function: 'setRadius', default: 500}
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
                    {name: 'mouseup', alias: 'mouseUp'},
                    {name: 'bounds_changed', alias: 'boundsChanged'}
                ];

                /*
                 * This event is fired when map has been initiated and is ready.
                 * */
                scope.$on('map-is-ready', function (event, args) {

                    // Initiate circle.
                    var options = new vietbando.CircleOptions();
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
                    // Initiate circle which will be attached into map.
                    scope.circle = new vietbando.Circle(options);
                    //scope.circle.setMap(args.map);

                    // Listen to events list.
                    for (var iEventId = 0; iEventId < events.length; iEventId++) {
                        var pEvent = events[iEventId];
                        var szEventName = pEvent.name;
                        var szAlias = pEvent.alias;

                        scope.hookEvents(scope.circle, szEventName, szAlias);
                    }
                });

                /*
                 * Listen to property changes.
                 * */
                scope.listenChanges = function (szPropertyName, szFunctionName) {
                    // Find the name of property.
                    scope.$watch(szPropertyName, function (current, past, internalScope) {
                        if (internalScope.circle == null)
                            return;

                        internalScope.circle[szFunctionName](current);
                    })

                };

                /*
                 * Listen to events.
                 * */
                scope.hookEvents = function(circle, szEventName, szAlias){
                    // Catch drag start event.
                    vietbando.event.addListener(circle, szEventName, function (parameter) {
                        // Raise event on scope.
                        scope[szAlias]({parameter: parameter});
                    });
                }
            },
            controller: ['$scope', function ($scope) {
            }]
        };
    });