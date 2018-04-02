app.controller("portfolioController",portfolioController);
function portfolioController($scope,homeService){
    homeService.getMongoDBData().then(function(res){
        $scope.result = res;
    });
}