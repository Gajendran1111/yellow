// call back 

function box1 (callback){
    setTimeout(() => {
        console.log("loading");  
       callback()
    }, 5000);
}
function box2 (callback){
    setTimeout(() => {
        console.log("loading successful");
        callback()
    }, 500);
}
// box2(box1);
function box3(callback){
    setTimeout(() => {
        console.log("finish");
        
    }, 1000);
} 

box1(()=>{
    box2(()=>{
        box3()
    })
})