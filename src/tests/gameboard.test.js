const Gameboard = require("../factories/gameboard");
const Ship = require("../factories/ship");

let gameboard = Gameboard();

test("initial board", () => {
  expect(gameboard.boardInfo.board[97]).toStrictEqual({
    ship: false,
    gotHit: false,
  });
});

let ship1 = Ship("DS", 4);
gameboard.placeShip(ship1, 55);

test("ship placed", () => {
  expect(gameboard.boardInfo.board[55]).toStrictEqual({
    ship: "DS",
    gotHit: false,
  });
});

let ship2 = Ship("DS", 4);
gameboard.placeShip(ship2, 68);
test("exceed row", () => {
  expect(gameboard.boardInfo.board[69]).toStrictEqual({
    ship: false,
    gotHit: false,
  });
});
