
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
let textArea = document.getElementsByTagName('myinput');

let add = document.getElementsByClassName('add');

let ul = document.getElementsByClassName('list');

let li = document.createElement("li");

add.addEventListener('click',function(){

    let value = li.value

    ul.appendChild(li)

    li.textArea= value;
})

