let dateContainer = document.querySelector('.date-container');
let hourContainer = document.querySelector('.hours');
let minuteContainer = document.querySelector('.minutes');
let secondContainer = document.querySelector('.seconds');

const weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function setTime() {
    const today = new Date();
    // console.log(today);
    let date = today.getDate();
    let day = weeks[today.getDay()];
    let month = months[today.getMonth()];
    let year = today.getFullYear();
    

    let hours = formatTime(today.getHours());
    let minutes = formatTime(today.getMinutes());
    let seconds = formatTime(today.getSeconds());

    dateContainer.innerHTML = `<p>${day}</p><p><span>${date}</span></p><p>${month}</p><p>${year}</p>`;
    hourContainer.textContent = hours + ' :';
    minuteContainer.textContent = minutes + ' :';
    secondContainer.textContent = seconds;
}

setInterval(setTime, 1000);
