let promise = new Promise(function(resolve,reject){
    const x = "PromiseFunction";
    const y = "PromiseFunctions"
    if (x===y) 
    {
        resolve();
    }
     else 
     {
        reject();
    }
});
promise.then(function(){
    console.log("Both are same");
}).
catch(function(){
    console.error("Error! , Both are not same");
});