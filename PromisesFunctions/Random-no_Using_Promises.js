const myPromise = new Promise((resolve, reject) => {
    const randomNum = Math.floor(Math.random(2) * 10);
    if (randomNum % 2 === 0) 
    {
      resolve(randomNum);
    } else {
      reject('Error: Random number is odd');
    }
  });
  
  myPromise
    .then((result) => console.log(result))
    .catch((error) => console.log(error));