
// this is an example of an object. 
// inside of the object, the variables are called properties (legs). 
// inside the object, the functions are called methods (moo)

// the object
var cow = {
    
        //properties or variables
        legs: 4,
        color: "brown",
        spots: true,
        hornsLength: "4 inches",
    
        //methods or functions
        grazes: function () {
            console.log("eating grass");
        },
    
        moo: function () {
            console.log("moo");
        },
    
        eatCorn: function () {
            console.log("eating corn");
        },
    
        charge: function () {
            console.log("this cow is charging");
        }
    
    }
    
    //calling the object & its properties
    
    // accessing the object
    console.log(cow);
    // accessing the properties of the object
    console.log(cow.legs);
    // calling objects, functions or methods
    cow.grazes();
    cow.grazes();
    cow.moo();
    cow.eatCorn();
    cow.charge();