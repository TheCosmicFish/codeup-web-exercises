let hello = "Hello from external Javascript";
console.log(hello)
alert("Welcome to my website.");
let userString = prompt("What is your favorite color?");
console.log("User's favorite color",{userString});
if(userString === "blue"){
    alert("Great! That is my favorite too!")
}

let Mermaid = parseFloat(prompt("How many days did you rent Little Mermaid?"))
alert(Mermaid * 3)
undefined
let Bear = parseFloat(prompt("How many days did you rent Brother Bear?"))
alert(Bear * 3)
let Hercules = parseFloat(prompt("How many days did you rent Hercules?"))
alert(Hercules * 3)
let Total = (Mermaid + Bear + Hercules) * 3;
console.log(Total.toFixed(2))
alert(Total.toFixed(2))


//Forgot to do the second part of number 3
/*
const Google = 400;
undefined
const Amazon = 380;
undefined
const Facebook = 350;
undefined
console.log((Facebook * 10) + (Amazon * 4) + (Google * 6))
VM2458:1 7420
undefined
let username = 'codeup';
let password = 'notastrongpassword';
undefined
if password.indexOf() >= 5;
VM2580:1 Uncaught SyntaxError: Unexpected identifier 'password'
password.length >= 5
true
password != username
true
username.length <=20
true
username.trim()
'codeup'
password.trim()
'notastrongpassword'
let passwordMin = password.length >= 5
undefined
passwordMin
true
let passwordDif = password != username
undefined
passwordDif
true
let userMax = username.length <=20
undefined
userMax
true
let cleanUp = username.trim(); password.trim();
'notastrongpassword'
cleanUp
'codeup'
let cleanUp = username.trim(), password.trim()
VM3338:1 Uncaught SyntaxError: Unexpected token '.'
cleanUp
'codeup'
let cleanUp = username.trim() + password.trim()
undefined
cleanUp
'codeupnotastrongpassword'
let cleanUp = username.trim() , password.trim();
VM3390:1 Uncaught SyntaxError: Unexpected token '.'
let cleanUp1 = username.trim()
undefined
let cleanUp2 = password.trim()
undefined
cleanUp1
'codeup'
cleanUp2
'notastrongpassword'
cleanup1 == username.trim()
VM3571:1 Uncaught ReferenceError: cleanup1 is not defined
at <anonymous>:1:1
(anonymous) @ VM3571:1
username == cleanUp1
true*/
