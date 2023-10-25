"use strict";

let pi = 3.14
console.log(pi)
pi = 22/7;
console.log(pi)

let favoriteColor = "Green"
console.log(favoriteColor)

console.log(5 + 4); // console logs print to the console and ONLY the console

let instructorname = "Cody";
console.log(instructorname);


//ALERT! - a pop-up message to the user from Javacript
alert("This is an alert!");

// We can concatenate inside of an alert!
alert("Hello this is " + instructorname);

// Confirm is also a pop-up message that has the ability to capture a boolean
let confirmed = confirm("We have lunch at 12:30 today?");
console.log(confirmed)

// Prompt is another pop-up message from Javascript that asks the user for a text value
let userString = prompt("What is your favorite basketball team?");
console.log("Users Favorite Team",{userString});