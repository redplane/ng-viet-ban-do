/**
 * Created by Linh Nguyen on 6/19/2017.
 */

module.exports = function (ngModule) {
    ngModule.controller('mapCircleTutorialController',
        function ($scope, showcaseService, anchorService) {

            //#region Properties

            // Information which will be displayed on screen.
            $scope.information = null;

            // Map configuration.
            $scope.map = {
                center: vietbando.LatLng(10.8152328, 106.680505),
                zoom: 12
            };

            // Circle configuration.
            $scope.circle = {
                center: new vietbando.LatLng(10.8152328, 106.680505),
                fillColor: 'red',
                fillOpacity: 0.5,
                strokeOpacity: 1,
                strokeWidth: 1,
                visible: true,
                radius: 20000
            };

            //#endregion

            //#region Methods

            /*
             * Called when component has been initiated successfully.
             * */
            $scope.init = function () {
                $scope.loadInfo();
            };

            /*
             * Load information and bind 'em to screen.
             * */
            $scope.loadInfo = function () {
                showcaseService.getMapCircleInfo()
                    .then(function (x) {
                        $scope.information = x.data;
                    });
            };

            /*
            * Goto specific element on page.
            * */
            $scope.gotoElement = function (elementId) {
                anchorService.gotoElement(elementId);
            }

            //#endregion
        });
};
