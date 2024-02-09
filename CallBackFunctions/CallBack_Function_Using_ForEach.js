var numbers = [1, 2, 3, 4, 5];

function mainFunction(callback) 
{
console.log("Task ongoing..");
numbers.forEach(callback); //using foreach loop
}
function callbackFunction(number) //Callback function
{
console.log("Res: " + number);
}

mainFunction(callbackFunction); //calling main function with callback function
