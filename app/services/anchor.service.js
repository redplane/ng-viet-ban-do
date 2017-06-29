/**
 * Created by LinhND20 on 6/29/2017.
 */
angular.module('showcaseModule')
    .service('anchorService', [
        '$location', '$anchorScroll',
        function ($location, $anchorScroll) {

            //#region Methods

            /*
             * Go to an element.
             * */
            this.gotoElement = function (elementId) {
                // set the location.hash to the id of
                // the element you wish to scroll to.
                $location.hash(elementId);

                // call $anchorScroll()
                $anchorScroll();
            };

            //#endregion
        }]);