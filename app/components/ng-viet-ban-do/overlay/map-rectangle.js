'use strict';

angular.module('ng-viet-ban-do')
    .directive('mapRectangle', function () {
        return {
            restrict: 'E',
            require: '^ngVietMap',
            scope: {
                bounds: '=?',
                fillColor: '=?',
                fillOpacity: '=?',
                strokeColor: '=?',
                strokeWidth: '=?',
                strokeOpacity: '=?',
                visible: '=?',
                zIndex: '=?',

                // Event listeners
                click: '&',
                doubleClick: '&',
                rightClick: '&',
                mouseOver: '&',
                mouseOut: '&',
                mouseMove: '&',
                mouseDown: '&',
                mouseUp: '&',
                boundsChanged: '&'
            },
            link: function (scope, element, attrs, controller) {

                // List of properties which should be listened for changes.
                var properties = [
                    {name: 'bounds', function: 'setBounds', default: null},
                    {name: 'fillColor', function: 'setFillColor', default: null},
                    {name: 'fillOpacity', function: 'setFillOpacity', default: null},
                    {name: 'strokeColor', function: 'setStrokeColor', default: true},
                    {name: 'strokeWidth', function: 'setStrokeWidth', default: false},
                    {name: 'strokeOpacity', function: 'setStrokeOpacity', default: null},
                    {name: 'visible', function: 'setVisible', default: true},
                    {name: 'zIndex', function: null, default: null}
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

                    // Initiate rectangle.
                    var options = new vietbando.RectangleOptions();
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

                    // Initiate rectangle which will be attached into map.
                    scope.rectangle = new vietbando.Rectangle(options);
                    scope.rectangle.setMap(args.map);

                    // Listen to events list.
                    for (var iEventId = 0; iEventId < events.length; iEventId++) {
                        var pEvent = events[iEventId];
                        var szEventName = pEvent.name;
                        var szAlias = pEvent.alias;

                        scope.hookEvents(scope.rectangle, szEventName, szAlias);
                    }
                });

                /*
                 * Listen to property changes.
                 * */
                scope.listenChanges = function (szPropertyName, szFunctionName) {
                    // Find the name of property.
                    scope.$watch(szPropertyName, function (current, past, internalScope) {
                        if (internalScope.rectangle == null)
                            return;

                        if (szPropertyName == 'bounds') {
                            try {
                                internalScope.rectangle[szFunctionName](current);
                            }
                            catch (exception){

                            }
                        } else {
                            internalScope.rectangle[szFunctionName](current);
                        }
                    })

                };

                /*
                 * Listen to events.
                 * */
                scope.hookEvents = function(rectangle, szEventName, szAlias){
                    // Catch drag start event.
                    vietbando.event.addListener(rectangle, szEventName, function (parameter) {
                        // Raise event on scope.
                        scope[szAlias]({parameter: parameter});
                    });
                }
            },
            controller: ['$scope', function ($scope) {
            }]
        };
    });