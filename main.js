

// The system will ask for input

let name1 = prompt ("What is the first name?");
let name2 = prompt ("what is the second name?");
let name3 = prompt ("what is the third name?"); 


// Test first condition "The code should output the longest of the three names"


if (name1.length > name2.length && name1.length > name3.length){
    console.log( `${name1} has the longer name`);
}
 if (name2.length > name1.length && name2.length > name3.length){
    console.log( `${name2} has the longer name`);
}
if(name3.length > name1.length && name3.length > name2.length){
    console.log( `${name2} has the longer name`);
}

// Test second condition "If there is a tie between any two, list both"
 if(name1.length == name2.length){
    console.log(`${name1} and ${name2} tie for the longest name.`)
}
 if(name1.length == name3.length){
    console.log(`${name1} and ${name3} tie for the longest name.`)
}
 if(name2.length == name3.length){
    console.log(`${name2} and ${name3} tie for the longest name.`)
}
// Test third condition "if all three names are the same length"

if (name1.length == name2.length && name2.length == name3.length) {
    console.log(`All three names ${name1} ${name2} ${name3} are the same length`);
}

