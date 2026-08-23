let display = document.getElementById("numDisplay");
let count = 0;
let countUp = document.getElementById("countUp");
let countDown = document.getElementById("countDown");
let Reset = document.getElementById("Reset");



countUp.onclick = function() {
    count = count + 1;
    display.textContent = count;
}

countDown.onclick = function() {
    count = count - 1;
    display.textContent = count;
}

Reset.onclick = function() {
    count = 0;
    display.textContent = count;
}