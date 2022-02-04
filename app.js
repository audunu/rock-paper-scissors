let playerScore = 0;
let computerScore = 0;


const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

rockButton.addEventListener("click", click("Rock"));
paperButton.addEventListener("click", click("Paper"));
scissorsButton.addEventListener("click", click("Scissors"));

function click(selection) {
    if (playerScore < 3 || computerScore < 3) {
        const playerSelection = selection;
        const computerSelection = computerPlay();

        if (playerSelection === computerSelection) {

            console.log(`draw. play again! both played ${playerSelection}`)
        }
        else if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Scissors" && computerSelection === "Paper") {

            playerScore += 1;
            console.log(`you win! ${playerSelection} beats ${computerSelection}`)
        }
        else {

            computerScore += 1;
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
