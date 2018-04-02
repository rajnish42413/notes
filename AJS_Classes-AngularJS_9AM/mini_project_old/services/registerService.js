app.service("registerService",registerService);
registerService.$inject=["$http"];
function registerService($http) {
    this.register = function (data) {
        return $http.post("/register",data).then(function (response) {
           return response;
        });
    };
};