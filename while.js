

// Number 1 - Number Chain


(() => {

    let val = 2;
    while( val <= 65536){
        console.log(val);
            val *= 2;
    }



// Number 2 - Ice Cream

let inventory = Math.floor(Math.random() * 50) + 50;

do { let conesOrdered = Math.floor(Math.random() * 5) + 1;
    if(conesOrdered > inventory){
        console.log(`I do not have enough to sell you ${conesOrdered}, I only have ${inventory} left`)
    } else {
        console.log(`Here are your ${conesOrdered} ice cream cones. We now have ${inventory -= conesOrdered} left in inventory`)
    }
} while (inventory !== 0);
console.log("Yay, I am free from ice cream prison");

})();
