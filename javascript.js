function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];
  return computerSelection;
}

// have the player pick rock, paper, or scissors
// have the computer pick rock, paper, or scissors
// rock > scissors | paper > rock | scissors > paper
// declare a winner
// make it case-insensitive
