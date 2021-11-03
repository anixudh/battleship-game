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
    //let timeout = 0;
    while (playerInfo.prevShots.includes(coord)) {
      coord = getRandom();
      //timeout++;
    }
    //if (timeout == 1000) return -1;
    playerInfo.prevShots.push(coord);
    return coord;
  };

  return { playerInfo, getRandom, makeRandomMove };
};

module.exports = player;
