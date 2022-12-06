function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice
}

/* First function picks "rock" every time when it should be random. 
   String.random is NOT a function, therefore is not a solution. 
   random function only works with numbers, even if you try to 
   group strings in let/var (not a solution) */

const playerSelection = "rock";
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


console.log(playRound(playerSelection, computerSelection));