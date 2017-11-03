module.exports = function(ngModule){
  ngModule.constant('appStates', {
      basicMap: {
          url: '/basic-map',
          name: 'basic-map-tutorial'
      },
      basicMarker: {
          url: '/basic-marker',
          name: 'basic-marker-tutorial'
      },
      customMarker:{
          url: '/custom-marker',
          name: 'custom-marker-tutorial'
      },
      infoWindow:{
          url: '/info-window',
          name: 'info-window-tutorial'
      },
      main:{
          url: '/main',
          name: 'main'
      },
      mapCircle:{
          url: '/map-circle',
          name: 'map-circle-tutorial'
      },
      mapPolygon:{
          url: '/map-polygon',
          name: 'map-polygon-tutorial'
      },
      mapPolyline:{
          url: '/map-polyline',
          name: 'map-polyline-tutorial'
      },
      mapRectangle:{
          url: '/map-rectangle',
          name: 'map-rectangle-tutorial'
      }
  });
};