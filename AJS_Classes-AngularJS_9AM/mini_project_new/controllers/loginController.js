app.controller("loginController",loginController);
loginController.$inject=["$scope","loginService","$localStorage","$location"];
function loginController($scope,loginService,$localStorage,$location) {
    $scope.login_details=function (data) {
        loginService.authenticate(data).then(function (response) {
           if(response.data.login == "success"){
               $localStorage.mini_project = response;
               $location.path("/home");
           }else{
               alert("Invalid User Name and Password.");
           }
        });
    };
};