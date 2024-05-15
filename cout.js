let counter = document.querySelector("#counterValue");
// console.log(display.value);

let incre = document.getElementById("increment");
let decre = document.getElementById("decrement");
let reset = document.getElementById("reset");
// console.log(reset);
let count = 0;
console.log(count);

incre.onclick = function(){
    count ++ ;
    incre.innerHTML = count ;
}

decre.onclick = function(){
    if (count > 0){
        count -- ;
    }
  
    decre.textContent = count ;
}

reset.onclick = function(){
    count = 0;
    reset.textContent = count ;
}