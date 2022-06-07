/* const multiply = (x, y) => x * y;

const square = (x) => multiply(x, x);

const isRightTriangle = (a, b, c) => (
    square(a) + square(b) === square(c)
)
console.log("Hello");
isRightTriangle(3, 4, 5);
console.log("Done") */
/* console.log("I print first");
setTimeout(() => {
    console.log("I print after 3 sec");
}, 3000)
console.log("I print second"); */
/* setTimeout(() => {
    document.body.style.backgroundColor = 'red';
    setTimeout(() => {
        document.body.style.backgroundColor = 'orange';
        setTimeout(() => {
            document.body.style.backgroundColor = 'yellow';
            setTimeout(() => {
                document.body.style.backgroundColor = 'green';
                setTimeout(() => {
                    document.body.style.backgroundColor = 'blue';
                    setTimeout(() => {
                        document.body.style.backgroundColor = 'indigo';
                        setTimeout(() => {
                            document.body.style.backgroundColor = 'violet';
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000) */
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

/* delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('violet', 1000)) */
/* const login = async (username, password) => {
    if (!username || !password) throw "missing credentials";
    if (password === 'hello') return 'WELCOME';
    throw 'Invalid password';
}
login('akshgd', 'hello')
    .then((msg) => {
        console.log("Logged in");
    })
    .catch((err) => {
        console.log("Error");
        console.log(err);
    }) */

async function rainbow() {
    await delayedColorChange('red', 1000);
    await delayedColorChange('orange', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('green', 1000);
    await delayedColorChange('blue', 1000);
    await delayedColorChange('indigo', 1000);
    await delayedColorChange('violet', 1000);
}