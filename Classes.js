class animal{
    constructor(name,legs,speaks){ // this is the definition of class.
        this.name = name;
        this.legs = legs;
        this.speaks = speaks;
    }
    static mytype(){
        console.log("i'am an animal") //static methods are not associated to objects, they are associated to the class itself.
    }
    speak(){ // member function, all objs of the class animal will have there speak() fn.
        console.log("hi there, "+this.speaks);
    }
} 
//consoling static function of the class animal:
console.log(animal.mytype());
let dog = new animal("Doggie",4,"bark"); // this is an object dog of the class animal, which takes ip: name,legs,speaks (as specified in the constructor),
let cat = new animal("cat",4,"meow")

dog.speak(); // calling functions on object
cat.speak();

//BASICALLY IF YOU WANT TO CALL A FN DIRECTLY ON THE CLASS AND NOT ON THE OBJECTS OF THE CLASS, YOU CAN MAKE IT A STATIC FUNCTION.