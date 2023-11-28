const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


//-----------------------------------Filter------------------------
const userLang3 = users.filter(user => user.languages.length >= 3)
console.log(userLang3)

//-----------------------------------Map---------------------------

const getEmail = users.map(users => users.email)

console.log(getEmail)


//----------------------------------Reduce--------------------------

const totalYears = users.reduce((total, users) =>{
return total + users.yearsOfExperience;

},0)
console.log(totalYears)
console.log(totalYears / users.length)

//----------------------------------Reduce 2--------------------------

const longestEmail = users.reduce((total, user) => {
    if(user.email.length >= total.length){
        return user.email}
    else{
        return total
    }

}," ")
console.log(longestEmail)

//----------------------------------Reduce 3----------------------------

const userString = users.reduce((totalNames, users) =>{
    return totalNames + users.name + ", "
}, ' ')



console.log("Your instructors are" + userString)