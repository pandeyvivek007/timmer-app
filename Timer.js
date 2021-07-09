let day=document.querySelector('#day');
let hour=document.querySelector('#hour');
let minut=document.querySelector('#minuts');
let second=document.querySelector('#seconds');

const newYear="1 jan 2022";

function counter(){
    let newYearDate=new Date(newYear);
    let today=new Date();
    let totalSeconds=(newYearDate-today)/1000;
    let days=Math.floor((totalSeconds)/(60*60*24))
    let hours=Math.floor((totalSeconds)%(60*60*24)/3600);
    let minuts=Math.floor((totalSeconds)%(60*60)/60);
    let seconds=Math.floor((totalSeconds)%(60));


    day.innerHTML=days;
    hour.innerHTML=hours;
    minut.innerHTML=minuts;
    second.innerHTML=seconds;
    // console.log(minuts);
}
setInterval(counter,1000);

