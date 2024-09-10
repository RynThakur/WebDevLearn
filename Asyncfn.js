function findsum(n){
    let ans=0;
    for(let i=0; i<n; i++){
        ans+=i;
    }
    return ans;
}
function FindSumTill100(){
    console.log(findsum(100));
}

setTimeout(FindSumTill100,1000); // setTimeout function is provided by js, when the control comes to the setTimeout function it gets 2 args, the function and the time(in milliseconds), the setTimeout function instead of waiting at there, moves to the further part of the code and runs the function specified to it after the speicified time which in this case is 1000ms or 1s.
console.log("hello world");

// fs.read another async fn

const fs = require("fs");

fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
})
console.log("this will run first"); //this will run before the file read cuz file read is an async fn.

// now even if i add an useless loop after the readfile action, it will still complete the loop -> console log this will run first and then go again to the call back queue or then it will console.log(Data).
// visuzalize it on latentflip.loupe