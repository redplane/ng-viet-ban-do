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
                    {name: 'path', function: 'setPath'},
                    {name: 'strokeColor', function: 'setStrokeColor'},
                    {name: 'strokeOpacity', function: 'setStrokeOpacity'},
                    {name: 'strokeWidth', function: 'setStrokeWidth'},
                    {name: 'visible', function: 'setVisible'},
                    {name: 'drawArrows', function: 'setDrawArrows'},
                    {name: 'draggable', function: null},
                    {name: 'repeatArrow', function: null},
                    {name: 'widthArrow', function: null}
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
                });

                scope.listenChanges = function (szPropertyName, szFunctionName) {
                    // Find the name of property.
                    scope.$watch(szPropertyName, function (current, past, internalScope) {
                        if (internalScope.polyline == null)
                            return;
                        scope.polyline[szFunctionName](current);
                    })

                };

                scope.checkData = function (a, b, c) {
                }
            },
            controller: ['$scope', function ($scope) {
            }]
        };
    });