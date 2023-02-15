// Player's choice
function getPlayerChoice() {
    let playerChoice = prompt("Please enter a choice: Rock, Paper, Scissors").toLowerCase();
    return playerChoice
}

// Computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice
}

let computerScore = 0;
let playerScore = 0;

// Plays a round of RPS & shows who wins/loses
function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        console.log("Draw");
    } else if(playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        console.log("You Lose. Paper beats Rock");
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        console.log("You Win! Rock beats Scissors");
    } else if(playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        console.log("You Lose. Scissors beats Paper");
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        console.log("You Win! Paper beats Rock");
    } else if(playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        console.log("You Lose. Rock beats Scissors");
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        console.log("You Win! Scissors beats Paper");
    } else {
        console.log("There are no other possible scenarios. How did you get here?");
    }
}

// Game itself that plays rounds until someone wins 5 rounds
function game() {
    for (let i = 0; i < 12; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        if(playerScore === 5) {
            console.log("You Win!");
            break;
        } else if(computerScore === 5) {
            console.log("You Lose");
            break;
        }
    }   
}

game();