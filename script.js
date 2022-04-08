const targetedday = "2 May 2022";


const daysdiv = document.getElementById("days");
const hoursdiv = document.getElementById("hours");
const minutsdiv = document.getElementById("minutes");
const seconddiv = document.getElementById("second");

function countDown(){
    const eidday = new Date(targetedday);  
    
    const currentday  = new Date();

    const totaltime = (eidday - currentday)/1000;
    const days = Math.floor(totaltime / 3600 / 24);
    const hours = Math.floor(totaltime / 3600) % 24;
    const mins = Math.floor(totaltime / 60) % 60;
    const second = Math.floor(totaltime) % 60;

    daysdiv.innerHTML = days;
    hoursdiv.innerHTML = hours;
    minutsdiv.innerHTML = mins;
    seconddiv.innerHTML = second;
}
countDown();
setInterval(countDown, 1000);

function devlop(){
    const devlop = document.getElementById("dec");
    devlop.innerHTML = "Md. Nazmus Sakib"

}
