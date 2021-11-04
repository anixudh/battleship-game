const Gameboard = () => {
  let boardInfo = {
    board: [],
    missed: [],
  };
  const initBoard = () => {
    for (let i = 0; i < 100; i++) {
      boardInfo.board.push({
        ship: false,
        gotHit: false,
      });
    }
  };
  if (boardInfo.board.length == 0) initBoard();

  const placeShip = (ship, startCoord) => {
    if (ship.isVertical) {
      //if (startCoord + (ship.length - 1) * 10 > 100) return;
      console.log(startCoord);
      for (let i = 0; i < ship.length * 10; i += 10) {
        boardInfo.board[startCoord + i]["ship"] = ship.type;
      }
    } else {
      /*if (
        startCoord + ship.length - 1 >= Math.ceil(startCoord / 10) * 10 &&
        startCoord % 10 != 0
      )
        return;*/
      for (let i = 0; i < ship.length; i++) {
        boardInfo.board[startCoord + i]["ship"] = ship.type;
      }
    }
  };

  const receiveAttack = (coord) => {
    if (boardInfo.board[coord]["ship"] && !boardInfo.board[coord]["gotHit"]) {
      boardInfo.board[coord]["gotHit"] = true;
    } else if (boardInfo.board[coord]["ship"]) {
      return;
    } else {
      boardInfo.missed.push(coord);
    }
  };

  const allShipsSunk = () => {
    let flag = true;
    for (let i = 0; i < 100; i++) {
      if (boardInfo.board[i]["ship"] && !boardInfo.board[i]["gotHit"])
        flag = false;
    }
    return flag;
  };

  return { boardInfo, initBoard, placeShip, receiveAttack, allShipsSunk };
};

module.exports = Gameboard;
