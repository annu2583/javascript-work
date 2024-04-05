
// let display = document.getElementById('input')
// let buttons = document.querySelectorAll('button')
// let buttonsArray = Array.from(buttons);
// let string = '';
// let arr=['+','-','*','/','.']
// for(let i=0; i<arr.length;i++){
//     console.log(arr[i]);
// }
// let str= '56-9805237800';

// console.log(str.slice(-1));
// // let y = '+'
// console.log(arr.includes('+'));


// buttonsArray.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         if (e.target.innerHTML == "DEL") {
//             string = string.substring(0, string.length - 1);
//             display.value = string;
//         }
//         else if (e.target.innerHTML == "C") {
//             string = ''
//             display.value = string;   
//         }
//         // else if(e.target.innerHTML=='str'){
//         //     string = arr.replace('+','-')
//         //     display.value = string;
//         // }
//         else if(e.target.innerHTML=='str'){
//             string = arr.replace("+","-");
//             display.value = string;
//         }
        
//     //    else if(arr>0 && arr<length){
//     //         string =string.replace('+','-')
//     //         display.value = string;
//     //     }
        
//         else if (e.target.innerHTML == "=") {

//             string = eval(string);
//             display.value = string;
//         }
      
//         else {
//             string += e.target.innerHTML;
//             display.value = string;
//         }
//      });
// })

// let display= document.getElementById("input")
// let buttons= document.querySelectorAll("button")
// let buttonsArray= Array.from(buttons);
// let string=''
// let arr=['+','-','*','/','.']
// buttonsArray.forEach(btn=>{
//   btn.addEventListener('click',(e)=>{
//     let lastNum= string.slice(-1);

//     if (e.target.innerHTML=='DEL') {
//         string = string.substring(0, string.length-1);
//         display.value= string;
//     }
//     else if(e.target.innerHTML=='C'){
//         string = ""
//         display.value= string;
//     }
    // else if(arr.includes(lastNum) && arr.includes(e.target.innerHTML)){
    //     string = string.slice(0,string.length-1)+e.target.innerHTML;
    //     display.value = string;
    // }
//     else if(e.target.innerHTML=='='){
//         string = eval(string);
//         display.value= string;
//     }
//     else{

//         string += e.target.innerHTML;
//         display.value = string;
//     }

//   })

// })


let display = document.getElementById('input');
let buttons = document.querySelectorAll('button');
let buttonsArray =Array.from(buttons);
let string = '';
let arr = ['+','-','*','/','.']
buttonsArray.forEach(btn=>{
    btn.addEventListener('click',(e)=>{ 
        string=string.toString()
        let lastNum = string?.slice(-1)

        if (e.target.innerHTML=='DEL') {
         string = string.substring(0,string.length-1);
         display.value = string;
        }
        else if(e.target.innerHTML== 'C'){
            string = ''
            display.value =string;
        }
        else if(arr.includes(lastNum) && arr.includes(e.target.innerHTML)){
            string = string.slice(0,string.length-1) + e.target.innerHTML;
            display.value = string;
        }
        else if (e.target.innerHTML=='='){
            string = eval(string);
            display.value =string;
        }
        else {
            string += e.target.innerHTML;
            display.value = string;
        }
    })
})