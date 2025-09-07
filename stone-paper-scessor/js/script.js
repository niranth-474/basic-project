
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const resultDisplay = document.getElementById('result-display');
const choiceButtons = document.querySelectorAll('.choice-btn');
const resetButton = document.getElementById('reset-btn');


let playerScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissors'];


function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}


function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'draw';
  }


  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'rock')
  ) {
    return 'win';
  } else {
    return 'lose';
  }
}


function updateGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const outcome = determineWinner(playerChoice, computerChoice);

  let resultText = '';
  resultDisplay.classList.remove('win', 'lose', 'draw'); // Remove previous outcome classes

  if (outcome === 'win') {
    playerScore++;
    resultText = `You chose ${playerChoice}, Computer chose ${computerChoice}. You Win! 🎉`;
    resultDisplay.classList.add('win');
  } else if (outcome === 'lose') {
    computerScore++;
    resultText = `You chose ${playerChoice}, Computer chose ${computerChoice}. You Lose! 😔`;
    resultDisplay.classList.add('lose');
  } else {
    resultText = `You chose ${playerChoice}, Computer chose ${computerChoice}. It's a Draw! 🤝`;
    resultDisplay.classList.add('draw');
  }

  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
  resultDisplay.textContent = resultText;
}


function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
  resultDisplay.textContent = 'Make your move!';
  resultDisplay.classList.remove('win', 'lose', 'draw'); // Clear result styling
}


choiceButtons.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.id;
    updateGame(playerChoice);
  });
});


resetButton.addEventListener('click', resetGame);