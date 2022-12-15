function playerSelection() {
    let playerChoice = prompt("Please enter a choice: rock, paper, scissors").toUpperCase();
    return playerChoice
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice
}

// const playerSelection = "rock";
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
// Looking for easier, shorter, faster code.
    if(playerSelection === "rock" && computerSelection === "paper" ) {
        return String("You Lose! Paper beats Rock");
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
        return String("You Win! Rock beats Scissors")
    } else if(playerSelection === "rock" && computerSelection === "rock") {
        return String("Draw!")
    } else if(playerSelection === "paper" && computerSelection === "scissors") {
        return String("You Lose! Scissors beats Paper")
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        return String("You Win! Paper beats Rock")
    } else if(playerSelection === "paper" && computerSelection === "paper") {
        return String("Draw!") 
    } else if(playerSelection === "scissors" && computerSelection === "rock") {
        return String("You Lose! Rock beats Scissors")
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        return String("You Win! Scissors beats Paper")
    } else if(playerSelection === "scissors" && computerSelection === "scissors") {
        return String("Draw!")
    } else {
        return String("There are no other possible scenarios. How did you get here?")
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }   
}
// Suna: you are really close. Look at arguments you passed to playRound function inside game()

// +Eduardo06sp, Suna, TheOne14

/* No arguments at all doesn't work. I think it's the same as when the arguments from that function 
are in there */

// console.log(game);