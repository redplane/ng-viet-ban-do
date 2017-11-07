module.exports = function(ngModule){
  ngModule.controller('infoWindowTutorialController',
      function ($scope, showcaseService, anchorService) {

          //#region Properties

          // Information of directive.
          $scope.information = null;

          // Map configuration.
          $scope.map = {
              center: new vietbando.LatLng(10.8152328, 106.680505),
              zoom: 10
          };

          // Info window configuration.
          $scope.infoWindow = {
              position: new vietbando.LatLng(10.8152328, 106.680505),
              content: 'Hello'
          };

          //#endregion

          /*
           * Called when component has been initiated successfully.
           * */
          $scope.init = function () {
              // Load showcase information.
              $scope.loadInfo();
          };

          /*
          * Load information from service
          * */
          $scope.loadInfo = function(){
              showcaseService.getInfoWindowInfo()
                  .then(function (x) {

                      // Read the returned data.
                      var data = x.data;

                      // Read directives list.
                      $scope.information = data;
                  });
          };

          /*
          * Goto specific element on page.
          * */
          $scope.gotoElement = function(elementId){
              anchorService.gotoElement(elementId);
          }
      });
};