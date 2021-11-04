import "./style.css";
import newGame from "./newGame.js";
import createBoardDOM from "./createBoardDOM";
import playGame from "./playGame";
//import Ship from "./factories/ship.js";
//import Gameboard from "./factories/gameboard.js";
import Player from "./factories/player.js";

const gameboards = newGame();
let playerGameboard = gameboards.playerGameboard;
let cpuGameboard = gameboards.cpuGameboard;
let player = Player("captain");
let cpu = Player("cpu");

const nameForm = document.querySelector(".name-form");
nameForm.textContent = "Enter player's name!";
const nameInput = document.createElement("input");
nameInput.classList.add("name-input");
nameInput.type = "text";
const nameSubmit = document.createElement("div");
nameSubmit.textContent = "PLAY GAME!";
nameSubmit.classList.add("name-submit");
nameForm.appendChild(nameInput);
nameForm.appendChild(nameSubmit);
nameSubmit.addEventListener("click", () => {
  if (nameInput.value != "") {
    player.playerInfo.name = nameInput.value;
    document.querySelector(".player-gameboard .name").textContent =
      nameInput.value;
    document.querySelector(".name-overlay").style.display = "none";
  }
});

const playerGameboardDOM = document.querySelector(".player-gameboard");
const cpuGameboardDOM = document.querySelector(".cpu-gameboard");

createBoardDOM(player, playerGameboard, playerGameboardDOM, false);
createBoardDOM(cpu, cpuGameboard, cpuGameboardDOM, true);

gameboards.addListeners();
gameboards.placeCPUShips();
playGame(player, playerGameboard, cpu, cpuGameboard);

const resetGame = (e) => {
  document.querySelector(`.player-gameboard`).textContent = "";
  document.querySelector(`.cpu-gameboard`).textContent = "";
  document.querySelector(`.result`).textContent = "";
  const gameboards = newGame();
  let playerGameboard = gameboards.playerGameboard;
  let cpuGameboard = gameboards.cpuGameboard;
  const playerGameboardDOM = document.querySelector(".player-gameboard");
  const cpuGameboardDOM = document.querySelector(".cpu-gameboard");

  createBoardDOM(player, playerGameboard, playerGameboardDOM);
  createBoardDOM(cpu, cpuGameboard, cpuGameboardDOM);

  gameboards.addListeners();
  gameboards.placeCPUShips();
  playGame(player, playerGameboard, cpu, cpuGameboard);
};
document.querySelector(`.reset-game`).addEventListener("click", resetGame);
