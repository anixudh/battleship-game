const Player = require("../factories/player");

const player1 = Player("ani");
test("random number 1", () => {
  expect(player1.getRandom()).toBeLessThan(100);
});
test("random number 2", () => {
  expect(player1.getRandom()).toBeLessThan(100);
});
