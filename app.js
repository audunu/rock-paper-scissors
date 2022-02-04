const selectionButtons = document.querySelectorAll('[data-selection]')
let computerScore = document.querySelector('[data-computer-score]')
let playerScore = document.querySelector('[data-player-score]')
let playerChoice = document.querySelector('[data-playerChoice]')
let computerChoice = document.querySelector('[data-computerChoice]')

const overView = [
  {
    name: 'rock',
    beats: 'scissors',
  },
  {
    name: 'paper',
    beats: 'rock',
  },
  {
    name: 'scissors',
    beats: 'paper',
  },
]

selectionButtons.forEach(element => {
  element.addEventListener('click', e => {
    const selectionName = element.dataset.selection
    const correctObject = overView.find(element => element.name === selectionName)
    makeSelection(correctObject)
  })
})

function makeSelection(selectionName) {
  const playerSelection = selectionName
  const computerSelection = randomSelection()
  playerChoice.innerText = playerSelection.name
  computerChoice.innerText = computerSelection.name

  let winner = isWinner(playerSelection, computerSelection)
  if (playerSelection.name === computerSelection.name) {
    return
  } else if (winner) {
    playerScore.innerText = parseInt(playerScore.innerText) + 1
    if (playerScore.innerText == 3) {
      alert('you won')
      restartGame()
    }
  } else if (!winner) {
    computerScore.innerText = parseInt(computerScore.innerText) + 1
    if (computerScore.innerText == 3) {
      alert('computer won')
      restartGame()
    }
  }
}

function restartGame() {
  playerScore.innerText = 0
  computerScore.innerText = 0
}

function isWinner(playerSelection, computerSelection) {
  return playerSelection.beats === computerSelection.name
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * overView.length)
  return overView[randomIndex]
}
