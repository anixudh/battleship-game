const Gameboard = () => {
  let boardInfo = {
    board: [],
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
    if (startCoord + ship.length - 1 >= Math.ceil(startCoord / 10) * 10) return;
    for (let i = 0; i < ship.length; i++) {
      boardInfo.board[startCoord + i]["ship"] = ship.type;
    }
  };

  return { boardInfo, initBoard, placeShip };
};

module.exports = Gameboard;
