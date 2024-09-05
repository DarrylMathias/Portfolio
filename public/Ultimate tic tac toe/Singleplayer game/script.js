// // Function called whenever user tab on any box
// var availableTerms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function myfunc() {
//   // Setting DOM to all boxes or input field
//   var b1, b2, b3, b4, b5, b6, b7, b8, b9;
//   b1 = document.getElementById("b1").value;
//   b2 = document.getElementById("b2").value;
//   b3 = document.getElementById("b3").value;
//   b4 = document.getElementById("b4").value;
//   b5 = document.getElementById("b5").value;
//   b6 = document.getElementById("b6").value;
//   b7 = document.getElementById("b7").value;
//   b8 = document.getElementById("b8").value;
//   b9 = document.getElementById("b9").value;

//   var b1btn, b2btn, b3btn, b4btn, b5btn, b6btn, b7btn, b8btn, b9btn;

//   b1btn = document.getElementById("b1");
//   b2btn = document.getElementById("b2");
//   b3btn = document.getElementById("b3");
//   b4btn = document.getElementById("b4");
//   b5btn = document.getElementById("b5");
//   b6btn = document.getElementById("b6");
//   b7btn = document.getElementById("b7");
//   b8btn = document.getElementById("b8");
//   b9btn = document.getElementById("b9");

//   // Checking if Player X won or not and after
//   // that disabled all the other fields
//   if (
//     (b1 == "x" || b1 == "X") &&
//     (b2 == "x" || b2 == "X") &&
//     (b3 == "x" || b3 == "X")
//   ) {
//     document.getElementById("print").innerHTML = "Player X won";
//     b4btn.disabled = true;
//     b5btn.disabled = true;
//     b6btn.disabled = true;
//     b7btn.disabled = true;
//     b8btn.disabled = true;
//     b9btn.disabled = true;

//     b1btn.style.color = "red";
//     b2btn.style.color = "red";
//     b3btn.style.color = "red";
//   } else if (
//     (b1 == "x" || b1 == "X") &&
//     (b4 == "x" || b4 == "X") &&
//     (b7 == "x" || b7 == "X")
//   ) {
//     document.getElementById("print").innerHTML = "Player X won";
//     b2btn.disabled = true;
//     b3btn.disabled = true;
//     b5btn.disabled = true;
//     b6btn.disabled = true;
//     b8btn.disabled = true;
//     b9btn.disabled = true;

//     b1btn.style.color = "red";
//     b4btn.style.color = "red";
//     b7btn.style.color = "red";
//   } else if (
//     (b7 == "x" || b7 == "X") &&
//     (b8 == "x" || b8 == "X") &&
//     (b9 == "x" || b9 == "X")
//   ) {
//     document.getElementById("print").innerHTML = "Player X won";

//     b1btn.disabled = true;
//     b2btn.disabled = true;
//     b3btn.disabled = true;
//     b4btn.disabled = true;
//     b5btn.disabled = true;
//     b6btn.disabled = true;

//     b7btn.style.color = "red";
//     b8btn.style.color = "red";
//     b9btn.style.color = "red";
//   } else if (
//     (b3 == "x" || b3 == "X") &&
//     (b6 == "x" || b6 == "X") &&
//     (b9 == "x" || b9 == "X")
//   ) {
//     document.getElementById("print").innerHTML = "Player X won";

//     b1btn.disabled = true;
//     b2btn.disabled = true;
//     b4btn.disabled = true;
//     b5btn.disabled = true;
//     b7btn.disabled = true;
//     b8btn.disabled = true;

//     b3btn.style.color = "red";
//     b6btn.style.color = "red";
//     b9btn.style.color = "red";
//   } else if (
//     (b1 == "x" || b1 == "X") &&
//     (b5 == "x" || b5 == "X") &&
//     (b9 == "x" || b9 == "X")
//   ) {
//     document.getElementById("print").innerHTML = "Player X won";
//     b2btn.disabled = true;
//     b3btn.disabled = true;
//     b4btn.disabled = true;
//     b6btn.disabled = true;
//     b7btn.disabled = true;
//     b8btn.disabled = true;

//     b1btn.style.color = "red";
//     b5btn.style.color = "red";
//     b9btn.style.color = "red";
//   } else if (
//     (b3 == "x" || b3 == "X") &&
//     (b5 == "x" || b5 == "X") &&
//     (b7 == "x" || b7 == "X")
//   ) {
//     document.getElementById("print").innerHTML = "Player X won";
//     b1btn.disabled = true;
//     b2btn.disabled = true;
//     b4btn.disabled = true;
//     b6btn.disabled = true;
//     b8btn.disabled = true;
//     b9btn.disabled = true;

//     b3btn.style.color = "red";
//     b5btn.style.color = "red";
//     b7btn.style.color = "red";
//   } else if (
//     (b2 == "x" || b2 == "X") &&
//     (b5 == "x" || b5 == "X") &&
//     (b8 == "x" || b8 == "X")
//   ) {
//     document.getElementById("print").innerHTML = "Player X won";
//     b1btn.disabled = true;
//     b2btn.disabled = true;
//     b4btn.disabled = true;
//     b6btn.disabled = true;
//     b7btn.disabled = true;
//     b9btn.disabled = true;

//     b2btn.style.color = "red";
//     b5btn.style.color = "red";
//     b8btn.style.color = "red";
//   } else if (
//     (b4 == "x" || b4 == "X") &&
//     (b5 == "x" || b5 == "X") &&
//     (b6 == "x" || b6 == "X")
//   ) {
//     document.getElementById("print").innerHTML = "Player X won";
//     b1btn.disabled = true;
//     b2btn.disabled = true;
//     b3btn.disabled = true;
//     b7btn.disabled = true;
//     b8btn.disabled = true;
//     b9btn.disabled = true;

//     b4btn.style.color = "red";
//     b5btn.style.color = "red";
//     b6btn.style.color = "red";
//   }

//   // Checking of Player X finish
//   // Checking for Player 0 starts, Is player 0 won or
//   // not and after that disabled all the other fields
//   else if (
//     (b1 == "0" || b1 == "0") &&
//     (b2 == "0" || b2 == "0") &&
//     (b3 == "0" || b3 == "0")
//   ) {
//     document.getElementById("print").innerHTML = "Player 0 won";
//     b4btn.disabled = true;
//     b5btn.disabled = true;
//     b6btn.disabled = true;
//     b7btn.disabled = true;
//     b8btn.disabled = true;
//     b9btn.disabled = true;

//     b1btn.style.color = "red";
//     b2btn.style.color = "red";
//     b3btn.style.color = "red";
//   } else if (
//     (b1 == "0" || b1 == "0") &&
//     (b4 == "0" || b4 == "0") &&
//     (b7 == "0" || b7 == "0")
//   ) {
//     document.getElementById("print").innerHTML = "Player 0 won";
//     b2btn.disabled = true;
//     b3btn.disabled = true;
//     b5btn.disabled = true;
//     b6btn.disabled = true;
//     b8btn.disabled = true;
//     b9btn.disabled = true;

//     b1btn.style.color = "red";
//     b4btn.style.color = "red";
//     b7btn.style.color = "red";
//   } else if (
//     (b7 == "0" || b7 == "0") &&
//     (b8 == "0" || b8 == "0") &&
//     (b9 == "0" || b9 == "0")
//   ) {
//     document.getElementById("print").innerHTML = "Player 0 won";
//     b1btn.disabled = true;
//     b2btn.disabled = true;
//     b3btn.disabled = true;
//     b4btn.disabled = true;
//     b5btn.disabled = true;
//     b6btn.disabled = true;

//     b7btn.style.color = "red";
//     b8btn.style.color = "red";
//     b9btn.style.color = "red";
//   } else if (
//     (b3 == "0" || b3 == "0") &&
//     (b6 == "0" || b6 == "0") &&
//     (b9 == "0" || b9 == "0")
//   ) {
//     document.getElementById("print").innerHTML = "Player 0 won";
//     b1btn.disabled = true;
//     b2btn.disabled = true;
//     b4btn.disabled = true;
//     b5btn.disabled = true;
//     b7btn.disabled = true;
//     b8btn.disabled = true;
//     b3btn.style.color = "red";
//     b6btn.style.color = "red";
//     b9btn.style.color = "red";
//   } else if (
//     (b1 == "0" || b1 == "0") &&
//     (b5 == "0" || b5 == "0") &&
//     (b9 == "0" || b9 == "0")
//   ) {
//     document.getElementById("print").innerHTML = "Player 0 won";
//     b2btn.disabled = true;
//     b3btn.disabled = true;
//     b4btn.disabled = true;
//     b6btn.disabled = true;
//     b7btn.disabled = true;
//     b8btn.disabled = true;

//     b1btn.style.color = "red";
//     b5btn.style.color = "red";
//     b9btn.style.color = "red";
//   } else if (
//     (b3 == "0" || b3 == "0") &&
//     (b5 == "0" || b5 == "0") &&
//     (b7 == "0" || b7 == "0")
//   ) {
//     document.getElementById("print").innerHTML = "Player 0 won";
//     b1btn.disabled = true;
//     b2btn.disabled = true;
//     b4btn.disabled = true;
//     b6btn.disabled = true;
//     b8btn.disabled = true;
//     b9btn.disabled = true;

//     b3btn.style.color = "red";
//     b5btn.style.color = "red";
//     b7btn.style.color = "red";
//   } else if (
//     (b2 == "0" || b2 == "0") &&
//     (b5 == "0" || b5 == "0") &&
//     (b8 == "0" || b8 == "0")
//   ) {
//     document.getElementById("print").innerHTML = "Player 0 won";
//     b1btn.disabled = true;
//     b3btn.disabled = true;
//     b4btn.disabled = true;
//     b6btn.disabled = true;
//     b7btn.disabled = true;
//     b9btn.disabled = true;

//     b2btn.style.color = "red";
//     b5btn.style.color = "red";
//     b8btn.style.color = "red";
//   } else if (
//     (b4 == "0" || b4 == "0") &&
//     (b5 == "0" || b5 == "0") &&
//     (b6 == "0" || b6 == "0")
//   ) {
//     document.getElementById("print").innerHTML = "Player 0 won";
//     b1btn.disabled = true;
//     b2btn.disabled = true;
//     b3btn.disabled = true;
//     b7btn.disabled = true;
//     b8btn.disabled = true;
//     b9btn.disabled = true;

//     b4btn.style.color = "red";
//     b5btn.style.color = "red";
//     b6btn.style.color = "red";
//   }

//   // Checking of Player 0 finish
//   // Here, Checking about Tie
//   else if (
//     (b1 == "X" || b1 == "0") &&
//     (b2 == "X" || b2 == "0") &&
//     (b3 == "X" || b3 == "0") &&
//     (b4 == "X" || b4 == "0") &&
//     (b5 == "X" || b5 == "0") &&
//     (b6 == "X" || b6 == "0") &&
//     (b7 == "X" || b7 == "0") &&
//     (b8 == "X" || b8 == "0") &&
//     (b9 == "X" || b9 == "0")
//   ) {
//     document.getElementById("print").innerHTML = "Match Tie";
//   } else {
//     // Here, Printing Result
//     if (flag == 1) {
//       document.getElementById("print").innerHTML = "Player X Turn";
//     } else {
//       document.getElementById("print").innerHTML = "AI's Turn";
//     }
//   }
// }
// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function aiPlay() {
//   if (document.getElementById("print").innerHTML != "Player X won") {
//     console.log(availableTerms);
//     await sleep(1000);
//     var randInt = Math.floor(Math.random() * availableTerms.length);
//     var play = availableTerms[randInt];
//     switch (play) {
//       case 1:
//         document.getElementById("b1").value = "O";
//         console.log(
//           "AI chose to play at move " + play + " of array index " + randInt
//         );
//         availableTerms.splice(availableTerms.indexOf(1), 1);
//         document.getElementById("b1").disabled = true;
//         break;
//       case 2:
//         document.getElementById("b2").value = "O";
//         console.log(
//           "AI chose to play at move " + play + " of array index " + randInt
//         );
//         availableTerms.splice(availableTerms.indexOf(2), 1);
//         document.getElementById("b2").disabled = true;
//         break;
//       case 3:
//         document.getElementById("b3").value = "O";
//         console.log(
//           "AI chose to play at move " + play + " of array index " + randInt
//         );
//         availableTerms.splice(availableTerms.indexOf(3), 1);
//         document.getElementById("b3").disabled = true;
//         break;
//       case 4:
//         document.getElementById("b4").value = "O";
//         console.log(
//           "AI chose to play at move " + play + " of array index " + randInt
//         );
//         availableTerms.splice(availableTerms.indexOf(4), 1);
//         document.getElementById("b4").disabled = true;
//         break;
//       case 5:
//         document.getElementById("b5").value = "O";
//         console.log(
//           "AI chose to play at move " + play + " of array index " + randInt
//         );
//         availableTerms.splice(availableTerms.indexOf(5), 1);
//         document.getElementById("b5").disabled = true;
//         break;
//       case 6:
//         document.getElementById("b6").value = "O";
//         console.log(
//           "AI chose to play at move " + play + " of array index " + randInt
//         );
//         availableTerms.splice(availableTerms.indexOf(6), 1);
//         document.getElementById("b6").disabled = true;
//         break;
//       case 7:
//         document.getElementById("b7").value = "O";
//         console.log(
//           "AI chose to play at move " + play + " of array index " + randInt
//         );
//         availableTerms.splice(availableTerms.indexOf(7), 1);
//         document.getElementById("b7").disabled = true;
//         break;
//       case 8:
//         document.getElementById("b8").value = "O";
//         console.log(
//           "AI chose to play at move " + play + " of array index " + randInt
//         );
//         availableTerms.splice(availableTerms.indexOf(8), 1);
//         document.getElementById("b8").disabled = true;
//         break;
//       case 9:
//         document.getElementById("b9").value = "O";
//         console.log(
//           "AI chose to play at move " + play + " of array index " + randInt
//         );
//         availableTerms.splice(availableTerms.indexOf(9), 1);
//         document.getElementById("b9").disabled = true;
//         break;
//       default:
//         console.log("Error encountered.. Unidentified number: " + randInt);
//         break;
//     }
//   }
// }

// // Function to reset game
// function myfunc_2() {
//   location.reload();
//   b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = "";
// }

// // Here onwards, functions check turn of the player
// // and put accordingly value X or 0
// flag = 1;
// function myfunc_3() {
//   if (flag == 1) {
//     document.getElementById("b1").value = "X";
//     document.getElementById("b1").disabled = true;
//     availableTerms.splice(availableTerms.indexOf(1), 1);
//     aiPlay();
//     flag = 0;
//   } else {
//     flag = 1;
//   }
// }

// function myfunc_4() {
//   if (flag == 1) {
//     document.getElementById("b2").value = "X";
//     document.getElementById("b2").disabled = true;
//     availableTerms.splice(availableTerms.indexOf(2), 1);
//     flag = 0;
//     aiPlay();
//   } else {
//     flag = 1;
//   }
// }

// function myfunc_5() {
//   if (flag == 1) {
//     document.getElementById("b3").value = "X";
//     document.getElementById("b3").disabled = true;
//     availableTerms.splice(availableTerms.indexOf(3), 1);
//     flag = 0;
//     aiPlay();
//   } else {
//     flag = 1;
//   }
// }

// function myfunc_6() {
//   if (flag == 1) {
//     document.getElementById("b4").value = "X";
//     document.getElementById("b4").disabled = true;
//     availableTerms.splice(availableTerms.indexOf(4), 1);
//     flag = 0;
//     aiPlay();
//   } else {
//     flag = 1;
//   }
// }

// function myfunc_7() {
//   if (flag == 1) {
//     document.getElementById("b5").value = "X";
//     document.getElementById("b5").disabled = true;
//     availableTerms.splice(availableTerms.indexOf(5), 1);
//     flag = 0;
//     aiPlay();
//   } else {
//     flag = 1;
//   }
// }

// function myfunc_8() {
//   if (flag == 1) {
//     document.getElementById("b6").value = "X";
//     document.getElementById("b6").disabled = true;
//     availableTerms.splice(availableTerms.indexOf(6), 1);
//     flag = 0;
//     aiPlay();
//   } else {
//     flag = 1;
//   }
// }

// function myfunc_9() {
//   if (flag == 1) {
//     document.getElementById("b7").value = "X";
//     document.getElementById("b7").disabled = true;
//     availableTerms.splice(availableTerms.indexOf(7), 1);
//     flag = 0;
//     aiPlay();
//   } else {
//     flag = 1;
//   }
// }

// function myfunc_10() {
//   if (flag == 1) {
//     document.getElementById("b8").value = "X";
//     document.getElementById("b8").disabled = true;
//     availableTerms.splice(availableTerms.indexOf(8), 1);
//     flag = 0;
//     aiPlay();
//   } else {
//     flag = 1;
//   }
// }

// function myfunc_11() {
//   if (flag == 1) {
//     document.getElementById("b9").value = "X";
//     document.getElementById("b9").disabled = true;
//     availableTerms.splice(availableTerms.indexOf(9), 1);
//     flag = 0;
//     aiPlay();
//   } else {
//     flag = 1;
//   }
// }
var currentPlayer = "X"; // Start with Player X
var availableTerms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var flag = 1; // 1 for Player X's turn, 0 for AI's turn
var dots = window.setInterval( function() {
  var wait = document.getElementById("wait");
  if ( wait.innerHTML.length > 3 ) 
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
  await sleep(Math.random() * 2000 + 300);
  console.log("Sleep time " + Math.random() * 2000 + 300 + " ms");
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
  if(currentPlayer == "O"){
    document.getElementById("print").innerHTML = `
🅾️ to Move`;
    document.getElementById("aiStats").innerHTML = "<span>AI is thinking </span><span id='wait'></span>";
  }else{
    document.getElementById("print").innerHTML = `
❌ to Move`;
    var simulations = Math.floor(Math.random()*1000000 + 10000);
    var probability = Math.floor(Math.random()*100)
    if(probability > 50){
      probability-= 49
    }else{
      probability+= 1
    }
    document.getElementById("aiStats").innerHTML = "The AI ran "+ simulations+" simulations and won " + probability + " %.";
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
