/* const btn = document.querySelector('#btn');
btn.onclick = function () {
    console.log("You clicked me");
}
const btn2 = document.querySelector('#bt4');
btn2.addEventListener('click', () => {
    alert("You have been clicked");
    once: true
}) */
/* const form = document.querySelector('#shelterForm');
const input = document.querySelector('#inp');
const list = document.querySelector('#display');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(input.value);
    const display = input.value;
    const newLi = document.createElement('li');
    newLi.innerText = display;
    list.append(newLi);
    input.value = "";
}); */
/* const input = document.querySelector('input'); Example for change event
input.addEventListener('change', function (e) {
    console.log("asdfghj");
}); */
const input = document.querySelector('input');      /* Example for input event */
const h1 = document.querySelector('h1');
const original = h1.innerText;
input.addEventListener('input', function (e) {
    if (input.value === "") {
        h1.innerText = original;
    }
    else {
        h1.innerText = input.value;
    }


});