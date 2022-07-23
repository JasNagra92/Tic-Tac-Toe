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
    let player = playerGenerator(name, marker);
    let turn = "player";
    const playarea = document.getElementById("playarea");
    playarea.addEventListener("click", function (e) {
      if (turn == "player") {
        e.target.innerText = player.marker;

        _gameboard[`${e.target.dataset.square}`] = player.marker

        turn = "cpu";

      }
    });
  };
  return {
    startGame,
  };
})();
