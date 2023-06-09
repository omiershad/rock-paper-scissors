

const options = ["rock", "paper", "scissors"];


const rockButton = document.querySelector('.rock-btn'); 
const paperButton = document.querySelector('.paper-btn'); 
const scissorsButton = document.querySelector('.scissors-btn');
const outcomeDiv = document.querySelector('.outcome');
let scoreboardEl = document.getElementById('scoreboard-el');
const totalDiv = document.querySelector('.win-el');

function randomComputerOption() {
    return options[Math.floor(Math.random() * options.length)];
}



function playRound(playerSelection) {
    const compChoice = randomComputerOption();
    console.log(compChoice);
    const winner = checkWinner(playerSelection,compChoice);
    console.log(winner);
    const score = checkScore(winner);
    console.log(score);
    return score;
}

rockButton.addEventListener('click' , () => {
    const score = playRound('rock');
    const tallyScore = checkScore(score.winner);
    console.log(tallyScore);
    const finalWinner = gameWin();
    console.log(finalWinner);
})

paperButton.addEventListener('click' , () => {
    const score = playRound('paper');
    const tallyScore = checkScore(score.winner);
    console.log(tallyScore);    
    const finalWinner = gameWin();
    console.log(finalWinner);

})

scissorsButton.addEventListener('click' , () => {
    const score = playRound('scissors');
    const tallyScore = checkScore(score.winner);
    console.log(tallyScore);
    const finalWinner = gameWin();
    console.log(finalWinner);
})



function checkWinner(choiceP,choiceC) {
    if(choiceP === choiceC) {
        const p = document.createElement('p');
        p.innerText = "Draw!";
        p.classList.add("single-round");
        outcomeDiv.appendChild(p);
        return "Draw!"
    }
    else if( 
        (choiceP === "rock" && choiceC === "scissors") || 
        (choiceP === "paper" && choiceC === "rock") || 
        (choiceP === "scissors" && choiceC === "paper")
        ) {
        const p = document.createElement('p');
        p.innerText = "You Win!";
        p.classList.add("single-round");
        outcomeDiv.appendChild(p);
        return "You Win!";
    } 
    else {
        const p = document.createElement('p');
        p.innerText = "You Lose!";
        p.classList.add("single-round");
        outcomeDiv.appendChild(p);
        return "You Lose!";
    }
}

let playerScore = 0;
let computerScore = 0;

function checkScore(winner) {
    if (winner === "You Win!") {
        playerScore++;
}
    else if (winner === "You Lose!") {
        computerScore++;
    }
    else {
    }

    const scoreText = "Player Score: " + playerScore + " Computer Score: " + computerScore;
    scoreboardEl.innerText = scoreText;

    return scoreText;
}

function gameWin () {
    if (playerScore === 5) {
        const winGame = document.createElement('p');
        winGame.innerText = "Game Over! Player Wins!";
        winGame.classList.add("win-round");
        totalDiv.appendChild(winGame);
        return "Game Over! Player Wins!"
    }
    else if (computerScore === 5) {
        const winGame = document.createElement('p');
        winGame.innerText = "Game Over! Computer Wins!";
        winGame.classList.add("win-round");
        totalDiv.appendChild(winGame);
        return "Game Over! Computer Wins!"
    }
}

const restartEl = document.querySelector(".restart-el");
restartEl.addEventListener('click', () =>{
    location.reload();
})