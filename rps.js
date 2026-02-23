
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    const choice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
    if (['rock', 'paper', 'scissors'].includes(choice)) {
        return choice;
    } else {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    )
        {
            humanScore++;
            console.log('You win! ${humanChoice} beats ${comptuerChoice}.');
        }
        else {
            computerScore++;
            console.log('You lose! ${computerChoice} beats ${humanChoice}.');
        }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log('Final Score - You: ${humanScore}, Computer: ${computerScore}.');
    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry! You lose the game!");
    } else {
        console.log("It's a tie game!");
    }
}


playGame();
