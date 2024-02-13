class NotPromise 
{
    constructor(executor) 
    {
      executor(
        (value) => console.log("Resolved", value),
        (reason) => console.log("Rejected", reason),
         );
    }
}
  
  const { promise, resolve, reject } = Promise.withResolvers.call(NotPromise);
  resolve("hello");