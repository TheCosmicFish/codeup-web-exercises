"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(colors){
    if (colors === "blue"){return "Blue is the color of the sky";
    }  else if (colors === "yellow") {
        return "Yellow is so mellow and also the color of the sun";
    }   else if (colors === "green") {
        return "Green is the color of tree leaves in spring";
    }   else if (colors === "red") {
        return "Red is the color of roses";
    }   else if (colors === "violet") {
        return "Violets are some of the prettiest flowers on planet earth, but that's just my opinion.";
    } else{ return "I have no idea";
    }
}



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
let chooseAColor = prompt("Choose a color");

switch(chooseAColor.toLowerCase()){
    case "blue":
        alert("Blue is the color of the sky");
        break;
    case "green":
        alert("Green is the color of tree leaves in spring");
        break;
    case "yellow":
        alert("Yellow is so mellow and the color of the sun.");
        break;
    case "red":
        alert("Red is the color of roses");
        break;
    case "violet":
        alert("Violets are some of the prettiest flowers on planet earth, but that's just my opinion.");
        break;
    default:
        alert("Hey, don't give up, try again!");
        break;
}
console.log(chooseAColor);
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */
alert(analyzeColor(chooseAColor));
/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/*
function calculateTotal(num1){
        if (num1 === 5){
            return alert("Your discount is 100%!");
    } else if (num1 === 4){
            return alert("Your discount is 50%!");
    } else if (num1 === 3){
            return alert("Your discount is 35%");
    } else if (num1 === 2) {
            return alert("Your discount is 25%!");
        } else if ( num1 === 1){
           return alert("Your discount is 10%");
    }
}

*/
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
 //Generate a random number between 0 and 6
 const luckyNumber = Math.floor(Math.random() * 6);

let billTotal = prompt("What is your bill total?");
let userString =  confirm("Would you like to get a lucky number for a discount?");

function getLucky(luckyNumber){
    if( userString === True){
        return alert(" Congrats! Your lucky number is " + luckyNumber);


function numRolled(luckyNumber) {
    if (luckyNumber() === 5) {
        return alert("Your discount is 100% and lucky number is 5!");
    } else if (luckyNumber === 4) {
        return alert("Your discount is 50% and number was 4!");
    } else if (luckyNumber === 3) {
        return alert("Your discount is 35% and number was 3!");
    } else if (luckyNumber === 2) {
        return alert("Your discount is 25% and number was 2!");
    } else if (luckyNumber === 1) {
        return alert("Your discount is 10% and number was 1");
    } else {
        return "Ok, maybe next time."
    }
}



/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */



function numberFacts(){
let userB = confirm("Would you like to pick a number")
if(userB === true) {
    let userName = prompt("What number would you like to enter?");
    if (userName > 0 && userName % 2 === 0) {
        let numHundred = parseInt(userName) + 100;
        alert("Your number is even");
        alert("Your number is positive")
        alert("Your number + 100 = " + numHundred)
    } else if (userName > 0 && userName % 2 !== 0) {
        let numHundred = parseInt(userName) + 100;
        alert("Your number is odd");
        alert("Your number is negative");
        alert("Your number + 100 = " + numHundred)
    }if(userName < 0 && userName % 2 === 0){
        let numHundred = parseInt(userName) + 100;
        alert("Your number is even");
        alert("Your number is positive")
        alert("Your number + 100 = " + numHundred)}
    if(userName < 0 && userName % 2 === 0){
        let numHundred = parseInt(userName) + 100;
        alert("Your number is even");
        alert("Your number is positive")
        alert("Your number + 100 = " + numHundred)}

}}

console.log(numberFacts())}}


