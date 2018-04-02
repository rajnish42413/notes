app.config(config);
function config($stateProvider,$urlRouterProvider){
    $stateProvider.state("login",{url:"/login",templateUrl:"templates/login.html",controller:"loginController"})
                  .state("home",{url:"/home",templateUrl:"templates/home.html",controller:"homeController"});
    $urlRouterProvider.otherwise('/login');
}