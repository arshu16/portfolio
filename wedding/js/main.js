window.addEventListener('load', init);
function init() {
    function loop() {
        refresh();
        setTimeout(loop, 1000);
    }
    loop();
}

function refresh() {
    const date = new Date("14 Dec 2018 12:00 pm");
    const now = new Date();
    let delta = (date.getTime() - now.getTime()) / 1000;

    if (delta > 0) {
        document.querySelector('.wed-msg').style.display = "none";
        // calculate (and subtract) whole days
        const days = Math.floor(delta / 86400);
        delta -= days * 86400 | 0;

        // calculate (and subtract) whole hours
        const hours = Math.floor(delta / 3600) % 24 | 0;
        delta -= hours * 3600 | 0;

        // calculate (and subtract) whole minutes
        const minutes = Math.floor(delta / 60) % 60 | 0;
        delta -= minutes * 60 | 0;

        // what's left is seconds
        const seconds = delta % 60 | 0; // in theory the modulus is not required

        document.querySelector(`.days`).innerText = days;
        document.querySelector(`.minutes`).innerText = minutes;
        document.querySelector(`.hours`).innerText = hours;
        document.querySelector(`.seconds`).innerText = seconds;
    } else {
        document.querySelector('.hitched').style.display = "none";
        document.querySelector('.counter').style.display = "none";
    }
}