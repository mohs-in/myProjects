let homeCounter = document.getElementById("home-counter");
let guestCounter = document.getElementById("guest-counter");

function addOneHome() {
    let cur = parseInt(document.getElementById("home-counter").textContent);
    cur += 1;
    document.getElementById("home-counter").textContent = cur;
}

function addTwoHome() {
    let cur = parseInt(document.getElementById("home-counter").textContent);
    cur += 2;
    document.getElementById("home-counter").textContent = cur;
}

function addThreeHome() {
    let cur = parseInt(document.getElementById("home-counter").textContent);
    cur += 3;
    document.getElementById("home-counter").textContent = cur;
}

function addOneGuest() {
    let cur = parseInt(document.getElementById("guest-counter").textContent);
    cur += 1;
    document.getElementById("guest-counter").textContent = cur;
}

function addTwoGuest() {
    let cur = parseInt(document.getElementById("guest-counter").textContent);
    cur += 2;
    document.getElementById("guest-counter").textContent = cur;
}

function addThreeGuest() {
    let cur = parseInt(document.getElementById("guest-counter").textContent);
    cur += 3;
    document.getElementById("guest-counter").textContent = cur;
}

function reset() {
    document.getElementById("home-counter").textContent = 0;
    document.getElementById("guest-counter").textContent = 0;
}
