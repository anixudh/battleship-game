const playGame = (player, playerGameboard, cpu, cpuGameboard) => {
  const checkMissed = () => {
    for (let x of cpuGameboard.boardInfo.missed) {
      document.querySelector(`.grid-${x}.cpu`).classList.add("missed");
    }
    for (let x of playerGameboard.boardInfo.missed) {
      document.querySelector(`.grid-${x}.player`).classList.add("missed");
    }
  };
  const checkHit = () => {
    for (let i = 0; i < 100; i++) {
      if (cpuGameboard.boardInfo.board[i]["gotHit"]) {
        document.querySelector(`.grid-${i}.cpu`).classList.add("ship-hit");
      }
      if (playerGameboard.boardInfo.board[i]["gotHit"]) {
        document.querySelector(`.grid-${i}.player`).classList.add("ship-hit");
      }
    }
  };
  const checkWin = () => {
    const result = document.querySelector(".result");
    if (cpuGameboard.allShipsSunk())
      result.textContent = `${player.playerInfo.name} wins!`;
    else if (playerGameboard.allShipsSunk()) result.textContent = `CPU wins!`;
  };
  const cpuPlay = () => {
    console.log("in cpu");
    playerGameboard.receiveAttack(cpu.makeRandomMove());
    checkMissed();
    checkHit();
    checkWin();
  };
  const attackCpu = (e) => {
    const coord = Number(e.target.className.substring(5, 7));
    cpuGameboard.receiveAttack(coord);
    checkMissed();
    checkHit();
    checkWin();
    cpuPlay();
    console.log("in player");
  };
  document.querySelectorAll(".cpu").forEach((cpuGrid) => {
    cpuGrid.addEventListener("click", attackCpu);
  });
};

export default playGame;
