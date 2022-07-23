const Gameboard = (function(){
    let gameboard = ['x' ,'x' , 'x', 'o', 'o', 'o' , 'x', 'x', 'x' ];

    return {
        gameboard
    }
})()

const playerGenerator = name => {
    return {
        name
    }
}

(function render(){
    for (let i=0;i < 9; i++){
        let box = document.getElementById(`a${i}`);
        box.innerText = Gameboard.gameboard[i]
    }
})()