module.exports = function(ngModule){
    // Import component template.
    var ngComponentTemplate = require('./navigation-bar.html');

    // Directive declaration.
    ngModule.directive('navigationBar', function () {
        return {
            restrict: 'EA',
            template: ngComponentTemplate,
            scope: null,
            link: function (scope, element, attrs, controller) {
            },
            controller: function ($scope) {
            }
        };
    });
};