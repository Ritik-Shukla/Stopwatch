// All variables for the app
let currentTime = document.getElementById('displayedtime');
let stop = document.getElementById('stop');
let start = document.getElementById('start');
let reset = document.getElementById('reset');
let millisecond = 0;
let second = 0;
let minute = 0;
let timerStatusId = null;


// function to start timer
function startTimer() {
    millisecond++;
    if (millisecond == 60) {
        millisecond = 0;
        second++;
       
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    let ms;
    let s;
    let m;

    if (millisecond < 10) {
        ms = `0${millisecond}`;
    } else {
        ms = millisecond;
    }

    if (second < 10) {
        s = `0${second}`;
    } else {
        s = second;
    }

    if (minute < 10) {
        m = `0${minute}`;
    } else {
        m = minute;
    }
    currentTime.innerHTML = `${m}:${s}:${ms}`;

}
// function to stop timer
function stopTimer() {
    clearInterval(timerStatusId);
}

// function to reset timer
function resetTimer() {
    clearInterval(timerStatusId);
    currentTime.innerHTML = `00:00:00`;
    millisecond = 0;
    minute = 0;
    second = 0;
}

////  Starting App function
function StartApp() {
    start.addEventListener('click', function () {
        if (timerStatusId !== null) {
            clearInterval(timerStatusId);
        }
        timerStatusId = setInterval(startTimer, 10);
    });
    stop.addEventListener('click', stopTimer);
    reset.addEventListener('click', resetTimer);
}
StartApp();