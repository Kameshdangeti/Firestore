const XMLHttpRequest = require()

  let url = "https://github.com/Kameshdangeti";
  function makeAJAXCall(methodType, url, callback){
    const xhr = new XMLHttpRequest()
    xhr.open(methodType, url, true);
    xhr.onreadystatechange = function(){
      if (xhr.readyState === 4 && xhr.status === 200){
        callback(xhr.response);
      }
    }

    xhr.send();
    console.log("request sent to the server");
  }

  // callback function
  function logUser(data){
    console.log(data)
  }
  makeAJAXCall("GET", url, logUser);