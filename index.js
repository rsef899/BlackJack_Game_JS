let firstCard;
let lastCard;
let sum = 0;
let hasBlackJacked = false
let isAlive = true
//array 
let cards =[];

let messageEl = document.getElementById("message-el")

//--------selecting the sum element
//let sumEl = document.getElementById("sum-el")
//same as by element but this searches the code for a selector,**Class
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

/**
 * getting a random number for the cards
 */
function getRandomCard(){
    let randomvalue = Math.floor(Math.random() * 12) + 1
    if (randomvalue === 1){
        return 11
    }
    else if (randomvalue > 10){
        return 10
    }
    else{
        return randomvalue
    }
}

function addCard(){
    lastCard = getRandomCard()
    cards.push(lastCard)
    sum += lastCard
    playGame()
}


function playGame(){
    cardsEl.innerText += " " + lastCard
    if (sum === 21){
        console.log("Blackjacked")
        hasBlackJacked = true
        isAlive = false
    }
    else if (sum < 21){
        console.log("Next Hand")
        sumEl.textContent = "Sum: " + sum 
    }
    else{
        console.log("Busted")
        sumEl.textContent = "Sum: " + sum 
        isAlive = false
    }
    if (!isAlive){
        cards = []
        console.log(cards)
        cardsEl.textContent = "Cards: "
        sum = 0
        sumEl.textContent = "Sum: "
        isAlive = true
    }
    
}
//only used when the start game button is clocked
function startGame(){
    firstCard = getRandomCard();
    lastCard = getRandomCard();
    cards.push(firstCard)
    cards.push(lastCard)
    cardsEl.innerText += " " + firstCard;
    sum = cards[0] + cards[1]
    playGame()
}
