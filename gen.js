// let pass = document.getElementsByClassName('password')
// console.log(pass);

function generatePass() {
    let str = '1234567890'
    let pass= ''
   
       let num = Math.floor(Math.random()*800000) 
        pass += num
    return pass;
}
console.log(generatePass());
// console.log('hh');


// let number = Math.random()
// console.log(number*23);
// console.log(Math.floor(5.67));







