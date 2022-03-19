let sum = 0;
let cards = []
let message;
let player = {
    name: prompt("Choose a name.", ""),
    chip: 150
}
let playerEl = document.getElementById("player-chip");
let messageEl = document.getElementById('message-el');
let sumEl = document.querySelector("#sum")
let cardsEl = document.getElementById('cards')
let isAlive = false;
let hasBlackJack = false


function getRandomCard(){
    let number = Math.floor(Math.random() *13) + 1;
     switch (number) {
         case 1: number = 11;
         break;
         case 11:
             case 12:
                 case 13:
                      number = 10;
                 break;
     }
    return number
}

function startGame(){
    isAlive === true
  
    let fCard = getRandomCard();
    let sCard = getRandomCard();

    
     cards =[fCard, sCard]
    
     sum = cards[0] + cards[1]
    
    renderGame()
   
}


function renderGame() {
if (sum === 21){
    message = "You've got Blackjack!"
    hasBlackJack === true
    playerEl.innerText = `Congratulations, ${player.name}, you just earned $${player.chip}!`
}

else if (sum<21) {
    message = "Do you want to draw a new card?"
    isAlive = true;
    playerEl.innerText = "You have not earned any chip."
} 

else {
    message = "You're out of the game!"
    isAlive = false;
    playerEl.innerText = "You have no chip left."
   
}

cardsEl.innerText = 'Cards: '
for (i = 0; i<cards.length; i++) {
cardsEl.textContent += cards[i] + ' , ' }
sumEl.innerText = `Sum: ${sum}`

messageEl.innerText = message;

}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card

    cards.push(card);
    

    renderGame()
    }

    
}



 

