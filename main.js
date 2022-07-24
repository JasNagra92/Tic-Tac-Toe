const gameObj = (function () {
  let _gameboard = ["x", "x", "x", "o", "o", "o", "x", "x", "x"];
  let turn = "player1";
  (function render() {
    for (let i = 0; i < 9; i++) {
      let box = document.getElementById(`a${i}`);
      box.innerText = _gameboard[i];
      box.dataset.square = i;
    }
  })();

  const playerGenerator = (name, marker) => {
    return {
      name,
      marker,
    };
  };

    document
    .getElementById("startGame")
    .addEventListener("click", function () {
      const player1name = document.getElementById("player1name").value;
      const player2name = document.getElementById("player2name").value;
      const player1marker = document.querySelector(
        `input[name="marker1"]:checked`
      ).value;
      const player2marker = document.querySelector(
        `input[name="marker2"]:checked`
      ).value;
      if (player1name == ""){alert('player 1 name cannot be empty')}
      else if (player2name == ""){alert('player 2 name cannot be empty')}
      else if (player1marker == player2marker){alert('players cannot have same marker')}
      else{
      startGame(player1name, player1marker, player2name, player2marker)};
    });

  const startGame = (
    player1name,
    player1marker,
    player2name,
    player2marker
  ) => {
    let player1 = playerGenerator(player1name, player1marker);
    let player2 = playerGenerator(player2name, player2marker);
    const playarea = document.getElementById("playarea");
    playarea.addEventListener("click", function (e) {
      if (turn == "player1") {
        e.target.innerText = player1.marker;
        _gameboard[`${e.target.dataset.square}`] = player1.marker;
        turn = "player2";
      } else if (turn == "player2") {
        e.target.innerText = player2.marker;
        _gameboard[`${e.target.dataset.square}`] = player2.marker;
        turn = "player1";
      }
    });
  };
  return {
    startGame,
  };
})();
