app.service("loginService",loginService);
function loginService($http){
    this.authenticate = function(obj){
        return $http.post("http://localhost:8080/login",obj).then(function(posRes){
            return posRes;
        },function(errRes){
            return errRes;
        });
    };
};