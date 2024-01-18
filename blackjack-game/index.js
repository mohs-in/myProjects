var messageEl = document.getElementById("message-el");
var sumEl = document.querySelector("#sum-el");
var cardsEl = document.querySelector("#cards-el");
let message = "";
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

function startGame() {
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
        // hasBlackJack = true;
    } else {
        message = "You're out of the game! ";
        // isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    console.log("Drawing a new card from the deck!");
    var cardVar = getRandomCard();
    sum += cardVar;
    cards.push(cardVar);
    renderGame();
}

function getRandomCard() {
    let  randomValue = Math.floor(Math.random() * 13) + 1;
    if(randomValue == 1)
        return 11;
    else if(randomValue >=11 && randomValue<=13) 
        return 10;
    else return randomValue; 
}