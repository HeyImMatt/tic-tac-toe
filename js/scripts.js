function Game() {
  this.gameMoves = [, , , , , , , , , ];
  this.newGameBoard = new Board;
  this.newGameBoard.drawBoard();
  this.newGameBoard.listener();
}

Game.prototype.playerMove = function(index, x, y ){
  this.newGameBoard.drawX(x, y);
  this.gameMoves[index] = 'x';
  console.log(this.gameMoves)
}
// function Player(name) {
//   // needs to make a mark
//   this.name = name;
// }

function Board() {
  this.gameBoard = document.getElementById('gameBoard');
  this.gameBoardCtx = gameBoard.getContext('2d');
  this.row1 = 100;
  this.row2 = 200;
  this.row3 = 300;
  this.col1 = 100;
  this.col2 = 200;
  this.col3 = 300;
  //define the game spaces
  // compare spaceclick to the gamespaces
  // function to draw an x or o in the gamespace that the click occurred
}

Board.prototype.drawBoard = function() {
  this.gameBoardCtx.beginPath();
  this.gameBoardCtx.moveTo(100, 0);
  this.gameBoardCtx.lineTo(100, 300);
  this.gameBoardCtx.stroke();

  this.gameBoardCtx.beginPath();
  this.gameBoardCtx.moveTo(200, 0);
  this.gameBoardCtx.lineTo(200, 300);
  this.gameBoardCtx.stroke();

  this.gameBoardCtx.beginPath();
  this.gameBoardCtx.moveTo(0, 100);
  this.gameBoardCtx.lineTo(300, 100);
  this.gameBoardCtx.stroke();
  
  this.gameBoardCtx.beginPath();
  this.gameBoardCtx.moveTo(0, 200);
  this.gameBoardCtx.lineTo(300, 200);
  this.gameBoardCtx.stroke();
}

Board.prototype.drawX = function(x, y) {
  this.gameBoardCtx.beginPath();
  this.gameBoardCtx.moveTo(x - 40, y - 40);
  this.gameBoardCtx.lineTo(x + 40, y + 40);
  this.gameBoardCtx.stroke();

  this.gameBoardCtx.beginPath();
  this.gameBoardCtx.moveTo(x + 40, y - 40);
  this.gameBoardCtx.lineTo(x - 40, y + 40);
  this.gameBoardCtx.stroke();
}

Board.prototype.drawO = function(x, y) {
  this.gameBoardCtx.beginPath();
  this.gameBoardCtx.arc(x, y, 40, 0, 2 * Math.PI);
  this.gameBoardCtx.stroke();
}

Board.prototype.listener = function() {
  this.gameBoard.addEventListener('click', (event) => {
    let spaceClicked = {
      xPos: event.layerX,
      yPos: event.layerY
    }
    let coords = this.spaceChecker(spaceClicked);
    newGame.playerMove(coords[0], coords[1], coords[2])
  })
}

Board.prototype.spaceChecker = function(spaceClicked) {
  if (spaceClicked.yPos <= this.row1) {
    if (spaceClicked.xPos <= this.col1) {
      return [0, 50, 50];
    } else if (spaceClicked.xPos <= this.col2) {
      return [1, 150, 50];
    } else if (spaceClicked.xPos <= this.col3) {
      return [2, 250, 50];
    }
  } else if (spaceClicked.yPos <= this.row2) {
    if (spaceClicked.xPos <= this.col1) {
      return [3, 50, 150];
    } else if (spaceClicked.xPos <= this.col2) {
      return [4, 150, 150];
    } else if (spaceClicked.xPos <= this.col3) {
      return [5, 250, 150];
    }
  } else if (spaceClicked.yPos <= this.row3) {
    if (spaceClicked.xPos <= this.col1) {
      return [6, 50, 250];
    } else if (spaceClicked.xPos <= this.col2) {
      return [7, 150, 250];
    } else if (spaceClicked.xPos <= this.col3) {
      return [8, 250, 250];
    }
  }
}

//DOM interaction
let newGame = new Game();
// let newGameBoard = new Board;
// newGameBoard.drawBoard();
// newGameBoard.drawX();
// newGameBoard.drawO();
