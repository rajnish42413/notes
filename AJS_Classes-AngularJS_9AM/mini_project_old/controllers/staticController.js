app.controller("staticController",staticController);
staticController.$inject=["$scope","homeService"];
function staticController($scope,homeService) {
    homeService.readStatic().then(function (response) {
        $scope.static=response;
    });
}