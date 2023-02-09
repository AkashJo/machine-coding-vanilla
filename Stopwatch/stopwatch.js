let milliseconds = 0 , seconds = 0 , hours = 0 , minutes=0;

let timerElement = document.querySelector('.timerDisplay') ;
let interval = 0;

document.getElementById('startTimer').addEventListener('click',()=>{

    let intervalTime = parseInt(document.getElementById("input-text").value);
    console.log(document.getElementById("input-text").value);
    if(interval !=0 ) {
        clearInterval(interval)
    }
    interval = setInterval(displayTime,intervalTime);
})

document.getElementById('pauseTimer').addEventListener('click',()=>{
    clearInterval(interval)
})

document.getElementById('resetTimer').addEventListener('click',()=>{
    clearInterval(interval);
    milliseconds = 0 , seconds = 0 , hours = 0 , minutes=0;
    timerElement.innerHTML = ` ${hours} : ${minutes} : ${seconds} : ${milliseconds}`
})

const displayTime = () => {

    let intervalTime = parseInt(document.getElementById("input-text").value);

    milliseconds = milliseconds + 10;
    if(milliseconds == 1000){
        milliseconds=0;
        seconds++;
        if(seconds == 60) {
            seconds=0;
            minutes++;
            if(minutes==60){
                minutes=0;
                hours++
            }
        }
    }
    timerElement.innerHTML = ` ${hours} : ${minutes} : ${seconds} : ${milliseconds}`

}


