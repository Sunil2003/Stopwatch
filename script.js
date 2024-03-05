let markedEle = document.querySelector('.marked_time');
let startBtn = document.getElementById("start-btn");
let resetBtn = document.getElementById("reset-btn");
let getTimeBtn = document.getElementById("get-btn");

let minutes = 0;
let seconds = 0;
let displayTimeforGetTime;

const updateDisplay = () => {

    let formattedMinutes = (minutes < 10 ? '0' : '') + minutes;
    let formattedSeconds = (seconds < 10 ? '0' : '') + seconds;
    displayTimeforGetTime = formattedMinutes + ':' + formattedSeconds;
    document.querySelector('.displayTime').textContent = displayTimeforGetTime;
}


let toggle_btn = false;

const changeButtonIcon = () => {
    if (!toggle_btn) {
        startBtn.innerHTML = `<i class="fas fa-play"></i> Play`;
    } else {
        startBtn.innerHTML = `<i class="fas fa-pause"></i> Pause`;
    }
}

let running = false;

let IntervalId;


const startTime = () => {
    toggle_btn = !toggle_btn;
    changeButtonIcon();
    if (!running) {
        running = true;
        IntervalId = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                // If seconds reach 60, reset to 0 and increment minutes
                seconds = 0;
                minutes++;
            }

            // Update the display time
            updateDisplay();
        }, 1000);
    } else {
        running = false;
        clearInterval(IntervalId);
    }
}

const resetTime = () => {
    minutes = 0;
    seconds = 0;
    if (running) { startTime(); }
    document.querySelector('.displayTime').textContent = "00:00";
    markedEle.innerHTML = "";
}


const getTime = () => {
   if(running){
    console.log("clicked");
    const divEle = document.createElement("div");
    divEle.classList.add("div_list");
    divEle.innerHTML = `${displayTimeforGetTime}`;
    markedEle.appendChild(divEle);
   }else{
    alert('Stopwatch has stopped!')
   }
}


startBtn.addEventListener('click', startTime);
resetBtn.addEventListener('click', resetTime);
getTimeBtn.addEventListener('click',getTime);