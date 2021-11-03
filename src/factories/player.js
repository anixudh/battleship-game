const player = (name) => {
  const playerInfo = {
    name,
    prevShots: [],
  };

  const getRandom = () => {
    return Math.floor(Math.random() * 100);
  };

  const makeRandomMove = () => {
    let coord = getRandom();
    let timeout = 0;
    while (!prevShots.includes(coord) && timeout <= 100) {
      coord = getRandom();
      timeout++;
    }
    if (timeout == 100) return -1;
    prevShots.push(coord);
    return coord;
  };

  return { playerInfo, getRandom, makeRandomMove };
};

module.exports = player;
