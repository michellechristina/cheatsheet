//creates an empty array
var cars= [];

// put an item in the array
cars.push ("toyota");
cars.push("honda");
cars.push("jeep");

// view what's in the array
console.log(cars);

// view what's in the first position of the array
console.log(cars[0]);

// create an array of values
var colors=["purple", "pink", "red"];

// loop over an array and log it out
for (var i=0; i<colors.length; i++) {
    console.log(colors[i]);
}

// another way to loop over an array
// forEach is a shortcut to do a for loop.
// forEach is an array method (or function) that takes a function as its (argument)
colors.forEach(function(color){
    console.log(color);
}) ;

// create a function to show the benefit of forEach
// this function takes in a string & changes it to uppercase, but it's not called back by anything yet
function toUppercase(str){
   return str.toUpperCase();
}

var uppercaseColors=colors.forEach(toUppercase);
// returns undefined bc forEach doesn't return a value
console.log(uppercaseColors);

//this is a demo of array.map
// array.map is like forEach, but it does return a value, which is another array

var uppercaseColors=colors.map(toUppercase);
console.log(uppercaseColors);

// remove or "pop" something off the end of the array
// LIFO - last in, first out
console.log("\n-----------------------");
console.log(colors);
colors.pop();
console.log(colors);
var color=colors.pop();
console.log("color: " + color);
console.log("colors: " + colors);
