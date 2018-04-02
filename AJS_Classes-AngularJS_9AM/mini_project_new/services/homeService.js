app.service("homeService",homeService);
homeService.$inject=["$http","$localStorage"];

function homeService($http,$localStorage) {

    this.staticData = function () {
        return $http.post("/static",{"token":$localStorage.mini_project.data.token}).then(function (response) {
           return response.data.records;
        });
    };

    this.mongoData = function () {
        return $http.post("/mongo",{"token":$localStorage.mini_project.data.token}).then(function (response) {
            return response.data;
        });
    };
}