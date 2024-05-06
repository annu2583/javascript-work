

function myFunction(){

    let first = document.getElementById("fname").value
    let last = document.getElementById("lname").value
    let email = document.getElementById("email").value
    let password = document.getElementById("pass").value
    let confirm = document.getElementById("confirm").value

  //Password match

    if (password == confirm) {
        alert("Password match")
    }
    else{
        alert("Incorrect password ")
    }


    
    validateEmail(email)
//email validation
function validateEmail(email){
    let regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let result = regx.test(email)
    console.log(result);
    if (result) {
        alert("Email is valid");
    }
    else{
      alert("Email is not valid");
    }
}
 localStorage.setItem(data , form)
}

