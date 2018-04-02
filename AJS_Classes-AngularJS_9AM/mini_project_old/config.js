app.config(config);
config.$inject=["$stateProvider","$urlRouterProvider"];
function config($stateProvider,$urlRouterProvider){
    $stateProvider.state("login",{
       url:"/login",
        templateUrl:"templates/login.html",
        controller:"loginController"
    })
        .state("register",{
            url:"/register",
            templateUrl:"templates/register.html",
            controller:"registerController"
        })

        .state("home",{
            url:"/home",
            templateUrl:"templates/home.html",
            controller:"homeController"
        })

        .state("home.static",{
            url:"/static",
            templateUrl:"templates/static.html",
            controller:"staticController"
        })

        .state("home.mysql",{
            url:"/mysql",
            templateUrl:"templates/mysql.html",
            controller:"mysqlController"
        })

        .state("home.mongodb",{
            url:"/mongodb",
            templateUrl:"templates/mongo.html",
            controller:"mongoController"
        });

        $urlRouterProvider.otherwise("/login");
}