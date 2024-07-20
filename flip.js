let btn = document.getElementById("btn")
let color = document.querySelector(".color")
let colors = ['coral', 'Aqua', 'Green', 'Red', 'Grey', 'Blue','Violet','Yellow','Pink','orange']
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    document.body.style.background = colors[randomNumber]
    color.textContent = colors[randomNumber];
})




