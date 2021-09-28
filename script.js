const choices = ["Rock", "Paper", "Scissors"];
let computerSelection;
let playerSelection;
let cpuScore = 0;
let playerScore = 0;

function computerPlay() {
    return choices[~~(Math.random() * choices.length)];
}

function showWinner() {
    if (playerScore === 5) {
        alert("Congratulations! You win. You defeat computer " + playerScore + " to " + cpuScore);
    } else {
        alert("You lose to computer " + cpuScore + " to " + playerScore);
    }
}

function game() {
    
    if (playerScore === 5 || cpuScore === 5) {
        showWinner();
    } else if (playerScore === 4 || cpuScore === 4) {
        oneRound();
    } else if (playerScore === 3 || cpuScore === 3) {
        oneRound();
    } else if (playerScore === 2 || cpuScore === 2) {
        oneRound();
    } else if (playerScore === 1 || cpuScore === 1) {
        oneRound();
    } else {
        oneRound();
    }
}

function oneRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase();
    playerSelection = prompt("Rock, Paper, Scissors", '').toLowerCase();
    if (playerSelection == computerSelection) {
        console.log("Computer select " + computerSelection + ". It's a tie! Score is still " + playerScore + " for player and " + cpuScore + " for computer.");
        oneRound();
    } else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'rock')) {
        cpuScore += 1;
        console.log("Computer select " + computerSelection + ". Computer win. Score is " + playerScore + " for player and " + cpuScore + " for computer.");
        game();
    } else {
        playerScore += 1;
        console.log("Computer select " + computerSelection + ". Player win! Score is " + playerScore + " for player and " + cpuScore + " for computer.");
        game();
    }
}

game();