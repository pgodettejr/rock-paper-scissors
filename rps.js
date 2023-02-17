const gameInfo = document.querySelector('#game-info');
const result = document.querySelector('#result');
const score = document.querySelector('#score');
const winner = document.querySelector('#winner');

let computerScore = 0;
let playerScore = 0;

// Clickable buttons that initiate playing a round of RPS
const btnR = document.querySelector('#btnR');
btnR.addEventListener('click', () => {
  playRound("btnR");
});

const btnP = document.querySelector('#btnP');
btnP.addEventListener('click', () => {
  playRound("btnP");
});

const btnS = document.querySelector('#btnS');
btnS.addEventListener('click', () => {
  playRound("btnS");
});

const resultsDiv = document.querySelector('#results');

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

// Plays a round of RPS, displays scores & shows who wins/loses. Draw statement isn't triggering at all
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    let roundResult = '';

    if(playerSelection === computerSelection) {
        roundResult = "Draw";
    } else if(playerSelection === "btnR" && computerSelection === "paper") {
        computerScore++;
        roundResult = "You Lose. Paper beats Rock";
    } else if(playerSelection === "btnR" && computerSelection === "scissors") {
        playerScore++;
        roundResult = "You Win! Rock beats Scissors";
    } else if(playerSelection === "btnP" && computerSelection === "scissors") {
        computerScore++;
        roundResult = "You Lose. Scissors beats Paper";
    } else if(playerSelection === "btnP" && computerSelection === "rock") {
        playerScore++;
        roundResult = "You Win! Paper beats Rock";
    } else if(playerSelection === "btnS" && computerSelection === "rock") {
        computerScore++;
        roundResult = "You Lose. Rock beats Scissors";
    } else if(playerSelection === "btnS" && computerSelection === "paper") {
        playerScore++;
        roundResult = "You Win! Scissors beats Paper";
    } else {
        roundResult = "There are no other possible scenarios. How did you get here?";
    }

    result.textContent = `Result: ${roundResult}`;
    score.textContent = `Score: Player ${playerScore} - ${computerScore} Computer`;

    if(playerScore === 5) {
        winner.textContent = "You Win!";
        disableButtons();
    } else if(computerScore === 5) {
        winner.textContent = "You Lose";
        disableButtons();
    }
}

console.log(`Player Score: ${playerScore}\nComputer Score: ${computerScore}`);

// Game itself that plays rounds until someone wins 5 rounds. Do we still need the loop even after UI is added?
/* function game() {
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

game(); */