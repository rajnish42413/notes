app.config(config);
function config($stateProvider,$urlRouterProvider){
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
    
    .state("home.about",{
        url:"/about",
        templateUrl:"templates/about.html",
        controller:"aboutController"
    })
    
    .state("home.contact",{
        url:"/contact",
        templateUrl:"templates/contact.html",
        controller:"contactController"
    })
    .state("home.portfolio",{
        url:"/portfolio",
        templateUrl:"templates/portfolio.html",
        controller:"portfolioController"
    });
}