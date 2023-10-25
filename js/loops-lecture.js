// While loops- checks at the top of the loop
/*
let i = 0;

while(i< 10){
    console.log('while loop iteration' + i);
    i++;
}
*/


//Common Applications


let randomResult = 0;
let loopCount = 0;

while(randomResult !== 8){
    randomResult = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    loopCount++;
}

console.log(`the random result : ${randomResult}`);
console.log(`The number of loops: ${loopCount}`);

// Do While Loops - checks result at the end of the loop

let i= 10;

do {
    console.log('while loop iteration #' + i);
    i++;
} while(i<10);


//Common Application

let userResponse;
do{
    console.log("Program running.....");
    userResponse = confirm("Would you like to run the program again?")
} while(userResponse === true);



// For Loops

for (let i = 0; i < 10; i++){
    console.log('for loop iteration #' + 1)
}


//Common Applications

let arrNum = [1,2,3,4,5,6,7];


//Uncommon use case

for (let i = 0 ,j = 9; i <10; i++, j--){
    console.log('for loop iteration #' + i + `, j = ` + j);
}

// Continue 