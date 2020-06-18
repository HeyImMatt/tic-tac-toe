function Game() {
  this.newGameBoard = new Board;
  this.gameMoves = [];
  this.player1Turn = true;
  this.gameOver = false;

  this.newGameBoard.drawBoard();
  this.newGameBoard.listener();
}

Game.prototype.playerMove = function(index, x, y ){
  if (!this.gameOver && !this.gameMoves[index]) {
    if (this.player1Turn) {
      this.newGameBoard.drawX(x, y);
      this.gameMoves[index] = 'x';
      this.player1Turn = false;
    } else {
      this.newGameBoard.drawO(x, y);
      this.gameMoves[index] = 'o';
      this.player1Turn = true;
    }
  }
  if (this.gameMoves.filter(mark => mark != false).length >= 5) {
    console.log(this.gameOverCheck());
  }
}

Game.prototype.gameOverCheck = function() {
  let winnerMark;

  if (this.gameMoves[0] ? this.gameMoves[0] === this.gameMoves[1] && this.gameMoves[0] === this.gameMoves[2] : false) {
    winnerMark = this.gameMoves[0];
  } else if (this.gameMoves[3] ? this.gameMoves[3] === this.gameMoves[4] && this.gameMoves[3] === this.gameMoves[5] : false) {
    winnerMark = this.gameMoves[3];
  } else if (this.gameMoves[6] ? this.gameMoves[6] === this.gameMoves[7] && this.gameMoves[6] === this.gameMoves[8] : false) {
    winnerMark = this.gameMoves[6];
  } else if (this.gameMoves[2] ? this.gameMoves[2] === this.gameMoves[4] && this.gameMoves[2] === this.gameMoves[6] : false ) {
    winnerMark = this.gameMoves[2];
  } else if (this.gameMoves[0] ? this.gameMoves[0] === this.gameMoves[4] && this.gameMoves[0] === this.gameMoves[8] : false ) {
    winnerMark = this.gameMoves[0];
  } else if (this.gameMoves[0] ? this.gameMoves[0] === this.gameMoves[3] && this.gameMoves[0] === this.gameMoves[6] : false ) {
    winnerMark = this.gameMoves[0];
  } else if (this.gameMoves[1] ? this.gameMoves[1] === this.gameMoves[4] && this.gameMoves[1] === this.gameMoves[7] : false ) {
    winnerMark = this.gameMoves[1];
  } else if (this.gameMoves[2] ? this.gameMoves[2] === this.gameMoves[5] && this.gameMoves[2] === this.gameMoves[8] : false ) {
    winnerMark = this.gameMoves[2];
  } else if (this.gameMoves.filter(mark => mark != false).length === 9) {
    winnerMark = 'draw'
  }

  if (winnerMark === 'x') {
    return 'Player 1 is the winner'
  } else if (winnerMark === "o") {
    return 'Player 2 is the winner'
  } else if (winnerMark === "draw") {
    return 'We have a draw'
  } 
}

function Board() {
  this.gameBoard = document.getElementById('gameBoard');
  this.gameBoardCtx = gameBoard.getContext('2d');
  this.row1 = 100;
  this.row2 = 200;
  this.row3 = 300;
  this.col1 = 100;
  this.col2 = 200;
  this.col3 = 300;
}

Board.prototype.drawBoard = function() {
  //refactor this to use array for the coords and a foreach
  this.drawLine(100, 0, 100, 300)
  this.drawLine(200, 0, 200, 300)
  this.drawLine(0, 100, 300, 100)
  this.drawLine(0, 200, 300, 200)
}

Board.prototype.drawX = function(x, y) {
  this.drawLine(x - 40, y - 40, x + 40, y + 40)
  this.drawLine(x + 40, y - 40, x - 40, y + 40)
}

Board.prototype.drawO = function(x, y) {
  this.gameBoardCtx.beginPath();
  this.gameBoardCtx.arc(x, y, 40, 0, 2 * Math.PI);
  this.gameBoardCtx.stroke();
}

Board.prototype.drawLine = function(xStart, yStart, xEnd, yEnd) {
  this.gameBoardCtx.beginPath();
  this.gameBoardCtx.moveTo(xStart, yStart);
  this.gameBoardCtx.lineTo(xEnd, yEnd);
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
//This let newgame seems wrong (to be by itself)
let newGame = new Game();

function displayWinner() {
  setTimeout(function() {
    alert('We have a winner')
  }, 100);
}

document.getElementById('resetGame').addEventListener('click', () => {
  if(confirm('Are you sure you want to reset?')) {
    location.reload();
  }
})