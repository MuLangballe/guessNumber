console.log("jeg er i guessnumber")

const lblMessage = document.querySelector(".message")
console.log(lblMessage)
console.log(lblMessage.textContent)

const lblNumber = document.querySelector(".number")
console.log(lblNumber)

let lblScore = document.querySelector(".score")
console.log(lblScore)

let lblHighscore = document.querySelector(".highscore")
console.log(lblHighscore)

const inpGuess = document.querySelector(".guess")
console.log(inpGuess)

const pbAgain = document.querySelector(".again")
console.log(pbAgain)

const pbCheck = document.querySelector(".check")
console.log(pbCheck)

let bdy = document.querySelector("body")

window.addEventListener("load", initApp)

function initApp(){
    setUpEventlistener()
    resetScore()
    resetBackgroundColor()
}

function resetScore(){
    lblScore.textContent = 20
    lblHighscore.textContent = 0
}

let ranNum = 0;
function generateNumber(){
    ranNum = Math.trunc(Math.random()*20) + 1
    lblNumber.textContent = ranNum
}


function checkGuess(){
    const guess = inpGuess.value
   // debugger
    if (!guess){
        lblMessage.textContent = '?? No Number'
    } else if (guess == ranNum){
        lblMessage.textContent = 'You guessed right!'
        bdy.style.backgroundColor = "green"
        if (lblScore.textContent > lblHighscore.textContent){
            lblHighscore.textContent = lblScore.textContent;
        }
    } else if (guess > ranNum){
        lblMessage.textContent = 'Your guess is too high...'
        newScore = lblScore.textContent - 1;
        checkScore(newScore)
    } else if (guess < ranNum){
        lblMessage.textContent = 'Your guess is too low...'
        newScore = lblScore.textContent - 1;
        checkScore(newScore)
    }
}

function checkScore(newScore){
    if (newScore <= 0){
        lblMessage.textContent = 'You loose... Try again?'
    }
}

function resetBackgroundColor(){
    bdy.style.backgroundColor = "black"
}

function youWin(){
    bdy.style.backgroundColor = "green"
    
}


function setUpEventlistener() {
    pbAgain.addEventListener("click", generateNumber)
    pbAgain.addEventListener("click", resetBackgroundColor)
    pbCheck.addEventListener("click", checkGuess)
}
