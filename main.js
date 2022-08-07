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


  _checkWin2 = function(player1,player2){
      let winningCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ];
      for (let i = 0; i < 8; i++){
        let winCondition = winningCombinations[i]       
            let a = _gameboard[winCondition[0]];
            let b = _gameboard[winCondition[1]];
            let c = _gameboard[winCondition[2]];
            if (a != undefined && a === b && b === c && a == player1.marker){
              alert(`${player1.name} is the winner`)
            } else if (a != undefined && a === b && b === c && a == player2.marker){
              alert(`${player2.name} is the winner`)
            }
      }

  }

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
      } 
      else if (turn == "player1" && e.target.innerText == player1.marker) {
        alert("You already place a marker here");
      } 
      else if (turn == "player1") {
        e.target.innerText = player1.marker;
        _gameboard[`${e.target.dataset.square}`] = player1.marker;
        turn = "player2";
        movesPlayed++;
        _checkWin2(player1, player2);
      } 
      else if (turn == "player2" && e.target.innerText == player2.marker) {
        alert("You already place a marker here");
      } 
      else if (turn == "player2" && e.target.innerText == player1.marker) {
        alert("must pick empty square");
      } 
      else if (turn == "player2") {
        e.target.innerText = player2.marker;
        _gameboard[`${e.target.dataset.square}`] = player2.marker;
        turn = "player1";
        movesPlayed++
        _checkWin2(player1,player2);
      }
    });
    return {
      player1,
      player2
    }
  };
})();
