var currentPlayer = "X"; // Start with Player X
var availableTerms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var winPatterns = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9], // Rows
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9], // Columns
  [1, 5, 9],
  [3, 5, 7], // Diagonals
];
var flag = 1; // 1 for Player X's turn, 0 for AI's turn
var dots = window.setInterval(function () {
  var wait = document.getElementById("wait");
  if (wait.innerHTML.length > 3)
    wait.innerHTML = "";
  else
    wait.innerHTML += ".";
}, 500);
function makeMove(index) {
  if (document.getElementById(`b${index}`).value === "" && flag === 1) {
    document.getElementById(`b${index}`).value = "X";
    availableTerms.splice(availableTerms.indexOf(index), 1);
    flag = 0;
    if (!checkWin("X")) {
      if (availableTerms.length > 0) {
        aiPlay();
      } else {
        document.getElementById("print").innerHTML = "Match Tie";
      }
    }
  }
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function aiPlay() {
  await sleep(300);
    var randIndex = Math.floor(Math.random() * availableTerms.length);
    var play = availableTerms[randIndex];
    document.getElementById(`b${play}`).value = "O";
    availableTerms.splice(randIndex, 1);
  flag = 1;
  if (checkWin("O")) {
    document.getElementById("print").innerHTML = "Player 0 won";
  }
}

function checkWin(player) {


  for (var i = 0; i < winPatterns.length; i++) {
    var pattern = winPatterns[i];
    if (
      document.getElementById(`b${pattern[0]}`).value === player &&
      document.getElementById(`b${pattern[1]}`).value === player &&
      document.getElementById(`b${pattern[2]}`).value === player
    ) {
      document.getElementById(`b${pattern[0]}`).style.color = "red";
      document.getElementById(`b${pattern[1]}`).style.color = "red";
      document.getElementById(`b${pattern[2]}`).style.color = "red";
      disableButtons();
      document.getElementById("print").innerHTML = `Player ${player} won`;
      return true;
    }
  }
  // Switch to the other player
  currentPlayer = currentPlayer === "O" ? "X" : "O";
  if (currentPlayer == "O") {
    document.getElementById("print").innerHTML = `
🅾️ to Move`;
    document.getElementById("aiStats").innerHTML = "<span>AI is thinking </span><span id='wait'></span>";
  } else {
    document.getElementById("print").innerHTML = `
❌ to Move`;
    document.getElementById("aiStats").innerHTML = "The AI ran 0 simulations and won 0 %";
  }
  return false;
}

function disableButtons() {
  for (var i = 1; i <= 9; i++) {
    document.getElementById(`b${i}`).disabled = true;
  }
}

function resetGame() {
  location.reload();
  availableTerms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  document.getElementById("print").innerHTML = "";
  flag = 1; // Reset to Player X's turn
}