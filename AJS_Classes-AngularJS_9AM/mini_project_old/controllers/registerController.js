app.controller("registerController",registerController);
registerController.$inject=["$scope","registerService"];
function registerController($scope,registerService) {
    $scope.register = function (data) {
        registerService.register(data).then(function (response) {
           console.log(response);
        });
    };
};