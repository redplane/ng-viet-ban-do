/**
 * Created by LinhND20 on 6/26/2017.
 */

/*
 * Service which handles directives configuration.
 * */
angular.module('showcaseModule')
    .service('showcaseService', ['$http', function ($http) {

        /*
         * Get directives list from configuration files.
         * */
        this.getDirectivesList = function () {
            return $http.get('/assets/data/directives-list.json');
        };

        /*
         * Get basic map showcase information.
         * */
        this.getBasicMapInfo = function () {
            return $http.get('/assets/data/parameter-config/basic-map.json');
        };

        /*
         * Get basic marker showcase information.
         * */
        this.getBasicMarkerInfo = function () {
            return $http.get('/assets/data/parameter-config/basic-marker.json');
        };

        /*
         * Get custom marker showcase information.
         * */
        this.getCustomMarkerInfo = function () {
            return $http.get('/assets/data/parameter-config/custom-marker.json');
        };

        /*
         * Get info-window information.
         * */
        this.getInfoWindowInfo = function () {
            return $http.get('/assets/data/parameter-config/info-window.json');
        };

        /*
         * Get map polyline information.
         * */
        this.getMapPolylineInfo = function () {
            return $http.get('/assets/data/parameter-config/map-polyline.json');
        };

        /*
         * Get map polygon information.
         * */
        this.getMapPolygonInfo = function () {
            return $http.get('/assets/data/parameter-config/map-polygon.json');
        };

        /*
         * Get map rectangle information.
         * */
        this.getMapRectangleInfo = function () {
            return $http.get('/assets/data/parameter-config/map-rectangle.json');
        };

        /*
         * Get map circle information.
         * */
        this.getMapCircleInfo = function () {
            return $http.get('/assets/data/parameter-config/map-circle.json');
        }
    }]);