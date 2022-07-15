let firstCard;
let lastCard;
let sum;
let hasBlackJacked = false
let firstPlayed = false;

let messageEl = document.getElementById("message-el")

//--------selecting the sum element
//let sumEl = document.getElementById("sum-el")
//same as by element but this searches the code for a selector,**Class
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

function addCard(){
    lastCard = 5
    sum += lastCard
    startGame()
}

function startGame(){
    if (firstPlayed == false){
        firstCard = 12;
        lastCard = 8;
        cardsEl.innerText += " " + firstCard;
        sum = firstCard + lastCard
        firstPlayed = true;
    }

    cardsEl.innerText += " " + lastCard
    if (sum === 21){
        console.log("Blackjacked")
        hasBlackJacked = true
    }
    else if (sum < 21){
        console.log("Next Hand")
        sumEl.textContent = "Sum: " + sum 
    }
    else{
        console.log("Busted")
        sumEl.textContent = "Sum: " + sum 
    }
    
}