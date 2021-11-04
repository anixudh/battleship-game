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

const player = Player("ani");
const cpu = Player("cpu");
const playerGameboardDOM = document.querySelector(".player-gameboard");
const cpuGameboardDOM = document.querySelector(".cpu-gameboard");

createBoardDOM(player, playerGameboard, playerGameboardDOM, false);
createBoardDOM(cpu, cpuGameboard, cpuGameboardDOM, true);

gameboards.addListeners();
gameboards.placeCPUShips();
playGame(player, playerGameboard, cpu, cpuGameboard);
