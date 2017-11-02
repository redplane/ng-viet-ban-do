module.exports = function(ngModule){
  ngModule.controller('CustomMarkerComponent',
      function ($scope, showcaseService, anchorService) {

          //#region Properties

          // Information of showcase.
          $scope.information = null;

          // Options of map.
          $scope.options = {
              backgroundColor: 'red',
              center: new vietbando.LatLng(10.8152328, 106.680505),
              layer: null,
              disableDoubleClickZoom: true,
              scrollWheel: true,
              limitBounds: null,
              mapTypeId: 'SATELLITE',
              minZoom: null,
              maxZoom: null,
              zoom: 10,
              isMoveInsert: false,
              extendTile: 0,
              zoomControl: false,
              scaleControl: false
          };

          // Special marker settings.
          $scope.specialMarker = {
              crossOnDrag: false,
              draggable: true,
              position: new vietbando.LatLng(10.8152328, 106.680505),
              content: '<div style="position: absolute; left: 0px; top: 0px; width: 45px; height: 45px; border: 1px solid rgb(0, 0, 0); border-top-left-radius: 30px; border-top-right-radius: 30px; border-bottom-right-radius: 30px; border-bottom-left-radius: 30px; opacity: 1; background-color: white;"><p style="text-align:center;">1</p></div>',
              icon: new vietbando.Icon({
                  size: new vietbando.Size(46, 46),
                  anchor: new vietbando.Point(23, 23)
              })
          };

          //#endregion

          //#region Methods

          /*
           * Called when component has been initiated successfully.
           * */
          $scope.init = function () {
              // Load showcase information.
              $scope.loadInfo();
          };

          /*
           * Load showcase information.
           * */
          $scope.loadInfo = function () {
              showcaseService.getCustomMarkerInfo()
                  .then(function (x) {
                      // Update information.
                      $scope.information = x.data;
                  });
          };

          /*
          * Go to specific element on page.
          * */
          $scope.gotoElement = function (elementId) {
              anchorService.gotoElement(elementId);
          }

          //#endregion
      });
};