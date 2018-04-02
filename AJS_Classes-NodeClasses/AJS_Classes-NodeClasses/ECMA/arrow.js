/*
var my_fun = function () {
  document.write("Welcome to Anonymous Session !");
};

my_fun();
*/
/*
var my_fun = ()=>document.write("Welcome to Anonymous Functions !/ Arrow Functions !/Lamda Functions !");
my_fun();
*/
/*var my_fun = (x:number)=>{
    x+=100;
    document.write(""+x);
};

my_fun(100);*/
/*
var arrow_fun = (arg1:any):any=>{
    if(typeof arg1=="number"){
        return arg1;
    }else if(typeof arg1=="string"){
        return "string";
    }
};

document.write(arrow_fun(100));
document.write(arrow_fun("Hello"));*/
function my_fun(arg1, arg2) {
    document.write(arg1 + "<br>");
    document.write(arg2);
}
//my_fun("Hello_1");
my_fun("Hello_1", "Hello_2");
