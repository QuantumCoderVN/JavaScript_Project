document.getElementById("decrementBtn").addEventListener("click", decrementCounter);
document.getElementById("incrementBtn").addEventListener("click", incrementCounter);
document.getElementById("resetBtn").addEventListener("click", resetCounter);
let counterDisplay = document.getElementById("counterDisplay");
let counter = 0;

function updayteCounter() {
    counterDisplay.textContent = counter;
}

function incrementCounter() {
    counter++;
    updayteCounter();
}

function decrementCounter() {
    if (counter <= 0) {
        return;
    }
    counter--;
    updayteCounter();
}

function resetCounter() {
    counter = 0;
    updayteCounter();
}
