function divideNumbers(a, b) 
{
    try 
    {
      if (b == 0)
      {
        throw new Error("Cannot divide by zero"); 
      }
      const result = a / b;
      console.log("Result:", result);
    }
    catch (error) 
    {
      console.error("Error:", error.message); 
    } 
    finally 
    {
      console.log("This code will always execute, regardless of errors.");
    }
  }
