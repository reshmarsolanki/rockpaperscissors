
let playerScore = 0;
let computerScore = 0;
let round = 0;
const maxRounds = 5;

const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');
const finalDiv = document.getElementById('final');

function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

function updateScore() {
  scoreDiv.textContent = `Round: ${round} | Your Score: ${playerScore} | Computer Score: ${computerScore}`;
}

function endGame() {
  if (playerScore > computerScore) {
    finalDiv.textContent = "Game Over! You won the game!";
  } else if (playerScore < computerScore) {
    finalDiv.textContent = "Game Over! Computer won the game!";
  } else {
    finalDiv.textContent = "Game Over! It's a tie!";
  }
}

function handleClick(playerSelection) {
  if (round >= maxRounds) return;
  const computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  round++;
  resultDiv.textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}. ${result}`;
  updateScore();
  if (round === maxRounds) {
    endGame();
    // Optionally disable buttons
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
  }
}

document.getElementById('rock').addEventListener('click', () => handleClick('rock'));
document.getElementById('paper').addEventListener('click', () => handleClick('paper'));
document.getElementById('scissors').addEventListener('click', () =