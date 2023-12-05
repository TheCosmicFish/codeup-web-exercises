
import randomNumber from "./number-utils.js";
const greetings =
    [
        "Hello",
        "Hi",
        "Hey there",
        "Greetings",
        "Salutations",
        "Howdy",
        "Yo",
        "Bonjour",
        "Hola",
        "Ciao",
        "Namaste",
        "G'day",
        "What's up",
        "Sup",
        "How's it going",
        "Nice to meet you",
        "Welcome",
        "Hey",
        "How are you",
        "Pleased to meet you"
    ];


 function getGreeting() {
    let matches = []
    let randomIndex = randomNumber(0,19)
    for(let i = 0; i < greetings.length; i++){
        if(i === randomIndex){
            matches.push(greetings[i])
        }

    } return matches
}

console.log(getGreeting())

export {randomNumber,greetings, getGreeting}

