let firstCard = 10
let lastCard = 10
let hasBlackJacked = false

function startGame(){
    let sum = firstCard + lastCard
    if (sum === 21){
        console.log("Blackjacked")
        hasBlackJacked = true
    }
    else if (sum < 21){
        console.log("Next Hand")
    }
    else{
        console.log("Busted")
    }
    
}