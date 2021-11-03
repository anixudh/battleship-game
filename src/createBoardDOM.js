const createBoardDOM = (player, gameboard, gameboardDOM, hidden) => {
  for (let i = 0; i < 10; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("gridRow");
    for (let j = 0; j < 10; j++) {
      const grid = document.createElement("div");
      grid.classList.add(`grid-${i * 10 + j}`);
      if (player.playerInfo.name == "cpu") grid.classList.add("cpu");
      else grid.classList.add("player");

      if (gameboard.boardInfo.board[i * 10 + j]["ship"] != false && !hidden)
        grid.classList.add("ship");
      gridRow.appendChild(grid);
    }
    gameboardDOM.appendChild(gridRow);
  }
  const name = document.createElement("div");
  name.textContent = `${player.playerInfo.name}`;
  name.classList.add("name");
  gameboardDOM.appendChild(name);
};

export default createBoardDOM;
