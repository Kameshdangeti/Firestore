function mainFunction(callback) 
{
    console.log("Work is going on");
    setTimeout(function() 
    {
        callback("Work done");
    }, 1000);
}
    function callbackFunction(result) 
    {
    console.log("Result: " + result);
    }
    
    // Call the main function with the callback function
    mainFunction(callbackFunction);
    