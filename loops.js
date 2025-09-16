// for loop 

// syntax
//for(initialization ,condition ,iteration){};

for(let a = 1; a<=5;a++){
    console.log("java");
}

// while loop 

// syntax 
// initialization
// while(condition){
// console.log
// iteration
// }


let b = 1;
while (b <= 5){
    console.log(b);
    b++
}

// do while 

// syntax
// initilization 
// do {
// log()
// iteration
// }while(condition)

let c = 1;
do{
    console.log(c);
    c++
}while (c<=5)


// for of

let arr = ["java",5464,545.55,true,null]

for(sap of arr){
    console.log(sap);
    
}


// for in 

let obj ={
    name : "trend",
    place : "anna nagar",
    city : "chennai",
    num : 6544
}

for (splt in obj){
    console.log(splt+" : "+obj[splt]);
    
}