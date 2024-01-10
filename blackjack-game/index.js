var messageEl = document.getElementById("message-el");
var sumEl = document.querySelector("#sum-el");
let message = "";
let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard + 4
let hasBlackJack = false
let isAlive = true


function startGame() {
    sumEl.textContent += " " +  sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card? ";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! ";
        // hasBlackJack = true;
    } else {
        message = "You're out of the game! ";
        // isAlive = false;
    }
    messageEl.textContent = message;
}
