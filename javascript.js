const choices = ["rock", "paper", "scissors"];

function computerPlay(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound() {
  playerSelection = prompt().toLowerCase();
  console.log(`Player has chosen ${playerSelection}`);
  computerSelection = computerPlay(choices);
  console.log(`Computer has chosen ${computerSelection}`);
  if (playerSelection == "rock" && computerSelection == "scissors") {
    return "Player has won this round!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "Player has won this round!";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "Player has won this round!";
  } else if (playerSelection == computerSelection) {
    return "It's a tie!";
  } else {
    return "Computer has won this round!";
  }
}

function game() {
  for (let g = 0; g < 5; g++) {
    console.log(playRound());
  }
}
