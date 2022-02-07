let playerScore = 0;
let computerScore = 0;
let round = 0;


const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const playerScoreElement = document.querySelector('.playerPoints');
const computerScoreElement = document.querySelector('.computerPoints');
const playerImageElement = document.querySelector('.playerImage');
const computerImageElement = document.querySelector('.computerImage');
const h2Element = document.querySelector('h2');
const h3Element = document.querySelector('h3');

rockButton.addEventListener("click", () => clicked("Rock"));
paperButton.addEventListener("click", () => clicked("Paper"));
scissorsButton.addEventListener("click", () => clicked("Scissors"));


function changeImage(player, computer) {
    const playerLo = player.toLowerCase();
    const computerLo = computer.toLowerCase();
    playerImageElement.innerHTML = `<img src="images/${playerLo}.png" alt="rock"></img>`
    computerImageElement.innerHTML = `<img src="images/${computerLo}.png" alt="rock"></img>`
}

function changeText(winner = "noone", winnerSelection, LoserSelection) {
    if (winner === "noone") {
        h2Element.innerText = "Draw."
        h3Element.innerText = `${winnerSelection} ties with ${LoserSelection}`;
    }
    else {
        h2Element.innerText = `${winner} wins round ${round}.`;
        h3Element.innerText = `${winnerSelection} beats ${LoserSelection}`;
    }
}




function clicked(selection) {
    const playerSelection = selection;
    const computerSelection = computerPlay();
    round += 1;

    if (playerScore !== 3 && computerScore !== 3) {
        changeImage(playerSelection, computerSelection);

        if (playerSelection === computerSelection) {
            
            changeText("noone", playerSelection, computerSelection);
            console.log(`draw. play again! both played ${playerSelection}`)
        }
        else if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Scissors" && computerSelection === "Paper") {

            playerScore += 1;
            playerScoreElement.innerHTML = playerScore;
            changeText("Player", playerSelection, computerSelection);
            console.log(`you win! ${playerSelection} beats ${computerSelection}`)
        }
        else {

            computerScore += 1;
            computerScoreElement.innerHTML = computerScore;
            changeText("Computer", computerSelection, playerSelection);
            console.log(`you lose! ${computerSelection} beats ${playerSelection}`)
        }
    }
    else if (playerScore === 3) {
        console.log("player wins total");
    }
    else if (computerScore === 3) {
        console.log("computer wins total");
    }
}




function computerPlay() {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return "Rock";
    } else if (random === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
