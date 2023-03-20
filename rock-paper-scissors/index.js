// third commit 3.19.23 - added randomizer for computer choice options
// fourth commit, still editing and finishing up playRound function


// this is the permanent options
const optionChoices = ["rock","paper","scissors"];



function getPlayerChoice() {

}
// this is the random computer picker
function getComputerChoice() {
    const randomChoice = optionChoices[Math.floor(Math.random() * optionChoices.length)];
    console.log(randomChoice);
}

getComputerChoice()



// this determines who wins the matchup
function playRound (playerSelection, computerSelection) { 
    if (playerSelection === computerSelection) {
        return console.log("draw");
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return console.log("win");
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return console.log("lose");
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return console.log("win");
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return console.log("lose");
    }    
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return console.log("win");
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return console.log("lose");
    }

    }

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));



function game() {

}


