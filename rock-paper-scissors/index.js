

const options = ["rock", "paper", "scissors"];


function playerOption() {
    input = prompt("Type Rock, Paper, or Scissors");
    return input.toLowerCase();
    }

function validateInput(choice) {
    return options.includes(choice)
}


function randomComputerOption() {
    return options[Math.floor(Math.random() * options.length)];
}



function playRound() {
    const playerChoice = playerOption();
    const compChoice = randomComputerOption();
    const winner = checkWinner(playerChoice,compChoice);
    console.log(winner);
    const score = checkScore(winner);
    console.log(score);
}



function checkWinner(choiceP,choiceC) {
    if(choiceP === choiceC) {
        return "Draw!";
    }
    else if( 
        (choiceP === "rock" && choiceC === "scissors") || 
        (choiceP === "paper" && choiceC === "rock") || 
        (choiceP === "scissors" && choiceC === "paper")
        ) {
        return "You Win!";
    } 
    else {
        return "You Lose!";
    }
}

let playerScore = 0;
let computerScore = 0;

function checkScore(winner) {
    if (winner === "You Win!") {
        playerScore++;
        return "Player Score: " + playerScore + " Computer Score: " + computerScore;
}
    else if (winner === "You Lose!") {
        computerScore++;
        return "Player Score: " + playerScore + " Computer Score: " + computerScore;
    }
    else {
        return "Player Score: " + playerScore + " Computer Score: " + computerScore;
    }
}

function endWinner(numb1,numb2) {
    if (numb1 > numb2) {
        return "Player Wins The Game!"
    }
    else if (numb2 === numb1) {
        return "Nobody Wins! Its a Tie!"
    }
    else {
        return "Computer Wins the Game!"
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    const gameWinner = endWinner(playerScore,computerScore);
    console.log(gameWinner);
    console.log("Game Over!")
}

game();