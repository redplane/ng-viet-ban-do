'use strict';

angular.module('ng-viet-ban-do')
    .directive('infoWindow', function () {
        return {
            restrict: 'E',
            template: '<div ng-transclude></div>',
            transclude: true,
            require: ['^ngVietMap', '?^mapMarker'],
            scope: {
                content: '@',
                autoPan: '=',
                pixelOffset: '=',
                position: '=',
                zIndex: '=',
                attachToMarker: '=',

                closeClick: '&',
                contentChanged: '&',
                positionChanged: '&',
                zIndexChanged: '&'
            },
            link: function (scope, element, attrs, controller) {

                // List of properties which should be listened for changes.
                var properties = [
                    {name: 'content', function: null, default: null},
                    {name: 'autoPan', function: null, default: null},
                    {name: 'pixelOffset', function: 'setDraggable', default: null},
                    {name: 'position', function: 'setCursor', default: null},
                    {name: 'zIndex', function: 'setPosition', default: null},
                    {name: 'attachToMarker', function: null, default: false}
                ];
                /*
                 * Events list and their alias
                 * */
                var events = [
                    {name: 'closeclick', alias: 'closeClick'},
                    {name: 'content_changed', alias: 'contentChanged'},
                    {name: 'position_changed', alias: 'positionChanged'},
                    {name: 'zindex_changed', alias: 'zIndexChanged'}
                ];

                /*
                 * This event is fired when map has been initiated and is ready.
                 * */
                scope.$on('map-is-ready', function (event, args) {

                    // Initiate infoWindow.
                    var options = new vietbando.InfoWindowOptions();
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
                    
                    // Initiate infoWindow which will be attached into map.
                    scope.infoWindow = new vietbando.InfoWindow(options);

                    // Listen to events list.
                    for (var iEventId = 0; iEventId < events.length; iEventId++) {
                        var pEvent = events[iEventId];
                        var szEventName = pEvent.name;
                        var szAlias = pEvent.alias;

                        scope.hookEvents(scope.infoWindow, szEventName, szAlias);
                    }

                    if (!scope.attachToMarker)
                        scope.infoWindow.open(args.map);
                    else{
                        if (scope.marker != null){
                            scope.infoWindow.open(args.map, scope.marker);
                        }
                    }
                });

                /*
                * This event is fired when marker is ready.
                * */
                scope.$on('marker-is-ready', function (event, args) {
                    if (scope.infoWindow == null)
                        return;

                    scope.marker = args.marker;
                });

                /*
                 * Listen to property changes.
                 * */
                scope.listenChanges = function (szPropertyName, szFunctionName) {
                    // Find the name of property.
                    scope.$watch(szPropertyName, function (current, past, innerScope) {
                        if (innerScope.infoWindow == null)
                            return;

                        innerScope.infoWindow[szFunctionName](current);
                    })

                };

                /*
                 * Listen to events.
                 * */
                scope.hookEvents = function(infoWindow, szEventName, szAlias){
                    // Catch drag start event.
                    vietbando.event.addListener(infoWindow, szEventName, function (parameter) {
                        // Raise event on scope.
                        scope[szAlias]({parameter: parameter});
                    });
                }
            },
            controller: ['$scope', function ($scope) {
                $scope.infoWindow = new vietbando.InfoWindow();
            }]
        };
    });