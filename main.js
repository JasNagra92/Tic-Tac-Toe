(function () {
  let _gameboard = [];
  let turn = "player1";
  let movesPlayed = 0;
  
  
  const _render = function() {
    for (let i = 0; i < 9; i++) {
      let box = document.getElementById(`a${i}`);
      box.innerText = '';
      box.dataset.square = i;
    }
  };
  _render();

  const restartGame = function(){
    _gameboard = [];
    _render();
    movesPlayed = 0;
    document.getElementById("myForm").reset();
    turn = 'player1'
  }

  const _playerGenerator = (name, marker) => {
    return {
      name,
      marker,
    };
  };

  document.getElementById("startGame").addEventListener("click", function () {
    const player1name = document.getElementById("player1name").value;
    const player2name = document.getElementById("player2name").value;
    const player1marker = document.querySelector(
      `input[name="marker1"]:checked`
    ).value;
    const player2marker = document.querySelector(
      `input[name="marker2"]:checked`
    ).value;
    if (player1name == "") {
      alert("player 1 name cannot be empty");
    } else if (player2name == "") {
      alert("player 2 name cannot be empty");
    } else if (player1marker == player2marker) {
      alert("players cannot have same marker");
    } else {
      _startGame(player1name, player1marker, player2name, player2marker);
      document.getElementById("startGame").disabled = true;
    }
  });

  _checkWin = function (player1name, player2name) {
    if (
      (_gameboard[0] == "X" && _gameboard[1] == "X" && _gameboard[2] == "X") ||
      (_gameboard[3] == "X" && _gameboard[4] == "X" && _gameboard[5] == "X") ||
      (_gameboard[6] == "X" && _gameboard[7] == "X" && _gameboard[8] == "X") ||
      (_gameboard[0] == "X" && _gameboard[3] == "X" && _gameboard[6] == "X") ||
      (_gameboard[1] == "X" && _gameboard[4] == "X" && _gameboard[7] == "X") ||
      (_gameboard[2] == "X" && _gameboard[5] == "X" && _gameboard[8] == "X") ||
      (_gameboard[0] == "X" && _gameboard[4] == "X" && _gameboard[8] == "X") ||
      (_gameboard[2] == "X" && _gameboard[4] == "X" && _gameboard[6] == "X")
    ) {
      alert(`${player1name} you win`);
      restartGame()
    } else if (
      (_gameboard[0] == "O" && _gameboard[1] == "O" && _gameboard[2] == "O") ||
      (_gameboard[3] == "O" && _gameboard[4] == "O" && _gameboard[5] == "O") ||
      (_gameboard[6] == "O" && _gameboard[7] == "O" && _gameboard[8] == "O") ||
      (_gameboard[0] == "O" && _gameboard[3] == "O" && _gameboard[6] == "O") ||
      (_gameboard[1] == "O" && _gameboard[4] == "O" && _gameboard[7] == "O") ||
      (_gameboard[2] == "O" && _gameboard[5] == "O" && _gameboard[8] == "O") ||
      (_gameboard[0] == "O" && _gameboard[4] == "O" && _gameboard[8] == "O") ||
      (_gameboard[2] == "O" && _gameboard[4] == "O" && _gameboard[6] == "O")
    ) {
      alert(`${player2name} you win`);
      restartGame()
    } else if (movesPlayed == 9){
      alert('tie game');
      restartGame()
    }
  };

  const _startGame = (
    player1name,
    player1marker,
    player2name,
    player2marker
  ) => {
    let player1 = _playerGenerator(player1name, player1marker);
    let player2 = _playerGenerator(player2name, player2marker);
    const playarea = document.getElementById("playarea");
    playarea.addEventListener("click", function (e) {
      if (turn == "player1" && e.target.innerText == player2.marker) {
        alert("must pick empty square");
        turn = "player1";
      } 
      else if (turn == "player1" && e.target.innerText == player1.marker) {
        alert("You already place a marker here");
        turn = "player1";
      } 
      else if (turn == "player1") {
        e.target.innerText = player1.marker;
        _gameboard[`${e.target.dataset.square}`] = player1.marker;
        turn = "player2";
        movesPlayed++;
        console.log(_gameboard);
        _checkWin(player1.name, player2.name);
      } 
      else if (turn == "player2" && e.target.innerText == player2.marker) {
        alert("You already place a marker here");
        turn = "player2";
      } 
      else if (turn == "player2" && e.target.innerText == player1.marker) {
        alert("must pick empty square");
        turn = "player2";
      } 
      else if (turn == "player2") {
        e.target.innerText = player2.marker;
        _gameboard[`${e.target.dataset.square}`] = player2.marker;
        turn = "player1";
        movesPlayed++
        _checkWin();
      }
    });
  };
})();
