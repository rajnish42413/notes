app.controller("aboutController",aboutController);
function aboutController($scope,homeService){
    homeService.getStaticData().then(function(res){
        $scope.result = res;
    });
}