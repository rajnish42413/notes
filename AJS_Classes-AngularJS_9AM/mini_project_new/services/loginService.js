app.service("loginService",loginService);
loginService.$inject=["$http"];
function loginService($http) {
    this.authenticate=function (data) {
        return $http.post("/login",data).then(function (response) {
            return response;
        });
    };
};