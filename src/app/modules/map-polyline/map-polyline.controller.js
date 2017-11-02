/**
 * Created by Linh Nguyen on 6/19/2017.
 */
module.exports = function (ngModule) {
    ngModule.controller('MapPolylineComponentController',
        function ($scope, showcaseService, anchorService) {

            //#region Properties

            // Information which will be displayed on screen.

            // Map configuration.
            $scope.map = {
                center: new vbd.LatLng(10.8152328, 106.680505),
                zoom: 10
            };

            // Polyline configuration.
            $scope.polyline = {
                path: null,
                strokeColor: 'red',
                strokeOpacity: 1,
                strokeWidth: 1,
                visible: true,
                drawArrows: true
            };

            //#endregion

            //#region Methods

            /*
             * Called when component has been initiated successfully.
             * */
            $scope.init = function () {

                var paths = [];
                paths.push(new vbd.LatLng(19.36297613334183, 105.435791015625)); // Nghe an
                paths.push(new vbd.LatLng(17.486911100806864, 106.6058349609375)); // Quang binh
                paths.push(new vbd.LatLng(16.056371485561684, 108.2098388671875)); // Da nang
                paths.push(new vbd.LatLng(12.297068292853808, 109.15191650390625)); // Khanh hoa
                paths.push(new vbd.LatLng(10.860281096281653, 106.754150390625)); // Sai gon
                paths.push(new vbd.LatLng(9.221404620134237, 105.1446533203125)); // Ca mau

                $scope.polyline.path = paths;

                // Load showcase information.
                $scope.loadInfo();
            };

            /*
             * Load component information.
             * */
            $scope.loadInfo = function () {
                showcaseService.getMapPolylineInfo()
                    .then(function (x) {

                        console.log(x.data);
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

