console.log("this is the objects branch");

// this is an example of an object. 
// inside of the object, the variables are called properties (ginger.color). 
// inside the object, the functions are called methods (ginger.bark)

var ginger = {};
//properties or variables
ginger.color = "yellow";
ginger.type = "dog";
ginger.age = 8;
ginger.dad = "ben";
ginger.attitude = "questionable at best";

//methods or functions
ginger.bark = function () {
    console.log("bark and woof");
}

ginger.exercise = function () {
    console.log("none");
}

// console.log(ginger);

//calling the object's (ginger is object) functions
ginger.bark();
ginger.exercise();