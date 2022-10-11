// TIMER
let timer = setInterval(myTimer, 1000);

function myTimer() {
    let date = new Date();
    let currentDate = date.getDate() +"-"+(date.getMonth()+1)+"-"+ date.getFullYear();
    document.getElementById('date-time').innerHTML = "Date: " + currentDate + " Time: " +date.toLocaleTimeString();
}

myTimer();