function getProduct(a, b) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(a * b);
      }, 1000);
    });
  }
  getProduct(2, 4)
  .then(function (result) {
    getProduct(result, 2)
      .then(function (finalResult) {
        console.log('final_result', finalResult);
      })
      .catch(function (error) {
        console.log(error);
      });
  })
  .catch(function (error) {
    console.log(error);
  });