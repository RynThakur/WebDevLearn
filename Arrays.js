//PUSH-BACK
function pushExample(arr,element){
    console.log("Original Array: ",arr);
    arr.push(element);
    console.log("Array after push operation: ",arr);
}
pushExample([1,2,3],4);

//PUSH-FRONT
function pushfront(arr,element){
    console.log("Original Array: ",arr);
    arr.unshift(element);
    console.log("Array after push operation: ",arr);
}
pushfront([1,2,3],4);

//POP-BACK
function popback(arr){
    console.log("original Array: ",arr);
    arr.pop();
    console.log("array after pop opt: ",arr);
}
popback([1,2,3,4]);

//POP-FRONT
function popfront(arr){
    console.log("original Array: ",arr);
    arr.shift();
    console.log("Array after poping from front: ",arr);
}
popfront([1,2,3,4]);

//CONCAT
function concatarr(arr1, arr2){
    console.log("Arr1 before: ",arr1);
    console.log("concatination: ",arr1.concat(arr2));
}
concatarr([1,2,3,4],[5,6,7,8]);


//FOR-EACH -> IT IS A LOOPING TECHINUE 
function logthing(str){
    console.log(str);
} // we have to give a function as param to the foreach loop and the foreach loop applies the function to each and
//every element of the array.
// for example -> arr1.forEach(logthing) is equal to logthing(1),logthing(2),logthing(3),logthing(4)...
let arr1= [1,2,3,4,5,6,6,7,8];
arr1.forEach(logthing);