//
const choices = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return choices[~~(Math.random() * choices.length)];
}

const computerSelection = computerPlay();
const playerSelection = prompt("Rock, Paper or Scissors", '');
let cpuScore = 0;
let playerScore = 0;

function game() {
    if (playerScore === 5 || cpuScore === 5) {
        alert("Thank you for playing!")
    } else {
        oneRound();
    }
}

function oneRound(playerSelection, computerSelection) {

    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        alert("Tie Game!");
    } else if ((playerSelection == 'rock' && computerSelection == 'paper') || 
    (playerSelection == 'paper' && computerSelection == 'scissors') || 
    (playerSelection == 'scissors' && computerSelection == 'rock')) {

        cpuScore = ++cpuScore;
        if (cpuScore === 1) {
            console.log(cpuScore + " You lose. One point for Computer");
            return prompt('');
        } else if (cpuScore === 2) {
            console.log(cpuScore + " Don't mind, don't mind!");
            return playerSelection;
        } else if (cpuScore === 3) {
            console.log(cpuScore + " Tough luck. Three points for Computer.");
            return playerSelection;
        } else if (cpuScore === 4) {
            console.log(cpuScore + " Oof another one. But there's still chance!");
            return playerSelection;
        } else {
            console.log("Game over! Computer wins.");
        }

    } else {
        playerScore = ++playerScore;
        if (playerScore === 1) {
            console.log(playerScore + " Nice. One point for you");
            return prompt('');
        } else if (playerScore === 2) {
            console.log(playerScore + " Mou ikkai!");
            return playerSelection;
        } else if (playerScore === 3) {
            console.log(playerScore + " Wow! You're amazing. Keep going!");
            return playerSelection;
        } else if (playerScore === 4) {
            console.log(playerScore + " Almost there!");
            return playerSelection;
        } else {
            console.log("Game over! You win. Congratulations!");
            return playerSelection;
        }
    }
}

function scoreCpu() {

} 


oneRound(playerSelection, computerPlay());




