app.controller("homeController",homeController);
homeController.$inject=["$scope","$location","$localStorage"];
function homeController($scope,$location,$localStorage) {
    $scope.logout = function () {
        delete $localStorage.mini_project;
        $location.path("/login");
    };
};