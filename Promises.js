// const fs = require("fs");

// //my own async fn using promise
// function myFileReader(){
//     console.log("inside my file reader");
//     return new Promise(function(resolve){
//         console.log("inside promise");
//         fs.readFile("a.txt","utf-8",function(err,data){
//             console.log("before resolve")
//             resolve(data);
//         })
//     })
// }
// // call back function to call after completing the async function
// function ondone(data){
//     console.log(data);
// }
// myFileReader().then(ondone);

var d = new Promise(function(resolve){
    setTimeout(function(){
        resolve("foo");
    },10000)
});
function callback(){
    console.log(d);
}
console.log(d); // this will print first and here the promise state is pending so this will print
// promise{ <pending> }

d.then(callback); // when then is called, it means the promise is resolved then the console.log inside the callback will be called and it will print promise { 'foo' }