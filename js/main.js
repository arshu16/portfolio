// Set the date we're counting down to
var careerStartDate = new Date("Feb 16, 2015 12:00:00").getTime();
var prevDay, prevHour, prevMinute, prevSecond;

function parseString(datum) {
    return datum.toLocaleString(undefined, {
        minimumIntegerDigits: 2
    })
}   

document.addEventListener("DOMContentLoaded", updateTime);

// Update the count down every 1 second
setInterval(updateTime, 1000);

function animateAndPlay(element, string) {
    element.innerHTML = string;
    element.classList.remove("animate-time");
    void element.offsetWidth;
    element.classList.add("animate-time");
}

function updateTime() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the career start date
    var distance = now - careerStartDate;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var years = days / 365 | 0;
    days = days - (years * 365);
    var months = days / 31 | 0;
    days = days - (months * 31);

    // Display the result in the element with id="demo"
    document.querySelector(".years").innerHTML = parseString(years);
    document.querySelector(".months").innerHTML = parseString(months);
    if(prevDay !== days) {
        prevDay = days;
        var element = document.querySelector(".days");
        animateAndPlay(element, parseString(days));
    }
    if (prevHour !== hours) {
        prevHour = hours;
        var element = document.querySelector(".hours");
        animateAndPlay(element, parseString(hours));
    }
    if (prevMinute !== minutes) {
        prevMinute = minutes;
        var element = document.querySelector(".minutes");
        animateAndPlay(element, parseString(minutes));
    }
    if (prevSecond !== seconds) {
        prevSecond = seconds;
        var element = document.querySelector(".seconds");
        animateAndPlay(element, parseString(seconds));
    }
    if (!prevDay) {
        prevDay = days;
        prevHour = hours;
        prevMinute = minutes;
        prevSecond = seconds;
    }
}