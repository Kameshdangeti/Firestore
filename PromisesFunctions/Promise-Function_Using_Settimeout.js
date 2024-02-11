const promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
     const sum = 4 + 5 + 'a';
     if(isNaN(sum)) {
       reject('Error while calculating sum.');
     } else {
       resolve(sum);
     }
    }, 2000);
   });
   
   promise.then(function(result) 
   {
    console.log(result);
   }).catch(function(error) 
   {
    console.log(error);
   });