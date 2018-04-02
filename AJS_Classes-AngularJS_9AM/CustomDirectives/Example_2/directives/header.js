app.directive("header" , header);
function header() {
    return{
        restrict:'E',
        templateUrl:'templates/header.html',
        controller:'header'
    }
}