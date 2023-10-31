/*let possiblyFive = 5;
if (possiblyFive === 5){
    console.log("It is Five");
} else{
    console.log("It is not five")
};*/

/*function isItANumber(parameter) {
    if (typeof parameter === "number"){
        return "That's a number!";}
    else if (typeof parameter == "boolean"){
        return "Way to be technical";
    }
    else{ return "That is not a number!";}
}*/

let hasACow = true;
let hasGoat = false;

if (hasACow){
    console.log("Going to go milk the cow.");
} else if (hasGoat){
    console.log("Going to go milk the goat");
} else {
    console.log("Going to the store to get milk.");
}

function isThisThirtyFive(parameter) {
    if (isItANumber(parameter) === "That's a number!") {
        if (parameter === 35) {
            return "Yep, that is 35";
        } else if (parameter > 35) {
            return "Well now, I do not think that ${parameter} is 35";
        } else {
            return "No sir, {$parameter} is less than 35";
        }
    }
}

let doWeHaveMilk = false;
let action = (doWeHaveMilk) ? "I am going to make myself a bowl of Honey Oh's." : "I am now heading out to the HEB in order to replace the missing milk."
console.log(action);

function isItANumber(parameter) {
    if (typeof parameter === "number") ? "That's a number!" : "That is not a number!";
}

