

import {greetings, getGreeting} from "./greeting-logic.js";




document.querySelector("#userForm").addEventListener('submit', (e) =>{
    event.preventDefault();
   const userInput = document.getElementById("Inputname").value;

   document.getElementById("userName").textContent = `${getGreeting()} ${userInput}`
})

