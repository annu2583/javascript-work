// let date = new Date('March 16,2024');
// console.log( date.getDay());

let display = document.getElementById('clock');
function showTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let session = "AM"

    if (h <12) {
        h = h - 12;
    }
    if (h>= 12) {
        session = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    let time = h + ":" + m + ":" + s + " " + session;
    document.getElementById('clock').innerText = time;
    setTimeout(showTime, 1000);

}
showTime();





// let display = document.getElementById('clock')

// function showTime() {
//     let d = new Date();
//     let h = d.getHours();
//     let m = d.getMinutes();
//     let s = d.getSeconds();
//     let session = "AM";
//     if (h > 12) {
//         h = h - 12;
//     }
//     if (h>= 12) {
//         session = "PM";
//     }

//     h = (h < 10) ? "0" + h : h;
//     m = (m < 10) ? "0" + m : m;
//     s = (s < 10) ? "0" + s : m;
//     let time = h + ":" + m + ":" + s + " " + session;
//     document.getElementById("clock").innerText = time;
//     setTimeout(showTime, 1000);
// }
// showTime();









































