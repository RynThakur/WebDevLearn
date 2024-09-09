//LENGTH
function getlength(str){
    console.log("Original string: ",str);
    console.log("Length: ",str.length); //function provided by js
}
getlength("aryan");

// INDEX OF
function findidx(str,target){
    console.log("original string: ",str);
    console.log("idx of the target: ",str.indexOf(target)); //function provided by js
    //if there are more than one instances of the target in the string and the idx of the last occ is req:
    //we can use str.lastIndexOf(taget);
}
findidx("aryan","y");

//SLICE
function getslice(str,start,end){
    console.log("original string: ",str);
    console.log("sliced string: ",str.slice(start,end)); // function provided by js
    //takes two args , starting idx and ending idx, note that "end" is the ending idx and not the length;
    //last idx is not included.
}
getslice("this is sliced string",8,14);

//REPLACE
function replaceString(str,target,replacement){
    console.log("original string: ",str);
    console.log("after replacemeent: ", str.replace(target,replacement));// function provided by js
    //takes two args, target to replace, "replacement string"
}
replaceString("Aryan","y","Y");

//SPLIT
function splitString(str,seperator){
    console.log("Original String: ",str);
    console.log("After Split: ",str.split(seperator)); // function provided by js
    //take one arg, "Seperator", seperates the element of the strings on the basis of the argument, returns an array of all the elements of the string which are seperated by the provided seperator. seperator->delimeter
}
splitString("Hello World"," ");

//TRIM
function TrimString(str){
    console.log("Original String: ",str);
    console.log("After Trimming: ",str.trim()); // function provides by js
    //it trims out the extra space from the front and end of the string.
}
TrimString("       Aryan      ");

//TO-UPPER
function toupper(str){
    console.log("original String: ",str);
    console.log("uppercase string: ",str.toUpperCase());//function provided by js
    //it converts the lowercase string to uppercase.
}
toupper("aryan");


