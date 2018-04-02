app.controller("loginController",loginController);
function loginController($scope,$localStorage,$location,loginService){
    $scope.obj={};
    $scope.login_details = function(){
        loginService.authenticate($scope.obj).then(function(res){
            if(res.data.login=="success"){
                $localStorage.poc=res;
                $location.path("/home/about");
            }else{
                alert("Invalid Details !");
            }
        });
    };
};