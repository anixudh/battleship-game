import Ship from "./factories/ship.js";
import Gameboard from "./factories/gameboard.js";

const newGame = () => {
  let playerGameboard = Gameboard();
  let cpuGameboard = Gameboard();

  let current = {
    name: "CR",
    length: 5,
    isVertical: false,
  };
  //let isVertical = false;
  const displayShip = (length, coord) => {
    const hovered = document.querySelectorAll(".hovered");
    for (let i = 0; i < hovered.length; i++)
      hovered[i].classList.remove("hovered");

    if (current.isVertical) {
    } else {
      if (coord + length - 1 >= Math.ceil(coord / 10) * 10 && coord % 10 != 0)
        return;
      for (let i = coord; i < coord + length; i++) {
        const hoveredGrid = document.querySelector(`.grid-${i}`);
        hoveredGrid.classList.add("hovered");
      }
    }
  };
  const hoverShips = (e) => {
    const coord = Number(e.target.className.substring(5, 7));
    switch (current.name) {
      case "CR":
        displayShip(5, coord);
        break;
      case "BS":
        displayShip(4, coord);
        break;
      case "CS":
        displayShip(3, coord);
        break;
      case "SUB":
        displayShip(3, coord);
        break;
      case "DS":
        displayShip(2, coord);
        break;
    }
  };
  const placeShips = (e) => {
    const hovered = document.querySelectorAll(".hovered");
    for (let i = 0; i < hovered.length; i++)
      hovered[i].classList.remove("hovered");

    const coord = Number(e.target.className.substring(5, 7));
    switch (current.name) {
      case "CR":
        let carrier = Ship("CR", 5, current.isVertical);
        playerGameboard.placeShip(carrier, coord);
        //console.log(playerGameboard.boardInfo.board);

        current.name = "BS";

        break;
      case "BS":
        let battleship = Ship("BS", 4, current.isVertical);
        playerGameboard.placeShip(battleship, coord);

        current.name = "CS";

        break;
      case "CS":
        let cruiser = Ship("CS", 3, current.isVertical);
        playerGameboard.placeShip(cruiser, coord);

        current.name = "SUB";

        break;
      case "SUB":
        let submarine = Ship("SUB", 3, current.isVertical);
        playerGameboard.placeShip(submarine, coord);

        current.name = "DS";

        break;
      case "DS":
        let destroyer = Ship("DS", 2, current.isVertical);
        playerGameboard.placeShip(destroyer, coord);
        current.name = "NA";
        break;
    }
    current.length--;
    for (let i = 0; i < 100; i++) {
      const grid = document.querySelector(`.grid-${i}`);
      if (playerGameboard.boardInfo.board[i]["ship"] != false) {
        grid.classList.add("ship");
      }
    }
  };

  const addListeners = () => {
    document.querySelectorAll(".player").forEach((grid) => {
      grid.addEventListener("mouseover", hoverShips);
      grid.addEventListener("click", placeShips);
    });
  };

  /*playerGameboard.placeShip(carrier, 4);
  playerGameboard.placeShip(battleship, 21);
  playerGameboard.placeShip(cruiser, 40);
  playerGameboard.placeShip(submarine, 66);
  playerGameboard.placeShip(destroyer, 83);*/
  const allShipsPlaced = () => {
    let count = 0;
    for (let i = 0; i < 100; i++) {
      if (cpuGameboard.boardInfo.board[i]["ship"] != false) count++;
    }
    return count == 17;
  };
  const placeCPUShips = () => {
    let carrier = Ship("CR", 5, Math.random() < 0.5);
    let battleship = Ship("BS", 4, Math.random() < 0.5);
    let cruiser = Ship("CS", 3, Math.random() < 0.5);
    let submarine = Ship("SUB", 3, Math.random() < 0.5);
    let destroyer = Ship("DS", 2, Math.random() < 0.5);

    const getRandom = () => {
      return Math.floor(Math.random() * 100);
    };

    while (!allShipsPlaced()) {
      let coord = getRandom();
      cpuGameboard.placeShip(carrier, coord);
      coord = getRandom();
      cpuGameboard.placeShip(battleship, coord);
      coord = getRandom();
      cpuGameboard.placeShip(cruiser, coord);
      coord = getRandom();
      cpuGameboard.placeShip(submarine, coord);
      coord = getRandom();
      cpuGameboard.placeShip(destroyer, coord);
    }

    for (let i = 0; i < 100; i++) {
      const grid = document.querySelector(`.grid-${i}.cpu`);
      console.log(grid);
      if (cpuGameboard.boardInfo.board[i]["ship"] != false) {
        grid.classList.add("ship");
      }
    }
  };
  /*cpuGameboard.placeShip(carrier, 14);
  cpuGameboard.placeShip(battleship, 64);
  cpuGameboard.placeShip(cruiser, 21);
  cpuGameboard.placeShip(submarine, 71);
  cpuGameboard.placeShip(destroyer, 88);*/

  return { playerGameboard, cpuGameboard, addListeners, placeCPUShips };
};

export default newGame;
