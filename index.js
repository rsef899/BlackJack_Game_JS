let firstCard;
let lastCard;
let sum = 0;
let hasBlackJacked = false
let isAlive = true
//array 
let cards =[];
let messageEl = document.getElementById("message-el")
//creating the dom for the text box
const input = document.getElementById('bet-amount')
let player = {
    bet: 0,
}

//check if the user needs to make a bet
checkbet()
function checkbet(){
    document.getElementById("startButton").style.visibility = "hidden"
    if (player.bet == 0){
        makeBet()
    }
}

//check for teh users enter
function makeBet(){
    document.getElementById("bet-amount").style.visibility = "visible"
    //listenign for an evnet on the input dom
    input.addEventListener('keyup', (enterPressed) => {
    //listenign for the enter button
    if(enterPressed.keyCode === 13){
        player.bet = input.value
        document.getElementById("bet-el").textContent = "Bet Amount: " + player.bet
        console.log(player.bet)
        document.getElementById("startButton").style.visibility = "visible"
        document.getElementById("bet-amount").style.visibility = "hidden"
        
    }
})
}



//--------selecting the sum element
//let sumEl = document.getElementById("sum-el")
//same as by element but this searches the code for a selector,**Class
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
document.getElementById("newCardButton").style.visibility = "hidden"
document.getElementById("result-el").style.visibility = "hidden"

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

//add card to the cards array
function addCard(){
    lastCard = getRandomCard()
    cards.push(lastCard)
    sum += lastCard
    playGame()
}


function playGame(){

    document.getElementById("bet-el").textContent = "Bet Amount = " + player.bet
    document.getElementById("result-el").style.visibility = "visible"
    document.getElementById("result-el").textContent = ""
    cardsEl.innerText += " " + lastCard
    if (sum === 21){
        console.log("Blackjacked")
        hasBlackJacked = true
        document.getElementById("result-el").textContent = "21! You Blackjacked!, play again"
        isAlive = false
        player.bet = 0;
        document.getElementById("startButton").style.visibility = "hidden"
        checkbet()
    }
    else if (sum < 21){
        console.log("Next Hand")
        sumEl.textContent = "Sum: " + sum 
        document.getElementById("result-el").textContent = " pickup a new card"
    }
    else{
        console.log("Busted")
        sumEl.textContent = "Sum: " + sum 
        document.getElementById("result-el").textContent = "you got " + sum + " You Busted Play A new game"
        isAlive = false
        player.bet = 0;
        document.getElementById("startButton").style.visibility = "hidden"
        checkbet()
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

//only for the startign of the game
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
    document.getElementById("newCardButton").style.top = "5px"
   
}
