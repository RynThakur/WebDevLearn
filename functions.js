function addnums(n){
    let ans=0;
    for(let i=1; i<n; i++){
        ans+=i;
    }
    return ans;
}
console.log(addnums(50));


//call back fn
function square(n){
    return n*n;
}
function sumofsq(a,b){
    const val1= square(a);
    const val2 = square(b);

    return val1+val2;
} // this is not a call back yet, it is just the build up to show the use case of call back fns
console.log("sun of squares of 2 and 2", sumofsq(2,2));

// the sqaure and sum of square fn is fine but let's add a similar thing for cube.

function cube(n){
    return n*n*n;
}
function sumofcb(a,b){
    const val1=cube(a);
    const val2=cube(b);

    return val1+val2;
}
console.log("sum of cubes of 3 and 3",sumofcb(3,3));

// here the functions sumofsq and sumofcb are correct in themselves but, there is repetion for very similar logic, we can use call backs here and send square or cube function as a call back argument to the sum function according to our desire.

function sumofsomething(a,b,fn){
    const val1 = fn(a);
    const val2 = fn(b);
    return val1+val2;
}
// for squares:
console.log("sum of squares of 2 and 3: ",sumofsomething(2,3,square));
//for cubes:
console.log("sum of cubes of 2 and 3: ",sumofsomething(2,3,cube));

//anonymous functions - basically function with no name

const ans = sumofsomething(a,b,function(n){
    return a*4;
}) // here the function is natively implemented in the arguments of a fn, so this function is called anonymous fn and anonymous function can have a name but it cannot be called anywhere else beacause of scope issues. 

