//set initial value to 0
let counter = 0;

//select value and buttons
const value = document.querySelector('#number');
const add = document.querySelector('#increase');
const sub = document.querySelector('#decrease');
const res = document.querySelector('#reset');

//event listener for increase button
add.addEventListener('click', function() {
    counter++;
    value.innerHTML = counter;
});

//event listener for decrease button
sub.addEventListener('click', function() {
    counter--;
    value.innerHTML = counter;
});

//event listener for reset button
res.addEventListener('click', function() {
    counter = 0;
    value.innerHTML = counter;
});