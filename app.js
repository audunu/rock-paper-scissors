let playerScore = 0;
let computerScore = 0;
const numberOfGames = 5;
let gamesPlayed = 0;



function computerPlay() {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return "Rock";
    }else if (random === 1) {
        return "Paper";
    }else {
        return "Scissors";
    }
}

function capitalizeFirst(str) {
    const str2 = str.toLowerCase();
    const str3 = str2.charAt(0).toUpperCase() + str2.slice(1);
    return str3;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalizeFirst(playerSelection);
    gamesPlayed += 1;
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

function game() {
    while (gamesPlayed < numberOfGames) {
        const playerChoice = prompt("Rock, Paper or Scissors?");
        playRound(playerChoice, computerPlay());
    }
    if (playerScore < computerScore) {
        console.log(`computer wins ${computerScore} vs ${playerScore}`)
    }
    else if (computerScore < playerScore) {
        console.log(`player wins ${playerScore} vs ${computerScore}`)
    }
    else {
        console.log(`it's a draw! ${playerScore} vs ${computerScore}`)
    }
}

game();

