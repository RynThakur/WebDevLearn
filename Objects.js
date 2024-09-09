function objectMethods(obj){
    console.log("Original Object: ",obj);

    let keys = Object.keys(obj); // extracts all the keys of the object
    console.log("After object.keys(): ",keys);

    let values = Object.values(obj); // extracts all the values of the object
    console.log("After object.values()", values);

    let entries = Object.entries(obj);
    console.log("After object.entries(), ",entries);

    let hasprop = obj.hasOwnProperty("property");
    console.log("after hasOwnProperty() ",hasprop);

}