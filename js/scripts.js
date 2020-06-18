function Game() {
  this.newGameBoard = new Board;
  this.gameMoves = [];
  this.player1Turn = true;
  this.gameOver = false;
  this.newGameBoard.drawBoard();
  this.newGameBoard.listener();
  displayPlayer(this.player1Turn)
}

// Game.prototype.computerSim = function() {
//    let spaceClicked = {
//     xPos: Math.floor(Math.random() * 301),
//     yPos: Math.floor(Math.random() * 301)
//   }
//   console.log(spaceClicked);
//   let coords = this.newGameBoard.spaceChecker(spaceClicked);
//   this.playerMove(coords[0], coords[1], coords[2], true)
// }

Game.prototype.playerMove = function(index, x, y, sim){
  // if (sim) {
  //   if ((!this.gameOver && !this.gameMoves[index])) {
  //     this.newGameBoard.drawO(x, y);
  //     this.gameMoves[index] = 'o';
  //     this.player1Turn = true;
  //   } else if(!this.gameOver) {
  //     this.computerSim()
  //   }
  // }
  if (!this.gameOver && !this.gameMoves[index]) {
    if (this.player1Turn) {
      this.newGameBoard.drawX(x, y);
      this.gameMoves[index] = 'x';
      this.player1Turn = false;
      //this.computerSim();
    }
    else {
      this.newGameBoard.drawO(x, y);
      this.gameMoves[index] = 'o';
      this.player1Turn = true;
    }
  }
  if (this.gameMoves.filter(mark => mark != false).length >= 5) {
    this.gameOverCheck();
  }
  displayPlayer(this.player1Turn);
}

Game.prototype.gameOverCheck = function() {
  let winnerMark;

  if (this.gameMoves[0] ? this.gameMoves[0] === this.gameMoves[1] && this.gameMoves[0] === this.gameMoves[2] : false) {
    winnerMark = this.gameMoves[0];
    this.newGameBoard.drawLine(0, 50, 300, 50)
  } else if (this.gameMoves[3] ? this.gameMoves[3] === this.gameMoves[4] && this.gameMoves[3] === this.gameMoves[5] : false) {
    winnerMark = this.gameMoves[3];
    this.newGameBoard.drawLine(0, 150, 300, 150)
  } else if (this.gameMoves[6] ? this.gameMoves[6] === this.gameMoves[7] && this.gameMoves[6] === this.gameMoves[8] : false) {
    winnerMark = this.gameMoves[6];
    this.newGameBoard.drawLine(0, 250, 300, 250)
  } else if (this.gameMoves[2] ? this.gameMoves[2] === this.gameMoves[4] && this.gameMoves[2] === this.gameMoves[6] : false ) {
    winnerMark = this.gameMoves[2];
    this.newGameBoard.drawLine(300, 0, 0, 300)
  } else if (this.gameMoves[0] ? this.gameMoves[0] === this.gameMoves[4] && this.gameMoves[0] === this.gameMoves[8] : false ) {
    winnerMark = this.gameMoves[0];
    this.newGameBoard.drawLine(0, 0, 300, 300)
  } else if (this.gameMoves[0] ? this.gameMoves[0] === this.gameMoves[3] && this.gameMoves[0] === this.gameMoves[6] : false ) {
    winnerMark = this.gameMoves[0];
    this.newGameBoard.drawLine(50, 0, 50, 300)
  } else if (this.gameMoves[1] ? this.gameMoves[1] === this.gameMoves[4] && this.gameMoves[1] === this.gameMoves[7] : false ) {
    winnerMark = this.gameMoves[1];
    this.newGameBoard.drawLine(150, 0, 150, 300)
  } else if (this.gameMoves[2] ? this.gameMoves[2] === this.gameMoves[5] && this.gameMoves[2] === this.gameMoves[8] : false ) {
    winnerMark = this.gameMoves[2];
    this.newGameBoard.drawLine(250, 0, 250, 300)
  } else if (this.gameMoves.filter(mark => mark != false).length === 9) {
    winnerMark = 'draw'
  }

  if (winnerMark === 'x') {
    this.gameOver = true;
    displayWinner("player-1-wins")
    return 'Player 1 is the winner'
  } else if (winnerMark === "o") {
    this.gameOver = true;
    displayWinner("player-2-wins")
    return 'Player 2 is the winner'
  } else if (winnerMark === "draw") {
    this.gameOver = true;
    displayWinner("draw")
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

function displayWinner(winner) {
  document.getElementById('gameBoard').style.pointerEvents = 'none';
  setTimeout(function() {
    alert('Game Over')
  }, 100);
  document.getElementById(winner).style.display = "block";
}

function displayPlayer(player1Turn) {
  if (player1Turn === true) {
    document.getElementById('player-turn').innerHTML = "Player turn: X";
  } else document.getElementById('player-turn').innerHTML = "Player turn: O";
}

document.getElementById('resetGame').addEventListener('click', () => {
  if(confirm('Are you sure you want to reset?')) {
    location.reload();
  }
})