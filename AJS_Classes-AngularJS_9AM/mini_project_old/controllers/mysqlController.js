app.controller("mysqlController",mysqlController);
mysqlController.$inject=["$scope","homeService"];
function mysqlController($scope,homeService) {
    homeService.readMysql().then(function (response) {
        $scope.mysql=response;
    });
}