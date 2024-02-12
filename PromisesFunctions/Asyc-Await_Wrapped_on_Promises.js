const Req = () => {
    return new Promise((resolve) => {
      return resolve({ answer: 42 });
    });
  }
  
  const run = () => {
    Req().then((response) => {
      console.log(response);
    });
  }
  
  const runAsAsyncAwait = async () => {
    const response = await Req();
    console.log(response);
  }