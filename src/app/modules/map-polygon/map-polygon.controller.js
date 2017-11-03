/**
 * Created by Linh Nguyen on 6/19/2017.
 */
module.exports = function (ngModule) {
    ngModule.controller('mapPolygonTutorialController',
        function ($scope, showcaseService, anchorService) {

            //#region Properties

            // Information which will be displayed on the screen.
            $scope.information = null;

            // Map option.
            $scope.options = {
                backgroundColor: 'green',
                center: new vietbando.LatLng(10.8152328, 106.680505),
                layer: null,
                disableDoubleClickZoom: true,
                scrollWheel: true,
                limitBounds: null,
                mapTypeId: 0,
                minZoom: null,
                maxZoom: null,
                zoom: 10,
                isMoveInsert: false,
                extendTile: 0,
                zoomControl: false,
                scaleControl: false
            };

            // Polygon option
            $scope.polygon = {
                fillColor: 'yellow',
                fillOpacity: 1,
                paths: [
                    new vietbando.LatLng(10.823864119711999, 106.62918090820312),
                    new vietbando.LatLng(10.841061577718563, 106.64497375488281),
                    new vietbando.LatLng(10.827236248136629, 106.67964935302734),
                    new vietbando.LatLng(10.815096408251193, 106.67930603027344),
                    new vietbando.LatLng(10.80261883853781, 106.66488647460938),
                    new vietbando.LatLng(10.808689072388347, 106.63536071777344)
                ],
                zIndex: 100,
                visible: true
            };

            //#endregion

            //#region Methods

            /*
            * Called when component has been initiated successfully.
            * */
            $scope.init = function () {
                // Load information displayed on the screen.
                $scope.loadInfo();
            };

            /*
            * Load information which will be dis
            * */
            $scope.loadInfo = function () {
                showcaseService.getMapPolygonInfo()
                    .then(function (x) {
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