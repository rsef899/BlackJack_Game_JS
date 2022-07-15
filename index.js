let firstcard = Math.floor(Math.random() * 18) + 2
let lastcard = Math.floor(Math.random() * 18) + 2
let sum = hasBlackJacked = false
let message = ""

if ((firstcard + lastcard) < 21){
    message = 'do you want to draw a new card'
}
else if ((firstcard + lastcard) === 21){
    message = "you got black jack"
    console.log(message)
    hasBlackJaceked = true
}
else {
    message = "your out of the game"
    console.log(message)
}
