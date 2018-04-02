app.controller("mongoController",mongoController);
mongoController.$inject=["$scope","homeService"];
function mongoController($scope,homeService) {
    homeService.mongoData().then(function (response) {
        $scope.mongo = response;
    })
}