async function iterateWithAsyncAwait (){
var arr = [5,4 ,7,8];
for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    setTimeout(() => {
        console.log(value);
    }, 1000);
}
}
iterateWithAsyncAwait();