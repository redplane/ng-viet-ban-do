// Export module settings.
module.exports = function(ngModule){

    // Controllers import.
    require('./basic-map/basic-map.controller')(ngModule);
    require('./basic-marker/basic-marker.controller')(ngModule);
    require('./custom-marker/custom-marker.controller')(ngModule);
    require('./info-window/info-window.controller')(ngModule);
    require('./main/main.controller')(ngModule);
    require('./map-circle/map-circle.controller')(ngModule);
    require('./map-polygon/map-polygon.controller')(ngModule);
    require('./map-polyline/map-polyline.controller')(ngModule);
    require('./map-rectangle/map-rectangle.controller')(ngModule);

    // Routes import.
    require('./basic-map/basic-map.route')(ngModule);
    require('./basic-marker/basic-marker.route')(ngModule);
    require('./custom-marker/custom-marker.route')(ngModule);
    require('./info-window/info-window.route')(ngModule);
    require('./main/main.route')(ngModule);
    require('./map-circle/map-circle.route')(ngModule);
    require('./map-polygon/map-polygon.route')(ngModule);
    require('./map-polyline/map-polyline.route')(ngModule);
    require('./map-rectangle/map-rectangle.route')(ngModule);
    
};