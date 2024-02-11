async function myDisplay() {
    let myPromise = new Promise(function(resolve) //Error occurs due to absence of reject.
    {
      resolve("Good Morning");
    });
    document.getElementById("demo").innerHTML = await myPromise;
  }
  
  myDisplay();