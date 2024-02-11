const promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
     const sum = 4 + 5;
     resolve({
      a: 4,
      b: 5,
      sum
     });
    }, 2000);
   });
   
   promise.then(function(result) {
    console.log(result);
   }).catch(function(error) {
    console.log(error);
   });