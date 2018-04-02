app.controller("contactController",contactController);
function contactController($scope,homeService){
    homeService.getMySQLData().then(function(res){
        $scope.result = res;
    });
}