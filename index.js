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
document.getElementById("newCardButton").style.visibility = "hidden"

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
    document.getElementById("result-el").textContent = ""
    cardsEl.innerText += " " + lastCard
    if (sum === 21){
        console.log("Blackjacked")
        hasBlackJacked = true
        document.getElementById("result-el").textContent = " You Blackjacked!, play again"
        isAlive = false
    }
    else if (sum < 21){
        console.log("Next Hand")
        sumEl.textContent = "Sum: " + sum 
        document.getElementById("result-el").textContent = " pickup a new card"
    }
    else{
        console.log("Busted")
        sumEl.textContent = "Sum: " + sum 
        document.getElementById("result-el").textContent = "You Busted Play A new game"
        isAlive = false
    }
    if (!isAlive){
        cards = []
        cardsEl.textContent = "Cards: "
        sum = 0
        sumEl.textContent = "Sum: "
        isAlive = true
        document.getElementById("startButton").removeAttribute("style")
        document.getElementById("newCardButton").style.visibility = "hidden"
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

    //removing the start game button when the game has started adn mocign the new card button up
    document.getElementById("startButton").style.visibility = "hidden"
    document.getElementById("startButton").style.bottom = "1000px"
    document.getElementById("newCardButton").style.visibility = "visible"
    document.getElementById("newCardButton").style.top = "6px"
   
}
