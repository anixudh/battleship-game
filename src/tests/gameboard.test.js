const Gameboard = require("../factories/gameboard");
const Ship = require("../factories/ship");

let gameboard = Gameboard();

test("initial board", () => {
  expect(gameboard.boardInfo.board[97]).toStrictEqual({
    ship: false,
    gotHit: false,
  });
});

let ship1 = Ship("DS", 4, false);
gameboard.placeShip(ship1, 55);

test.skip("ship placed", () => {
  expect(gameboard.boardInfo.board[55]).toStrictEqual({
    ship: "DS",
    gotHit: false,
  });
});

let ship2 = Ship("DS", 4, false);
gameboard.placeShip(ship2, 68);
test("exceed row", () => {
  expect(gameboard.boardInfo.board[69]).toStrictEqual({
    ship: false,
    gotHit: false,
  });
});

gameboard.receiveAttack(57);
test("ship hit", () => {
  expect(gameboard.boardInfo.board[57]["gotHit"]).toStrictEqual(true);
});

gameboard.receiveAttack(69);
test("missed attack", () => {
  expect(gameboard.boardInfo.missed).toStrictEqual([69]);
});

let vertShip = Ship("BS", 4, true);
gameboard.placeShip(vertShip, 66);

test("vertical ship ", () => {
  expect(gameboard.boardInfo.board[86]["ship"]).toStrictEqual("BS");
});

let ship3 = Ship("SUB", 3, false);
gameboard.placeShip(ship3, 23);

gameboard.receiveAttack(55);
gameboard.receiveAttack(23);

test.skip("not all ships sunk", () => {
  expect(gameboard.allShipsSunk()).toStrictEqual(false);
});

gameboard.receiveAttack(56);
gameboard.receiveAttack(58);
gameboard.receiveAttack(24);
gameboard.receiveAttack(25);
gameboard.receiveAttack(66);
gameboard.receiveAttack(76);
gameboard.receiveAttack(86);
gameboard.receiveAttack(96);

test("all ships sunk", () => {
  expect(gameboard.allShipsSunk()).toStrictEqual(true);
});
