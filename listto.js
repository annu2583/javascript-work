let input = document.getElementById('myinput')
let ul = document.getElementById('list')

getData()

// todo remove
function removeItem(index){
   let arr = getSavedData()  // read database
   if(arr.length == 0) return // error handling
   // remove data by index
   arr.splice(index,1)
   // update data 
   localStorage.setItem('role',JSON.stringify(arr))
   getData()
}

// get data form the localstorage
function getSavedData (){ // database
   let data = localStorage.getItem('role');
   if(data == null) return []
   return JSON.parse(data)
}

// save in localstorage
function addTask() {
   let arr = getSavedData() // read database
   arr.push(input.value)
   localStorage.setItem('role',JSON.stringify(arr))
   getData()
}

// render data 
function getData() {
   let list = getSavedData() // read database
   let html =  ''
   for (let i = 0; i < list.length; i++) {
      html += `<li>${list[i]}<span onclick="removeItem(${i})">X</span></li>`
      // html += '<li>'+list[i]+'<span onclick="removeItem('+i+')">X</span></li>'
      // html += "<li>"+list[i]+"<span onclick='removeItem("+i+")'>X</span></li>"
   }
   ul.innerHTML = html
}