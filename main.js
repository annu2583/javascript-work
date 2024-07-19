let incre = document.getElementById("incre")
let decre = document.getElementById("decre")
let reset = document.getElementById("reverse")
let app = document.getElementById("counter")
let counter = 0;

//INCREMENT
function increment() {
    counter++;
    app.innerHTML = counter;
}
//DECREMENT
function decrement() {
    if (counter > 0) {
        counter--;
    }
    app.innerHTML = counter;
}
//RESET
function reverse() {
    counter = 0;
    console.log(reverse);
    app.innerHTML = counter;
}