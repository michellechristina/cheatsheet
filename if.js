// this is how you do an if comment -- if statements are boolean always
if (sometest) {
    //does a thing
}

//this is an if that tests 2 things
if (sometest && some other test) {
    //does a thing if both are true
}

//this is an if else
if (sometest) {
    //does a thing if true
}
else {
    //does a thing if false
}

//this is an if, else if, else

if (sometest) {
    //does a thing if true
}
else if (some other test) {
    //does a thing if "some other test" is true
}
else if (yet another test) {
    //does a thing if "yet another test" is true
}
else {
// this happens is everything else is false
}



var hamburger = {

    hasCheese: true,
    hasPickles: true
}

//demo if, else if, else block
if (hamburger.hasCheese && hamburger.hasPickles) {
    console.log("hamburger has cheese" + " hamburger has pickles");
}
else if (hamburger.hasPickles) {
    console.log ("hamburger has pickles");
}
else if (hamburger.hasCheese) {
    console.log ("hamburger has cheese");
}
else {
    console.log("sad hamburger");
}