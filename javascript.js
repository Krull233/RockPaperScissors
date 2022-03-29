const choices = ["rock", "paper", "scissors"];

function computerPlay(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound() {
  computerSelection = computerPlay(choices);
  `Computer has chosen ${computerSelection}`;
  playerSelection = prompt().toLowerCase();
  `Player has chosen ${playerSelection}`;
  if (playerSelection == "rock" && computerSelection == "scissors") {
    result = "Player has won this round!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    result = "Player has won this round!";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    result = "Player has won this round!";
  } else if (playerSelection == computerSelection) {
    result = "It's a tie!";
  } else {
    result = "Computer has won this round!";
  }
  return result;
}
