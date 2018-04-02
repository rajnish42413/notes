app.controller("header",header);
header.$inject=["$scope"];
function header($scope) {
    $scope.logout=function () {
        console.log("Logged Out Successfully !");
    };
};