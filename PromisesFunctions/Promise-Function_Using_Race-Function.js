const promise1 = new Promise((resolve, reject) => reject('promise1 failure'));
const promise2 = new Promise((resolve, reject) => resolve('promise2 success'));
const promise3 = new Promise((resolve, reject) => resolve('promise3 success'));

Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log('resolved', result);
  })
  .catch((error) => {
    console.log('rejected', error); // rejected promise1 failure
  });