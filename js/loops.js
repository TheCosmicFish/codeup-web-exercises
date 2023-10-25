// Number 2

let numToStopAt = 15;
function showMultiplicationTable(num){
    for(let i = 1; i > 0; i++){
        console.log(`${num} x ${i} =` + num * i);
            if(i === numToStopAt){
                console.log("This is the End");
                break;
            }
    }
}

console.log(showMultiplicationTable(7));


// Number 3


for(let i = 0 ; i < 10 ; i++){

    let num6 = (Math.floor(Math.random() * 181) + 20);
    console.log(`Your number is ${num6} `);
        if(num6 % 2 === 0){
            console.log('Congrats, your number is even');
        } else{ console.log( "Congrats, your number is odd");}
    num6++;
}


// Number 4
for(let i = 1; i <= 9 ; i++){
    for(let j =1; j<= i; j++){
        console.log(i.toString().repeat(i));
    }
}

// Number 5

for(let i = 100; i >= 5 ; i -= 5){
    console.log(i);
}

//Number 6








