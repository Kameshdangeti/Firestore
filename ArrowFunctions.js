//Arrow Functions Without Parameter
const g=() => {
    console.log("Good Morning");
}
g();

//Arrow Functions with parameter
const f = (x,y,z) => {
    console.log(x+y+z);
}
f(10,20,30);

//Arrow Function with default parameters
const h = (x,y,z = 30) =>{
      console.log(x+" "+y+" "+z);
}
h(20,20);