/* const password = prompt("Please enter a new password");
if (password.length < 5) {
    console.log("Small");

}
else {
    console.log("Good");
}
console.log("Hello world");
let x = 5;
console.log(x); */
/* const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
} */
/* const person = {
    name: "Ishaan",
    phone: 9606319839,
    branch: "ISE",
    call() {
        console.log(`${this.name} is a student of ${this.branch} branch`);
    }
} */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(function (el) {
    console.log(el);  /* use of for each */
})
const doubles = numbers.map(function (num) {
    return num * 2;
})
const add = (x, y) => {
    return x + y;
}
const greet = (s) => {
    return "Hey" + " " + s;
}
const mult = (x, y) => (
    x * y  /* an example for implicit declaration */
)
function validUserNames(username) {
    let filteredUsernames = username.filter(function (usernames) {
        return usernames.length < 10
    })
    return filteredUsernames;
}
/* const UserName = ["ishaan12345678", "ishaan"];
validUserNames(UserName); */
function sub(n1, n2) {
    return n1 - n2;
}
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

/* const result = words.filter(function (fil) {
    return fil.length > 6
}); */
const result = words.filter(word => word.length > 6);  /* this is use of arrow function expression */
console.log(result);
const prices = [10, 20, 30, 12.99, 15.45];
/* const total = prices.reduce((total, price) => {  /* the syntax for reduce is reduce(accumulator,current value) */

const total = prices.reduce((total, price) => (total + price));  /* the syntax for reduce is reduce(accumulator,current value) */

function rollDie(numSides = 6) {  /* this type of syntax is when we passing the function with no parameter in instanceof, it will take 6 as default parameter */
    return Math.floor(Math.random() * numSides) + 1
}
function sum() {
    return arguments;
}
function raceResults(gold, silver, ...any) {  /* rest param  */
    console.log(`Gold medal goes to ${gold}`);
    console.log(`Silver medal goes to ${silver}`);
    console.log(`Thanks to evrryone else ${any}`);
}
const user2 = {
    email: 'ishaanshetty12@gmail.com',
    firstName: "Ishaan",
    lastName: "Shetty",
    phone: 9606319839,
    born: 2002,
    city: "Mangalore",
    state: "Karnataka"
}
const { email, firstName, lastName, phone } = user2;  /* destructuring objects, we have basically created a variable for the object*/

/* function display(user2) {       //Destructuring params
    const { firstName, lastName } = user2;
    return `${firstName} ${lastName}`;
} */
function fullName({ firstName, lastName = "V" }) {
    return `${firstName} ${lastName}`;
}