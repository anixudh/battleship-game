import Ship from "./factories/ship.js";
import Gameboard from "./factories/gameboard.js";

const newGame = () => {
  let playerGameboard = Gameboard();
  let cpuGameboard = Gameboard();

  const trans = document.querySelector(".transcript-text");
  trans.textContent = "Place your Carrier...";
  document.querySelector(".cpu-gameboard").style.display = "none";
  document.querySelector(".vertical-button").style.display = "block";
  let current = {
    name: "CR",
    length: 5,
    isVertical: false,
  };

  const displayShip = (length, coord) => {
    const hovered = document.querySelectorAll(".hovered");
    for (let i = 0; i < hovered.length; i++)
      hovered[i].classList.remove("hovered");
    if (current.isVertical) {
      if (coord + (length - 1) * 10 > 100) return;
      for (let i = coord; i < coord + length * 10; i += 10) {
        let grid = document.querySelector(`.grid-${i}.player`);

        if (grid.classList.contains("ship")) {
          return;
        }
      }
    } else {
      if (coord + length - 1 >= Math.ceil(coord / 10) * 10 && coord % 10 != 0)
        return;
      for (let i = coord; i < coord + length; i++) {
        let grid = document.querySelector(`.grid-${i}.player`);
        if (grid.classList.contains("ship")) {
          return;
        }
      }
    }
    if (current.isVertical) {
      for (let i = coord; i < coord + length * 10; i += 10) {
        const hoveredGrid = document.querySelector(`.grid-${i}`);
        hoveredGrid.classList.add("hovered");
      }
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
    if (!e.target.classList.contains("hovered")) return;
    const hovered = document.querySelectorAll(".hovered");
    for (let i = 0; i < hovered.length; i++)
      hovered[i].classList.remove("hovered");

    const coord = Number(e.target.className.substring(5, 7));
    switch (current.name) {
      case "CR":
        let carrier = Ship("CR", 5, current.isVertical);
        playerGameboard.placeShip(carrier, coord);
        //console.log(playerGameboard.boardInfo.board);
        trans.textContent = "Place your Battleship...";
        current.name = "BS";

        break;
      case "BS":
        let battleship = Ship("BS", 4, current.isVertical);
        playerGameboard.placeShip(battleship, coord);
        trans.textContent = "Place your Cruiser...";
        current.name = "CS";

        break;
      case "CS":
        let cruiser = Ship("CS", 3, current.isVertical);
        playerGameboard.placeShip(cruiser, coord);
        trans.textContent = "Place your Submarine...";
        current.name = "SUB";

        break;
      case "SUB":
        let submarine = Ship("SUB", 3, current.isVertical);
        playerGameboard.placeShip(submarine, coord);
        trans.textContent = "Place your Destroyer...";
        current.name = "DS";

        break;
      case "DS":
        let destroyer = Ship("DS", 2, current.isVertical);
        playerGameboard.placeShip(destroyer, coord);
        trans.textContent = " Make your first move by attacking the CPU!";
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

    if (current.name == "NA") {
      document.querySelector(".cpu-gameboard").style.display = "block";
      document.querySelector(".vertical-button").style.display = "none";
    }
  };

  document.querySelector(".vertical-button").addEventListener("click", (e) => {
    current.isVertical = !current.isVertical;
  });
  const addListeners = () => {
    document.querySelectorAll(".player").forEach((grid) => {
      grid.addEventListener("mouseover", hoverShips);
      grid.addEventListener("click", placeShips);
    });
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
    const isSingle = (ship, coord) => {
      if (coord + ship.length * 10 > 100) return false;
      if (
        coord + ship.length - 1 >= Math.ceil(coord / 10) * 10 &&
        coord % 10 != 0
      )
        return false;
      if (ship.isVertical) {
        for (let i = coord; i < coord + ship.length * 10; i++) {
          let grid = document.querySelector(`.grid-${i}.cpu`);
          if (grid.classList.contains("ship")) {
            return false;
          }
        }
      } else {
        for (let i = coord; i < coord + ship.length; i++) {
          let grid = document.querySelector(`.grid-${i}.cpu`);
          if (grid.classList.contains("ship")) {
            return false;
          }
        }
      }
      return true;
    };
    const getSafeCoord = (ship) => {
      let coord = getRandom();
      if (ship.isVertical) {
        while (coord + ship.length * 10 > 100 && !isSingle(ship, coord))
          coord = getRandom();
      } else {
        while (
          coord + ship.length - 1 >= Math.ceil(coord / 10) * 10 &&
          coord % 10 != 0 &&
          !isSingle(ship, coord)
        )
          coord = getRandom();
      }
      return coord;
    };

    let coord = getSafeCoord(carrier);
    cpuGameboard.placeShip(carrier, coord);
    coord = getSafeCoord(battleship);
    cpuGameboard.placeShip(battleship, coord);
    coord = getSafeCoord(cruiser);
    cpuGameboard.placeShip(cruiser, coord);
    coord = getSafeCoord(submarine);
    cpuGameboard.placeShip(submarine, coord);
    coord = getSafeCoord(destroyer);
    cpuGameboard.placeShip(destroyer, coord);

    /*
    for (let i = 0; i < 100; i++) {
      const grid = document.querySelector(`.grid-${i}.cpu`);
      console.log(grid);
      if (cpuGameboard.boardInfo.board[i]["ship"] != false) {
        grid.classList.add("ship");
      }
    }
    */
  };

  return { playerGameboard, cpuGameboard, addListeners, placeCPUShips };
};

export default newGame;
