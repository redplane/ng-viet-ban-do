'use strict';

angular.module('ng-viet-ban-do')
    .directive('ngVietMap', function () {
        return {
            restrict: 'E',
            template: '<div class="map-layout" ng-transclude></div>',
            transclude: true,
            scope: {
                backgroundColor: '=?',
                center: '=',
                layer: '=',
                disableDoubleClickZoom: '=?',
                scrollWheel: '=?',
                limitBounds: '=?',
                mapTypeId: '=?',
                minZoom: '=?',
                maxZoom: '=?',
                zoom: '=?',
                isMoveInsert: '=?',
                extendTile: '=?',
                zoomControl: '=?',
                scaleControl: '=?',

                // Event listeners
                click: '&',
                doubleClick: '&',
                rightClick: '&',
                zoomStart: '&',
                zoomEnd: '&',
                dragStart: '&',
                drag: '&',
                dragEnd: '&',
                mapTypeIdChanged: '&',
                mouseOver: '&',
                mouseOut: '&',
                centerChanged: '&',
                zoomChanged: '&',
                resize: '&',
                boundChange: '&'
            },
            link: function (scope, element, attrs, controller) {

                // List of properties which should be listened for changes.
                var properties = [
                    {name: 'backgroundColor', function: null, default: null},
                    {name: 'center', function: 'setCenter', default: null},
                    {name: 'layer', function: null, default: null},
                    {name: 'disableDoubleClickZoom', function: null, default: null},
                    {name: 'scrollWheel', function: null, default: null},
                    {name: 'limitBounds', function: 'restrictBounds', default: null},
                    {name: 'mapTypeId', function: 'setMapTypeId', default: null},
                    {name: 'minZoom', function: null, default: null},
                    {name: 'maxZoom', function: null, default: null},
                    {name: 'zoom', function: 'setZoom', default: null},
                    {name: 'isMoveInsert', function: null, default: null},
                    {name: 'extendTile', function: null, default: true},
                    {name: 'zoomControl', function: null, default: true},
                    {name: 'scaleControl', function: null, default: true}
                ];

                /*
                 * Events list and their alias
                 * */
                var events = [
                    {name: 'click', alias: 'click'},
                    {name: 'dblclick', alias: 'doubleClick'},
                    {name: 'rightclick', alias: 'rightClick'},
                    {name: 'zoomstart', alias: 'zoomStart'},
                    {name: 'zoomend', alias: 'zoomEnd'},
                    {name: 'dragstart', alias: 'dragStart'},
                    {name: 'drag', alias: 'drag'},
                    {name: 'dragEnd', alias: 'dragEnd'},
                    {name: 'maptypeid_changed', alias: 'mapTypeIdChanged'},
                    {name: 'mouseover', alias: 'mouseOver'},
                    {name: 'mouseout', alias: 'mouseOut'},
                    {name: 'center_changed', alias: 'centerChanged'},
                    {name: 'zoom_changed', alias: 'zoomChanged'},
                    {name: 'resize', alias: 'resize'},
                    {name: 'boundchange', alias: 'boundChange'}
                ];

                /*
                 * This event is fired when map has been initiated and is ready.
                 * */
                angular.element(document).ready(function () {

                    // Initiate marker.
                    var options = new vietbando.MapOptions();
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

                    // Find the map-layout inside component and initiate a map on it.
                    var elementChildren = element[0].getElementsByClassName('map-layout');
                    if (elementChildren == null || elementChildren.length < 1 || elementChildren[0] == null)
                        return;

                    // Initiate map.
                    var map = new vietbando.Map(elementChildren[0], options);
                    scope.map = map;

                    // Listen to events list.
                    for (var iEventId = 0; iEventId < events.length; iEventId++) {
                        var pEvent = events[iEventId];
                        var szEventName = pEvent.name;
                        var szAlias = pEvent.alias;

                        scope.hookEvents(scope.marker, szEventName, szAlias);
                    }

                    // Broadcast to all children that map is ready.
                    scope.$broadcast('map-is-ready', {map: map});
                });

                /*
                 * Listen to property changes.
                 * */
                scope.listenChanges = function (szPropertyName, szFunctionName) {
                    // Find the name of property.
                    scope.$watch(szPropertyName, function (current, past, innerScope) {
                        if (innerScope.marker == null)
                            return;

                        innerScope.marker[szFunctionName](current);
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