const fetch = require('node-fetch');
const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];
async function parallelcalls(urls){
    try {
        const promises = urls.map(url => fetch(url));

        const responses = await Promise.all(promises);
        const responseData = await Promise.all(responses.map(response => response.json()));
        console.log(responseData);
    } catch (error) {
        console.error('Error:', error);
    }
}
parallelcalls();