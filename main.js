const playerText = document.querySelector("#player1");
const computerText = document.querySelector("#computer1");
const resultText = document.querySelector("#result1");

const choiceBtns = document.querySelectorAll(".choices");
const scoringget =document.querySelector("#result1")
let player;
let computer;
let result;

//Buttons
choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `${player}`;
    computerText.textContent = `${computer}`;
    resultText.textContent = checkWinner();
    scoringget.textContent = scoringfunc();
    
}));
//Computer Random
function computerTurn(){

    const random = Math.floor(Math.random() * 3) + 1;
    switch(random){
      case 1:
        computer = "ROCK";
        break;
      case 2:
        computer = "PAPER";
        break;
      case 3:
        computer = "SCISSORS";
        break;
    }
}

// Formula for Winner

function checkWinner(){
    if(player == computer){
      return "Draw!";
    }
    else if(computer == "ROCK"){
      return (player == "PAPER") ? "You Win!" : "You Lose!";
    }
    
    else if(computer == "PAPER"){
      return (player == "SCISSORS") ? "You Win!" : "You Lose!"
  
    }
    else if(computer == "SCISSORS"){
      return (player == "ROCK") ? "You Win!" : "You Lose!"
    }
}

// Reset
function Clear(){
  document.getElementById("player").innerHTML = "";
  document.getElementById("computer").innerHTML = "";
  document.getElementById("result1").innerHTML = "";
  document.getElementById("player1").innerHTML = "";
  document.getElementById("player").innerHTML = "";
  document.getElementById("computer1").innerHTML = "";
  
}

//Scoring
function scoringfunc(){
  let a = document.getElementById("result1").innerHTML
  if (a == "You Win!"){
    document.getElementById("player").innerHTML += "l";
  } else if (a == "You Lose!"){
    document.getElementById("computer").innerHTML += "l";

  }
  }
  

