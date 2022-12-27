// Player's choice
function getPlayerChoice() {
    let playerChoice = prompt("Please enter a choice: rock, paper, scissors").toUpperCase();
    return playerChoice
}

// Computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice
}

// These need to get used in another function. Likely under the game function in the for loop
let computerScore = 0;
let playerScore = 0;
let roundResult = playRound();
let score = getScore();
let finish = endGame();

// Plays a round of RPS & shows who wins/loses. Look for easier, shorter, faster code.
function playRound(playerSelection, computerSelection) {
    if(playerSelection === "rock" && computerSelection === "paper" ) {
        return String("You Lose. Paper beats Rock")
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
        return String("You Win! Rock beats Scissors")
    } else if(playerSelection === "rock" && computerSelection === "rock") {
        return String("Draw")
    } else if(playerSelection === "paper" && computerSelection === "scissors") {
        return String("You Lose. Scissors beats Paper")
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        return String("You Win! Paper beats Rock")
    } else if(playerSelection === "paper" && computerSelection === "paper") {
        return String("Draw")
    } else if(playerSelection === "scissors" && computerSelection === "rock") {
        return String("You Lose. Rock beats Scissors")
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        return String("You Win! Scissors beats Paper")
    } else if(playerSelection === "scissors" && computerSelection === "scissors") {
        return String("Draw")
    } else {
        return String("There are no other possible scenarios. How did you get here?")
    }
}

// Need score function. This is just an example. DO NOT USE!
/* function score(a = playerScore, b = computerScore) {
    console.log("Your score: " + a + "\n" + "Computer score: " + b)
} */

function getScore() {
    if (result.includes('win')) {
        return playerScore += 1;
    } else if (result.includes('lose')) {
        return computerScore += 1;
    }
}

// Function that ends the game once a player wins 5 times. To be used later in game() function

function endGame() {
    if(playerScore === 5) {
        return String("You Win!")
    } else if(computerScore === 5) {
        return String("You Lose")
    }
}

// Game itself that plays rounds until someone wins 5 rounds
function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
	    console.log(roundResult)
        console.log(score)
        console.log(finish)
        // score();
    }   
}


// Suna: you are really close. Look at arguments you passed to playRound function inside game()

// +Eduardo06sp, Suna, TheOne14

/* No arguments at all doesn't work. I think it's the same as when the arguments from that function 
are in there */

/* Changed existing code to Discord answer (Charles Yoo). Moved the const statements inside the for 
loop and left the let statements in global scope. Prompt comes up 5 times, but still doesn't keep 
score in the console (game shows 5 times being played but both players scores remain at 0). Tried to 
also move the let statements under the for loop, but then prompt only comes up once and I get a 
ref error playerScore is not defined at the score function, when score is called and when game is 
called. Possibly due to new scope? */

game();