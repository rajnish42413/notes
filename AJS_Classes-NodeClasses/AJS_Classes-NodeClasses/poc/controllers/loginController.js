app.controller("loginController",loginController);
function loginController($scope,loginService,$localStorage,$location) {
    $scope.obj = {};
    $scope.login = function () {
          loginService.authenticate($scope.obj).then(function (res) {
            if(res.data.login == "success"){
                $localStorage.poc = res;
                $location.path("/home");
            }else{
                alert("Login Fail !");
            }
          });
    };
}