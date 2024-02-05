//Anonymous function 
var greet = function() {
    console.log("Hii");
}
greet();

//Arguments to anonymous function
var g=function(platform) {
    console.log("Hello" , platform);
}
g();

//Anonymous functions as callback function using set time out
setTimeout (function()
{
console.log("Welcome");
},1500);