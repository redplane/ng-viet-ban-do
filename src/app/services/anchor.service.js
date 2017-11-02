/**
 * Created by LinhND20 on 6/29/2017.
 */
module.exports = function (ngModule) {
    ngModule.service('anchorService',
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
        });
};
