// third commit 3.19.23 - added randomizer for computer choice options
// fourth commit, still editing and finishing up playRound function
// fifth commit, fixed const variables for new returns in player and comp choices
// sixth commit, fixed winnings of rounds and implemented prompt to work: next is to brush up details and work on multiple rounds
// 7th commit, fixed majority and now finish up last part of totalwinner


// function game() {

// }

const options = ["rock", "paper", "scissors"];


function playerOption() {
    input = prompt("Type Rock, Paper, or Scissors");
    return input.toLowerCase();
    }

    // const playerChoice = playerOption();

    // console.log(playerChoice);

    // playerOption();


function randomComputerOption() {
    return options[Math.floor(Math.random() * options.length)];
}

// const compChoice = randomComputerOption();

// console.log(compChoice);

function playRound() {
    const playerChoice = playerOption();
    const compChoice = randomComputerOption();
    console.log(compChoice);
    const winner = checkWinner(playerChoice,compChoice);
    const score = checkScore(winner);
    console.log(score);
}

// playRound();



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
        return "Player Score: " + playerScore;
}
    else if (winner === "You Lose!") {
        computerScore++;
        return "Computer Score: " + computerScore;
    }
    else {
        return "Computer Score: " + computerScore + " Player Score: " + playerScore;
    }
}

function totalWinner(total);
    if (total)


function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    console.log("Game Over!")
}

game();