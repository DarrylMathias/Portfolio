var currentPlayer = "X";// Start with Player X
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
var trickPatterns = [
  [1, 5, 7],
  [3, 5, 9],
  [1, 5, 3],
  [7, 5, 9]
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
let isValid = true;
let isValid1 = true;
var corners = [1, 3, 7, 9];
var play = corners[Math.floor(Math.random() * 4)];
function playSpecial() {
  // Check for player centre
  if (document.getElementById("b5").value === "X" && isValid) {
    document.getElementById(`b${play}`).value = "O"
    availableTerms.splice(availableTerms.indexOf(play), 1);
    console.log("Played special move: Random corner");
    isValid = false;
    return true;
  }
  if (play == 1 || play == 9 && isValid1) {
    isValid1 = false;
    if (document.getElementById("b3").value === "") {
      document.getElementById("b3").value = "O"
      availableTerms.splice(availableTerms.indexOf(3), 1);
      console.log("Played special move: Strategic corner");
      return true;
    } else if (document.getElementById("b7").value === "") {
      document.getElementById("b7").value = "O"
      availableTerms.splice(availableTerms.indexOf(7), 1);
      console.log("Played special move: Strategic corner");
      return true;
    }
  } else if (play == 3 || play == 7 && isValid1) {
    isValid1 = false;
    if (document.getElementById("b1").value === "") {
      document.getElementById("b1").value = "O"
      availableTerms.splice(availableTerms.indexOf(1), 1);
      console.log("Played special move: Strategic corner");
      return true;
    } else if (document.getElementById("b9").value === "") {
      document.getElementById("b9").value = "O"
      availableTerms.splice(availableTerms.indexOf(9), 1);
      console.log("Played special move: Strategic corner");
      return true;
    }
  }
  // Then check to play own special move
  for (let i = 0; i < trickPatterns.length; i++) {
    var pattern = trickPatterns[i];
    if (
      document.getElementById(`b${pattern[0]}`).value === "O" &&
      document.getElementById(`b${pattern[1]}`).value === "O" &&
      document.getElementById(`b${pattern[2]}`).value === ""
    ) {
      document.getElementById(`b${pattern[2]}`).value = "O"
      availableTerms.splice(availableTerms.indexOf(pattern[2]), 1);
      console.log("Played special move: Winning move")
      return true;
    }
    if (
      document.getElementById(`b${pattern[1]}`).value === "O" &&
      document.getElementById(`b${pattern[2]}`).value === "O" &&
      document.getElementById(`b${pattern[0]}`).value === ""
    ) {
      document.getElementById(`b${pattern[0]}`).value = "O"
      availableTerms.splice(availableTerms.indexOf(pattern[0]), 1);
      console.log("Played special move: Winning move")
      return true;
    }
    if (
      document.getElementById(`b${pattern[2]}`).value === "O" &&
      document.getElementById(`b${pattern[0]}`).value === "O" &&
      document.getElementById(`b${pattern[1]}`).value === ""
    ) {
      document.getElementById(`b${pattern[1]}`).value = "O"
      availableTerms.splice(availableTerms.indexOf(pattern[1]), 1);
      console.log("Played special move: Winning move")
      return true;
    }
  }
  console.log("Didnt play special");
  return false;
}
function playSmart() {
  // Then check to play own smart move
  for (let i = 0; i < winPatterns.length; i++) {
    var pattern = winPatterns[i];
    if (
      document.getElementById(`b${pattern[0]}`).value === "O" &&
      document.getElementById(`b${pattern[1]}`).value === "O" &&
      document.getElementById(`b${pattern[2]}`).value === ""
    ) {
      document.getElementById(`b${pattern[2]}`).value = "O"
      availableTerms.splice(availableTerms.indexOf(pattern[2]), 1);
      console.log("Played smart move: Winning move")
      return true;
    }
    if (
      document.getElementById(`b${pattern[1]}`).value === "O" &&
      document.getElementById(`b${pattern[2]}`).value === "O" &&
      document.getElementById(`b${pattern[0]}`).value === ""
    ) {
      document.getElementById(`b${pattern[0]}`).value = "O"
      availableTerms.splice(availableTerms.indexOf(pattern[0]), 1);
      console.log("Played smart move: Winning move")
      return true;
    }
    if (
      document.getElementById(`b${pattern[2]}`).value === "O" &&
      document.getElementById(`b${pattern[0]}`).value === "O" &&
      document.getElementById(`b${pattern[1]}`).value === ""
    ) {
      document.getElementById(`b${pattern[1]}`).value = "O"
      availableTerms.splice(availableTerms.indexOf(pattern[1]), 1);
      console.log("Played smart move: Winning move")
      return true;
    }
  }
  // First tackle opponent
  for (let i = 0; i < winPatterns.length; i++) {
    var pattern = winPatterns[i];
    if (
      document.getElementById(`b${pattern[0]}`).value === "X" &&
      document.getElementById(`b${pattern[1]}`).value === "X" &&
      document.getElementById(`b${pattern[2]}`).value === ""
    ) {
      document.getElementById(`b${pattern[2]}`).value = "O"
      availableTerms.splice(availableTerms.indexOf(pattern[2]), 1);
      console.log("Played smart move: Blocked Opponent")
      return true;
    }
    if (
      document.getElementById(`b${pattern[1]}`).value === "X" &&
      document.getElementById(`b${pattern[2]}`).value === "X" &&
      document.getElementById(`b${pattern[0]}`).value === ""
    ) {
      document.getElementById(`b${pattern[0]}`).value = "O"
      availableTerms.splice(availableTerms.indexOf(pattern[0]), 1);
      console.log("Played smart move: Blocked Opponent")
      return true;
    }
    if (
      document.getElementById(`b${pattern[2]}`).value === "X" &&
      document.getElementById(`b${pattern[0]}`).value === "X" &&
      document.getElementById(`b${pattern[1]}`).value === ""
    ) {
      document.getElementById(`b${pattern[1]}`).value = "O"
      availableTerms.splice(availableTerms.indexOf(pattern[1]), 1);
      console.log("Played smart move: Blocked Opponent")
      return true;
    }

  }

  // Checks to occupy center space
  if (document.getElementById("b5").value === "") {
    document.getElementById("b5").value = "O";
    availableTerms.splice(4, 1);
    console.log("Played center move")
    return true;
  }
  console.log("Didnt play smart");
  return false;
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function aiPlay() {
  await sleep(300);
  if (!playSmart()) {
    if (!playSpecial()) {
      var randIndex = Math.floor(Math.random() * availableTerms.length);
      var play = availableTerms[randIndex];
      document.getElementById(`b${play}`).value = "O";
      availableTerms.splice(randIndex, 1);
    }
  }
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
    var simulations = Math.floor(Math.random() * 1000000 + 10000);
    var probability = Math.floor(Math.random() * 100);
    document.getElementById("aiStats").innerHTML = "The AI ran " + simulations + " simulations and won " + probability + " %.";
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