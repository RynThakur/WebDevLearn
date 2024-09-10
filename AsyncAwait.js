//no callbacks no .then syntax

function sayHello(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            console.log("HI THERE");
        },5000)
    });
    return p;
}

async function main(){
    let value = await sayHello(); // thread waits here
    console.log(value);
}
// await can only be used inside and async fn
main();
console.log("this will get logged first") // this will get logged first cuz await is used in main