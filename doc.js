// document.getElementById("name").innerHTML = "Hello World!";
// document.getElementsByClassName("heading").innerHTML="KEEP YOUR HANDS"
// let btn=document.querySelector(".tips")
// console.log(btn);
const btn = document.querySelector('.read')
console.log(btn);

let element = document.getElementsByTagName("p")
console.log(element);

let x = document.getElementsByClassName("heading")
console.log(x);

// const mail=document.querySelector('.mail')
// let attr=mail.getAttribute('href')
// mail.setAttribute('href','www.yahoo.com')
// console.log(mail);


const mail = document.querySelector('.mail')
const attr = mail.getAttribute("href")
mail.setAttribute('href', 'www.google.com')
console.log(mail);
// btn.style.backgroundColor="grey"

btn.style.backgroundColor = "green"


/*** create new card with dom manipulation functions */

// let newCard=document.querySelector(".new_card")
// let xyz=document.createElement('div')
// xyz.classList.add("card_new")
// newCard.appendChild(xyz)

// let text= document.createElement("p")
// text.innerText="Hi My Self Sakshi"
// xyz.appendChild(text)


let newCard = document.querySelector(".new_card")
let y = document.createElement('div')
y.classList.add('card_new')
newCard.appendChild(y)

let heading = document.createElement("h1")
heading.innerText = "KEEP,CLEAN,HANDS"
y.appendChild(heading)

let bt = document.createElement("button")
bt.innerHTML = "Health tips"
y.appendChild(bt)
bt.style.color = "yellow"
bt.style.backgroundColor = "brown"
bt.style.border = "1px solid brown"
bt.style.borderRadius = "50px"
bt.style.padding = "10px"


let content = document.createElement("p")
content.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam ducimus reiciendis minus sit! Minus Minus"
y.appendChild(content)

let button = document.createElement("button")
button.innerText = "Read More"
y.appendChild(button)
button.style.color = "yellow"
button.style.backgroundColor = " #9d4848"
button.style.border = "1px solid brown"
button.style.borderRadius = "50px"
button.style.padding = "10px"
button.style.width = "300px"


function mOver(obj) {
    obj.innerHTML = "READ MORE"
}

function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
}
function mOVer(obj) {
    obj.innerHTML = "Health tips"
}
function mOut(obj) {
    obj.innerHTML = "follow us more"
}
function upperCase() {
    const j = document.getElementById("fname");
    j.value = j.value.toUpperCase();
}
//   upperCase()

//   function upperCase() {
//     const x = document.getElementById("fname");
//     x.value = x.value.toUpperCase();
//   }

function checkCookies() {
    let text = "";
    if (navigator.cookieEnabled == true) {
        text = "Cookies are enabled.";
    } else {
        text = "Cookies are not enabled.";
    }
    document.getElementById("form").innerHTML = text;
}

function mDown(obj) {
    obj.innerHTML = "Disagree"
}
function mUp(obj) {
    obj.innerHTML = "Acceptable"
}

document.getElementById("for").addEventListener("click", function () {
    alert("Hello World!");
});

let arry = [13, 45, 56, 78, 90, 1202]
let list = document.querySelector('#list')
console.log(list);
//   console.log(arry);
for (let i = 0; i < 4; i++) {
    let element = arry[i];
    // console.log(arry);
    let p = document.createElement('p')
    p.innerHTML = element
    list.appendChild(p)
}

let arr = [
    {
        name: "sakshi",
        age: 20
    },
    {
        name: "annu",
        age: 22
    },
    {
        name: "shama",
        age: 23
    },
    {
        name: "shanya",
        age: 24
    }
]
let headers=["name","age"]
document.querySelector(headers)
console.log(headers);
let table = document.getElementById('table');
const thead =document.createElement("thead")
for (let th of headers){
    let header = document.createElement("th")
    header.innerHTML=th
    thead.appendChild(header)
    table.appendChild(thead)
}

for (let user of arr) {
    let tr = document.createElement('tr');
 
    let td1 = document.createElement('td');
    td1.textContent = user.name
    tr.appendChild(td1)

    let td2 = document.createElement('td');
    td2.textContent = user.age;
    tr.appendChild(td2);
    table.appendChild(tr);
    table.style.border="1px solid black"
    table.style.padding="10px"
    table.style.fontSize="20px"
    table.style.backgroundColor="grey"
    table.style.color="white"
}	


let input= document.getElementById('input')

let number=document.getElementsByClassName('.number')
console.log(number);
 let operator= document.getElementsByClassName('.operator')
console.log(operator);
let  result = document.getElementsByClassName('.result')

let clear = document.getElementsByClassName('.clear')


function showTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let session = "PM";
    if (h>12) {
        h = h -12;
    }
    if (h>=12) {
        session = "AM";
    }

    h = (h<12) ? "0" + h : h;
    m = (m<12) ? "0" + m : m;
    s = (s<12) ? "0" + s : m;
    let time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("clock").innerHTML = time;
    setTimeout(showTime, 1000);
}
showTime();