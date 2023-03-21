// third commit 3.19.23 - added randomizer for computer choice options
// fourth commit, still editing and finishing up playRound function
// fifth commit, fixed const variables for new returns in player and comp choices
// sixth commit, fixed winnings of rounds and implemented prompt to work: next is to brush up details and work on multiple rounds


// function getPlayerChoice() {

// }


// // this is the random computer picker
// function getComputerChoice() {
//     // this is the permanent options
//     const options = ["rock","paper","scissors"];
//     const randomChoice = options[Math.floor(Math.random() * options.length)];
//     console.log(randomChoice + " is the computer's");
// }

// // this determines who wins the matchup
// function playRound(playerSelection,computerSelection) { 

//     if (playerSelection === computerSelection) {
//         return 'draw';
//     }
//     else if (playerSelection === "rock" && computerSelection === "paper") {
//         return 'win';
//     }
//     else if (playerSelection === "rock" && computerSelection === "scissors") {
//         return 'lose';
//     }
//     else if (playerSelection === "paper" && computerSelection === "rock") {
//         return 'win';
//     }
//     else if (playerSelection === "paper" && computerSelection === "scissors") {
//         return 'lose';
//     }    
//     else if (playerSelection === "scissors" && computerSelection === "paper") {
//         return 'win';
//     }
//     else (playerSelection === "scissors" && computerSelection === "rock")
//         return 'lose';
//     }
    
//     const computerSelection = getComputerChoice();
//     const playerSelection = "rock";
//     console.log(playRound(playerSelection,computerSelection));



// function game() {

// }

const options = ["rock", "paper", "scissors"];



function game() {
    
}



function playerOption() {
    return prompt("Type Rock, Paper, or Scissors");
}



const playerChoice = playerOption();

console.log(playerChoice);

function randomComputerOption() {
    return options[Math.floor(Math.random() * options.length)];
}

const compChoice = randomComputerOption();

console.log(compChoice);



function playRound(playerChoice,compChoice) {
    if (playerChoice === compChoice) {
        return 'draw';
    }
    else if (playerChoice === "rock" && compChoice === "paper") {
        return 'win';
    }
    else if (playerChoice === "rock" && compChoice === "scissors") {
        return 'lose';
    }
    else if (playerChoice === "paper" && compChoice === "rock") {
        return 'win';
    }
    else if (playerChoice === "paper" && compChoice === "scissors") {
        return 'lose';
    }    
    else if (playerChoice === "scissors" && compChoice === "paper") {
        return 'win';
    }
    else (playerChoice === "scissors" && compChoice === "rock")
        return 'lose';
    }

const result = playRound(playerChoice,compChoice);

console.log(result);