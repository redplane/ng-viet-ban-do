module.exports = function (ngModule) {
    ngModule.controller('MainComponentController',
        function ($scope, showcaseService) {

            //#region Properties

            // List of directives information.
            $scope.directives = null;

            //#endregion

            /*
             * Called when component has been initiated successfully.
             * */
            $scope.init = function () {
                showcaseService.getDirectivesList()
                    .then(function (x) {

                        // Read the returned data.
                        var data = x.data;

                        // Read directives list.
                        $scope.directives = data.directives;
                    });
            }

        });
};