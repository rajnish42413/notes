app.controller("loginController",loginController);
loginController.$inject=["$scope","loginService","$localStorage","$sessionStorage","$location"];
function loginController($scope,loginService,$localStorage,$sessionStorage,$location) {
    $scope.login_details = function (data) {

        console.log(data);

        loginService.authenicate(data).then(function (response) {
            $localStorage.my_project=response; //AngularJS Storage
            if(response.data.login=="success"){
                $location.path("/home");
            }else{
                alert("Invalid Detials !");
            }
        });
    };
};