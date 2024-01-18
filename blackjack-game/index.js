var messageEl = document.getElementById("message-el");
var sumEl = document.querySelector("#sum-el");
var cardsEl = document.querySelector("#cards-el");
let cards = []
let sum = 0;
let message = "";
let hasBlackJack = false
let isAlive = false

let player = {
    name: "MS",
    chips: 121
}
let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for(var i=0;i<cards.length;i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " +  sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card? ";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! ";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! ";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if(hasBlackJack === false && isAlive === true) {
        console.log("Drawing a new card from the deck!");
        var cardVar = getRandomCard();
        sum += cardVar;
        cards.push(cardVar);
        renderGame();
    }
}

function getRandomCard() {
    let  randomValue = Math.floor(Math.random() * 13) + 1;
    if(randomValue == 1)
        return 11;
    else if(randomValue >=11 && randomValue<=13) 
        return 10;
    else return randomValue; 
}

