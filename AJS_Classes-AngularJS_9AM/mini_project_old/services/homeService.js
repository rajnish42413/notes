app.service("homeService",homeService);
homeService.$inject=["$http","$localStorage"];
function homeService($http,$localStorage) {

    var token = $localStorage.my_project.data.token;
    console.log(token);

    this.readStatic = function () {

        return $http.get("/static").then(function (response) {
            return response;
        });
    };

    this.readMysql = function () {

        return $http.get("/mysql").then(function (response) {
            return response;
        });
    };

    this.readMongo = function () {

        return $http.get("/mongodb").then(function (response) {
            return response;
        });
    };
}