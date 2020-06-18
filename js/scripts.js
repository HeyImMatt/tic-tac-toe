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
    console.log(this.gameOverCheck());
  }
  // if (this.gameMoves.length >= 5 && this.gameMoves.length <= 9) {
  //   this.gameOverCheck();
  // } //need a draw check
}

Game.prototype.gameOverCheck = function() {
  let winnerMark;
  for (let i = 0; i < this.gameMoves.length; i++) {
    if (this.gameMoves[i]) {
      if (this.gameMoves[i*3] ? this.gameMoves[i*3] === this.gameMoves[(i*3) + 1] && this.gameMoves[i*3] === this.gameMoves[(i*3) + 2] : false) {
        winnerMark = this.gameMoves[i*3];
      } else if (this.gameMoves[2] ? this.gameMoves[2] === this.gameMoves[4] && this.gameMoves[2] === this.gameMoves[6] : false ) {
        winnerMark = this.gameMoves[2];
      } else if ((this.gameMoves[i] === this.gameMoves[i + 3] && this.gameMoves[i] === this.gameMoves[i + 6])
      || (this.gameMoves[i] === this.gameMoves[i + 4] && this.gameMoves[i] === this.gameMoves[i + 8])) {
        winnerMark = this.gameMoves[i]
      }
    }
  }
  if (winnerMark === 'x') {
    return 'player 1 is the winner'
  } else if (winnerMark === "o") {
    return 'player 2 is the winner'
  } 


  
  // if (this.gameMoves[0] === this.gameMoves[1] && this.gameMoves[0] === this.gameMoves[2]) {
  //   if (this.gameMoves[0] === "x") {
  //     console.log('player 1 wins')
  //     this.gameOver = true;
  //     displayWinner();
  //   } else if (this.gameMoves[0] === "o") {
  //     console.log('player 2 wins')
  //     this.gameOver = true;
  //     displayWinner();
  //   }
  // } else if (this.gameMoves[3] === this.gameMoves[4] && this.gameMoves[3] === this.gameMoves[5]) {
  //   if (this.gameMoves[3] === "x") {
  //     console.log('player 1 wins')
  //     this.gameOver = true;
  //     displayWinner();
  //   } else if (this.gameMoves[3] === "o") {
  //     console.log('player 2 wins')
  //     this.gameOver = true;
  //     displayWinner();
  //   }
  // } else if (this.gameMoves[6] === this.gameMoves[7] && this.gameMoves[6] === this.gameMoves[8]) {
  //   if (this.gameMoves[6] === "x") {
  //     console.log('player 1 wins')
  //     this.gameOver = true;
  //     displayWinner();
  //   } else if (this.gameMoves[6] === "o") {
  //     console.log('player 2 wins')
  //     this.gameOver = true;
  //     displayWinner();
  //   }
  // } else if (this.gameMoves[0] === this.gameMoves[3] && this.gameMoves[0] === this.gameMoves[6]) {
  //   if (this.gameMoves[0] === "x") {
  //     console.log('player 1 wins')
  //     this.gameOver = true;
  //     displayWinner();
  //   } else if (this.gameMoves[0] === "o") {
  //     console.log('player 2 wins')
  //     this.gameOver = true;
  //     displayWinner();
  //   }
  // } else if (this.gameMoves[1] === this.gameMoves[4] && this.gameMoves[1] === this.gameMoves[7]) {
  //   if (this.gameMoves[1] === "x") {
  //     console.log('player 1 wins')
  //     this.gameOver = true;
  //     displayWinner();
  //   } else if (this.gameMoves[1] === "o") {
  //     console.log('player 2 wins')
  //     this.gameOver = true;
  //     displayWinner();
  //   }
  // } else if (this.gameMoves[2] === this.gameMoves[5] && this.gameMoves[2] === this.gameMoves[8]) {
  //   if (this.gameMoves[2] === "x") {
  //     console.log('player 1 wins')
  //     this.gameOver = true;
  //     displayWinner();
  //   } else if (this.gameMoves[2] === "o") {
  //     console.log('player 2 wins')
  //     this.gameOver = true;
  //     displayWinner();
  //   }
  // } else if (this.gameMoves[0] === this.gameMoves[4] && this.gameMoves[0] === this.gameMoves[8]) {
  //   if (this.gameMoves[0] === "x") {
  //     console.log('player 1 wins')
  //     this.gameOver = true;
  //     displayWinner();
  //   } else if (this.gameMoves[0] === "o") {
  //     console.log('player 2 wins')
  //     this.gameOver = true;
  //     displayWinner();
  //   }
  // } else if (this.gameMoves[2] === this.gameMoves[4] && this.gameMoves[2] === this.gameMoves[6]) {
  //   if (this.gameMoves[2] === "x") {
  //     console.log('player 1 wins')
  //     this.gameOver = true;
  //     displayWinner();
  //   } else if (this.gameMoves[2] === "o") {
  //     console.log('player 2 wins')
  //     this.gameOver = true;
  //     displayWinner();
  //   }
  // }
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

//Board.prototype.drawLine for winner line

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