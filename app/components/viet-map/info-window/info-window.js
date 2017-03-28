'use strict';

angular.module('viet-map')
    .directive('info-window', function () {
        return {
            restrict: 'E',
            template: '<div ng-transclude></div>',
            transclude: true,
            require: ['^vietMap', '?^marker'],
            scope: {

            },
            link: function (scope, element, attrs, mapController) {

            }
        };
    });