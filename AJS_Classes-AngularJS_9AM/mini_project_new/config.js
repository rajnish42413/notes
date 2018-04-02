app.run(run).config(config);
run.$inject=["$rootScope","$localStorage","$location"];
function run($rootScope,$localStorage,$location) {
    $rootScope.$on("$stateChangeStart",function (event, fromState,fromParams,toState,toParams) {
        if(!$localStorage.mini_project){
            $location.path("/login");
        }
    });
}

config.$inject=["$stateProvider","$urlRouterProvider"];
function config($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");

    $stateProvider.state("login",{
        url:"/login",
        templateUrl:"templates/login.html",
        controller:"loginController"
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
        .state("home.mongo",{
            url:"/mongo",
            templateUrl:"templates/mongo.html",
            controller:"mongoController"
        });
}