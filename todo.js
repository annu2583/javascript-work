
// let list = document.getElementsByClassName("myUl")
// console.log(list);

// let close = document.getElementsByClassName("close")
// // console.log(close);
// let i = 0
// for (let i = 0; i < close.length; i++){
//     close.onclick=function(){
//         li.innerHtml.remove("active")
//     }
// }

// let ul = document.getElementById('list');
// function addTask() {
// if (input.value === '') {
//     alert("You must write something")
// }
// else {
// let li = document.createElement('li');
// ul.innerHTML = input.value;
// ul.appendChild(li);
// for (let i = 0; i < list.length; i++) {
//     let ul = document.getElementById('list');
//     let li = document.createElement("li");
//     // let ul =document.getElementById("list").appendChild(li)
//     ul.innerHTML = input.value;
//     ul.appendChild(li);

// }
// let span = document.createElement("span");
// span.innerHTML = ("\u00d7");
// span.className = "close"
// ul.appendChild(span);
// }


//     input.value = '';

// }
let input = document.getElementById('myinput');
let ul = document.getElementById('list');
let arr = []
// let list = []
function addTask() {
    let list= document.getElementsByTagName('li')
     for (let i = 0; i < list.length; i++) {
    console.log(list[i]);


 }
if (input.value === '') {
    alert("You must write something")
}
else {
    let li = document.createElement('li');
    li.innerHTML = input.value;
    ul.appendChild(li);



    let span = document.createElement("span");
    span.innerHTML = ("\u00d7");

    span.className = "close"
    li.appendChild(span);
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.listStyleType = 'none';
    li.style.padding = '10px 10px';

    let remove = document.getElementsByClassName('close')
    for (let i = 0; i < remove.length; i++) {
        remove[i].addEventListener('click', (e) => {
            e.preventDefault()
            remove[i].parentElement.remove()
            console.log();
        })



    }
}
input.value = "";
}
function getData() {
    let list = localStorage.getItem("data")
    console.log(list,typeof JSON.parse(list));
}
getData()







// call back
function call() {
    add()
}
function add() {
    console.log("add is calling");
    subtract()
}
function subtract() {
    console.log("subtract is calling");
    mul()
}
function mul() {
    console.log("multiply is calling");
    divide()
}
function divide() {
    console.log("divide is called");
    // call()
}
call()



//npx create-react-app
//npm start
