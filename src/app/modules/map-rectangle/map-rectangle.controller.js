/**
 * Created by Akai on 6/19/2017.
 */
module.exports = function (ngModule) {
    ngModule.controller('MapRectangleComponent',
        function ($scope, showcaseService, anchorService) {

            //#region Properties

            // Information of page.
            $scope.information = null;

            // Map configuration.
            $scope.map = {
                center: new vietbando.LatLng(10.8152328, 106.680505),
                zoom: 8
            };

            // Rectangle configuration.
            $scope.rectangle = {
                bounds: new vbd.LatLngBounds(new vietbando.LatLng(10.970516, 106.408081), new vbd.LatLng(12.229635, 108.858032)),
                draggable: true,
                fillColor: 'blue',
                fillOpacity: 1,
                strokeColor: 'green',
                strokeWidth: 1,
                strokeOpacity: 1,
                visible: true
            };

            //#endregion

            //#region Methods

            /*
             * Called when component has been initiated successfully.
             * */
            $scope.init = function () {
                // Load information.
                $scope.loadInfo();
            };

            /*
             * Load information to be displayed on page.
             * */
            $scope.loadInfo = function () {
                showcaseService.getMapRectangleInfo()
                    .then(function (x) {
                        $scope.information = x.data;
                    });
            };

            /*
            * Go to specific element.
            * */
            $scope.gotoElement = function (elementId) {
                anchorService.gotoElement(elementId);
            };

            //#endregion
        });
};

