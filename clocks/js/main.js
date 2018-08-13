
//Wait for all resources to be downloaded
window.addEventListener('load', init);
function clock(place, date) {
    const minuteAngle = date.getMinutes() * 6,
        hourAngle = date.getHours() % 12 / 12 * 360 + (minuteAngle / 12),
        secondsAngle = date.getSeconds() * 6;

    document.querySelector(`.${place} .hour`).style.transform = `rotate(${hourAngle}deg)`;
    document.querySelector(`.${place} .minute`).style.transform = `rotate(${minuteAngle}deg)`;
    document.querySelector(`.${place} .second`).style.transform = `rotate(${secondsAngle}deg)`;
}

function getSydneyDate() {
    const d = new Date();
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    let sydneyDate = new Date(utc + (3600000 * 11));
    const year = sydneyDate.getFullYear();
    const october = new Date(`October 7 ${year}`);
    const april = new Date(`April 7 ${year + 1}`)
    if(sydneyDate < october) {
        sydneyDate = new Date(utc + (3600000 * 10));
    } else if(sydneyDate > october && sydneyDate < april) {
        sydneyDate = new Date(utc + (3600000 * 11));
    } else if(sydneyDate > april) {
        sydneyDate = new Date(utc + (3600000 * 10));
    }
    return sydneyDate;
}

function getDelhiDate() {
    const d = new Date();
    const utc = d.getTime() + d.getTimezoneOffset() * 60000;
    let delhiDate = new Date(utc + 3600000 * 5.5);
    return delhiDate;
}

function init() {
    function refreshClock() {
        clock('sydney', getSydneyDate()); 
        clock('delhi', getDelhiDate());
        setTimeout(refreshClock, 1000);
    }
    refreshClock();
}