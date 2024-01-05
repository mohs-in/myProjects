let countEl = document.getElementById("count-el");
let entries = document.getElementById("entries");
let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count;
}

function save() {
    entries.innerText += " " + count + " - ";
    countEl.innerText = 0;
    count = 0;
}
