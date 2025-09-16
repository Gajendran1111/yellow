// function 
// syntax 

// function name (){}

function fun (){
var a = 10;
var a = 20;
console.log(a);

let b = 30;
b = 40;
console.log(b);

const c = 50;
console.log(c);

}
fun();

// Function  statement Declaration  --parameter & argument

function  box1 (par){
    console.log(par)
}
box1("hello");
// Function Expression or Anonymous Function

let funt = function box2 (hi){
    console.log(hi);
    
}
funt("world");

let funts = function (hi){
    console.log(hi);
    
}
funts("world");
// Immediate Invoke Function expression 

(function(iife){
    console.log(iife);
    
})
("function");
// Arrow Function

// syntax 
// ()=>{}

    let aro = (js)=>{console.log(js)}
    aro("arrow function");