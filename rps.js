function getComputerChoice() {
    return String("rock", "paper", "scissors");
}

// Check back on this first function later to see if it actually works in Console. Is String.random a thing?

function playRound(playerSelection, computerSelection) {
// My code for this goes here. Can do "if else" but that is very long. Looking for easier, shorter, faster code.
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

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
