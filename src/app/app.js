'use strict';

// Import css files.
require('bootstrap');
require('./assets/css/shop-homepage.css');
require('./assets/css/timeline.css');

// Import libraries.
var angular = require('angular');
require('@uirouter/angularjs');
require('angular-route');

// Plugins import.
require('./directives/ng-viet-ban-do/index.d');

// Module declaration.
var ngModule = angular.module('ng-viet-ban-do-tutorial', [
    'ngRoute',
    'ui.router',
    'ng-viet-ban-do'
]);

// Constants import.
require('./constants/index.d')(ngModule);

// Services import.
require('./services/index.d')(ngModule);

// Modules import.
require('./modules/index.d')(ngModule);

// Import routes.
require('./app.route')(ngModule);

