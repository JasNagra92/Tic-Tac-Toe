const gameObj = (function () {
  let _gameboard = ["x", "x", "x", "o", "o", "o", "x", "x", "x"];

  (function render() {
    for (let i = 0; i < 9; i++) {
      let box = document.getElementById(`a${i}`);
      box.innerText = _gameboard[i];
      box.dataset.square = i
    }
  })();

  const playerGenerator = (name, marker) => {
    return{
        name,
        marker
    }
};

  const startGame = (name, marker) => {
    let player1 = playerGenerator(name, marker);
    let turn = "player1";
    const playarea = document.getElementById("playarea");
    playarea.addEventListener("click", function (e) {
      if (turn == "player1") {
        e.target.innerText = player1.marker;
        _gameboard[`${e.target.dataset.square}`] = player1.marker;
        turn = "player2";
      } 
      if (turn == "player2"){
        e.target.innerText = player2.marker;
        _gameboard[`${e.target.dataset.square}`] = player2.marker;
        turn = "player1"
      }
    });
  };
  return {
    startGame,
  };
})();
