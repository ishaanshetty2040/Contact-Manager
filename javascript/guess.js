let maximum = parseInt(prompt("Enter maximun number"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);
let attempts = 1;
let guess = parseInt(prompt("Enter your first guess"));
while (guess !== targetNum) {
    if (guess === 'q') {
        break;
    }
    attempts++;
    if (parseInt(guess) > targetNum) {
        guess = prompt("Too high! Enter a new number");
    }
    else {
        guess = prompt("Too low! Enter a new guess");
    }
}
if (guess === 'q') {
    console.log("You quit");
}
else {
    console.log(`You got it. Number of guesses you took is ${attempts}`);
}
