import Ship from "./factories/ship.js";
import Gameboard from "./factories/gameboard.js";

const newGame = () => {
  let playerGameboard = Gameboard();
  let cpuGameboard = Gameboard();

  let carrier = Ship("CR", 5, false);
  let battleship = Ship("BS", 4, false);
  let cruiser = Ship("CS", 3, true);
  let submarine = Ship("SUB", 3, false);
  let destroyer = Ship("DS", 2, true);

  playerGameboard.placeShip(carrier, 4);
  playerGameboard.placeShip(battleship, 21);
  playerGameboard.placeShip(cruiser, 40);
  playerGameboard.placeShip(submarine, 66);
  playerGameboard.placeShip(destroyer, 83);

  cpuGameboard.placeShip(carrier, 14);
  cpuGameboard.placeShip(battleship, 64);
  cpuGameboard.placeShip(cruiser, 21);
  cpuGameboard.placeShip(submarine, 71);
  cpuGameboard.placeShip(destroyer, 88);

  return { playerGameboard, cpuGameboard };
};

export default newGame;
