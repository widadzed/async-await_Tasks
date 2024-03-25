const fetch = require('node-fetch');
async function awaitcall() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }

}
awaitcall();

async function asyncFunction1() {
   
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    console.log("Async Function 1 executed");
}
async function asyncFunction2() {
    // Introduce a delay of 1 second using await
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Log a message
    console.log("Async Function 2 executed");
}
async function asyncFunction3() {
    // Introduce a delay of 1 second using await
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Log a message
    console.log("Async Function 3 executed");
}
async function chainedAsyncFunctions(){
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
}
chainedAsyncFunctions();