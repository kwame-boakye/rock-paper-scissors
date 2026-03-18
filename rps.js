
let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const scoreEl = document.getElementById('score');
const resultEl = document.getElementById('result');

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function updateScoreUI() {
    scoreEl.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
}

function setControlsEnabled(enabled) {
    rockBtn.disabled = !enabled;
    paperBtn.disabled = !enabled;
    scissorsBtn.disabled = !enabled;
}

function announceWinnerUI() {
    if (humanScore === 5) {
        resultEl.textContent = `Game Over: You win! Final score - You: ${humanScore}, Computer: ${computerScore}.`;
    } else if (computerScore === 5) {
        resultEl.textContent = `Game Over: You lose! Final score - You: ${humanScore}, Computer: ${computerScore}.`;
    }
}

function playRound(humanChoice, computerChoice) {
    if (gameOver) return;

    humanChoice = humanChoice.toLowerCase();

    // It's a tie
    if (humanChoice === computerChoice) {
        resultEl.textContent = `Tie: You both chose ${humanChoice}.`;
        return;
    }

    const humanWins =
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper');

    if (humanWins) {
        humanScore++;
        resultEl.textContent = `You win: ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultEl.textContent = `You lose: ${computerChoice} beats ${humanChoice}.`;
    }

    updateScoreUI();

    if (humanScore === 5 || computerScore === 5) {
        gameOver = true;
        setControlsEnabled(false);
        announceWinnerUI();
    }
}

function init() {
    if (!scoreEl || !resultEl || !rockBtn || !paperBtn || !scissorsBtn) return;

    updateScoreUI();
    setControlsEnabled(true);

    rockBtn.addEventListener('click', () => playRound('rock', getComputerChoice()));
    paperBtn.addEventListener('click', () => playRound('paper', getComputerChoice()));
    scissorsBtn.addEventListener('click', () => playRound('scissors', getComputerChoice()));
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
