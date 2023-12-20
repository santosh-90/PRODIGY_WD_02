let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer;
let lapCounter = 1;

function start() {
    timer = setInterval(updateTime, 10);
    document.getElementById('start').disabled = true;
}

function stop() {
    clearInterval(timer);
    document.getElementById('start').disabled = false;
}

function reset() {
    clearInterval(timer);
    minutes = seconds = milliseconds = 0;
    lapCounter = 1;
    updateDisplay();
    clearLapList();
    document.getElementById('start').disabled = false;
}

function lap() {
    const lapTime = formatTime(minutes, seconds, milliseconds);
    const lapItem = document.createElement('li');
    lapItem.innerText = `Lap ${lapCounter}: ${lapTime}`;
    document.getElementById('lapList').appendChild(lapItem);
    lapCounter++;
}

function updateTime() {
    milliseconds += 10;

    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }

    updateDisplay();
}

function updateDisplay() {
    document.getElementById('minutes').innerText = padTime(minutes);
    document.getElementById('seconds').innerText = padTime(seconds);
    document.getElementById('milliseconds').innerText = padTime(milliseconds);
}

function padTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatTime(minutes, seconds, milliseconds) {
    return `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds / 10)}`;
}

function clearLapList() {
    const lapList = document.getElementById('lapList');
    while (lapList.firstChild) {
        lapList.removeChild(lapList.firstChild);
    }
}
