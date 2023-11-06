
(() => {
    let userNum;

    while (true) { //infinite loop
        userNum = parseInt(prompt("Please Choose a Number Between 1 and 50, make it odd."));
        if (userNum >= 1 && userNum <= 50 && userNum % 2 !== 0) {
            break;
        }
    }
    console.log(userNum);45
    for( let i = 1; i < 50; i += 2){
        if(i === userNum) {
            console.log(`Oops! I am skipping ${userNum}`);
            continue;
        } console.log(i);
    }
})()






