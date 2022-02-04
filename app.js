let playerScore = 0
let computerScore = 0

const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')
const playerScoreElement = document.querySelector('.playerScore')
const computerScoreElement = document.querySelector('.computerScore')

rockButton.addEventListener('click', () => {
  clicked('Rock')
})
paperButton.addEventListener('click', () => {
  clicked('Paper')
})
scissorsButton.addEventListener('click', () => {
  clicked('Scissors')
})

function restart() {
  playerScore = 0
  computerScore = 0
}

function clicked(selection) {
  if (playerScore === 3 || computerScore === 3) {
    alert('game over')
    return restart()
  }

  if (playerScore < 3 || computerScore < 3) {
    const playerSelection = selection
    const computerSelection = computerPlay()

    if (playerSelection === computerSelection) {
      console.log(`draw. play again! both played ${playerSelection}`)
    } else if (
      (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
      (playerSelection === 'Paper' && computerSelection === 'Rock') ||
      (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
      playerScore += 1
      playerScoreElement.innerHTML = playerScore
      console.log(`you win! ${playerSelection} beats ${computerSelection}`)
    } else {
      computerScore += 1
      computerScoreElement.innerHTML = computerScore
      console.log(`you lose! ${computerSelection} beats ${playerSelection}`)
    }
  }
}

function computerPlay() {
  const random = Math.floor(Math.random() * 3)
  if (random === 0) {
    return 'Rock'
  } else if (random === 1) {
    return 'Paper'
  } else {
    return 'Scissors'
  }
}
