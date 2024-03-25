const fetch = require('node-fetch');
async function awaitcall1() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }

}
awaitcall1();

 async function awaitcall2() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  
  }
  awaitcall2();

  async function  concurrentRequests() {
    try {
      const [result01 , result02] =await promise.all([awaitcall1(),awaitcall2()]);
      
      console.log("call 01",result01);
      console.log("call 02",result02);
    } catch (error) {
      console.error('Error:', error);
    }
  
  }
  concurrentRequests();