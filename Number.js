function explainParseInt(value){
    console.log("Original Value: ",value);
    let ans = parseInt(value);//function provided by js
    //this function basically converts string -> num and also removes the unwanted string for FROM FRONT OR BACK eg:
    // if value = ghghturhfduvhd56djfhruhgur the o/p of parseInt(value) would be NaN but if val = ghgh56 then op=56
    console.log("After ParseInt: ",ans);
}
explainParseInt("42");
explainParseInt("42px");
explainParseInt("3.14");