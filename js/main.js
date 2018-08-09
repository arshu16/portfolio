// Set the date we're counting down to
var careerStartDate = new Date("Feb 16, 2015 12:00:00").getTime();

function parseString(datum) {
    return datum.toLocaleString(undefined, {
        minimumIntegerDigits: 2
    })
}   

document.addEventListener("DOMContentLoaded", updateTime);

// Update the count down every 1 second
setInterval(updateTime, 1000);

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
    document.querySelector(".days").innerHTML = parseString(days);
    document.querySelector(".hours").innerHTML = parseString(hours);
    document.querySelector(".minutes").innerHTML = parseString(minutes);
    document.querySelector(".seconds").innerHTML = parseString(seconds);
}