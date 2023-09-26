'use strict';

let diceNumber;


const dice = document.querySelector(".btn--roll");
const holdButton = document.querySelector(".btn--hold");
const dicePicture = document.querySelector(".dice");

// active player scores
const activePlayer = document.querySelector(".player--active");
let currentScore = 0

//player one scores
const playerOne = document.querySelector(".player--0")
let playerOneTotal = 0
//player two scores
const playerTwo = document.querySelector(".player--1")

document.querySelector(".player--active  .current-score").textContent = 0;

dice.addEventListener("click", diceRoller)



function diceRoller() {
  diceNumber = Math.floor(Math.random() * 6) + 1
  console.log(diceNumber);
  dicePicture.setAttribute("src",`dice-${diceNumber}.png`)
  if (diceNumber !== 1) {
    document.querySelector(".player--active  .current-score").textContent =
      Number(
        document.querySelector(".player--active  .current-score").textContent
      ) + diceNumber
  } else {
    document.querySelector(".player--active  .current-score").textContent = 0;
    holding()
  }
}


holdButton.addEventListener("click",holding)

function holding() {
 
  document.querySelector(".player--active .score").textContent =
    Number(document.querySelector(".player--active .score").textContent) +
    Number(
      document.querySelector(".player--active  .current-score").textContent
    )
  
  document.querySelector(".player--active  .current-score").textContent = 0;

  if (document.querySelector(".player--active .score").textContent >= 100) {
    alert(`${document.querySelector(".player--active .name").textContent} has WON 🎉🎉🎉 `);
    resetGame()
  } else {
    playerOne.classList.toggle("player--active")
  
    playerTwo.classList.toggle("player--active")
    
  }


}


const resetButton = document.querySelector(".btn--new")


function resetGame() {
  document.querySelectorAll(".current--score").forEach(item => item.textContent = 0);
  document.querySelectorAll(".score").forEach(item => item.textContent = 0);
  playerOne.classList.add("player--active");
  playerTwo.classList.remove("player--active");

}



resetButton.addEventListener("click",resetGame)