app.service("loginService",loginService);
loginService.$inject=["$http"];
function loginService($http) {
    this.authenicate = function (data) {
       return $http.post("/login/authenicate",data).then(function (res) {
           return res;
       });
    };
};