// Functions
// 1. Function Declaration
// 2. Function Expression
// 3. Arrow Function
// 4. Callback Function



// Parameter Function
function add(a,b){
    console.log(a+b);
}
// NOT Parameter Funciton
function greeting(){
    console.log("Hello JavaScript");
}

// Arrow Function
let square=(num)=>{
   console.log("Square of Number is "+num*num);
}

let multiply=(x,y)=>{
    return x*y;
}
console.log(multiply(4,7));
greeting();
add(2,7);
square(5);