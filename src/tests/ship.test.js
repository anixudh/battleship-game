const Ship = require("../factories/ship");

let firstShip = Ship("DS", 4, false);

test("new ship of length 4", () => {
  expect(firstShip.length).toBe(4);
});

firstShip.hit(0);
firstShip.hit(3);

test.skip("ship hit twice", () => {
  expect(firstShip.hits).toStrictEqual([0, 3]);
});

firstShip.hit(1);
firstShip.hit(2);

test("ship sinks", () => {
  expect(firstShip.isSunk()).toBe(true);
});
