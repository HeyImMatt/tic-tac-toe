function Game() {
  const player1 = new Player


}

function Player() {

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

  newGameBoard.listener();
}

Board.prototype.drawX = function(x, y) {
  this.gameBoardCtx.beginPath();
  this.gameBoardCtx.moveTo(10,10);
  this.gameBoardCtx.lineTo(90,90);
  this.gameBoardCtx.stroke();

  this.gameBoardCtx.beginPath();
  this.gameBoardCtx.moveTo(90,10);
  this.gameBoardCtx.lineTo(10,90);
  this.gameBoardCtx.stroke();
}

Board.prototype.drawO = function(x, y) {
  this.gameBoardCtx.beginPath();
  this.gameBoardCtx.arc(150, 150, 40, 0, 2 * Math.PI);
  this.gameBoardCtx.stroke();
}

Board.prototype.listener = function() {
  this.gameBoard.addEventListener('click', (event) => {
    let spaceClicked = {
      xPos: event.layerX,
      yPos: event.layerY
    }
    newGameBoard.spaceChecker(spaceClicked);
  })
}

Board.prototype.spaceChecker = function(spaceClicked) {
  if (spaceClicked.yPos <= this.row1) {
    if (spaceClicked.xPos <= this.col1) {
      console.log("space 1");
    } else if (spaceClicked.xPos <= this.col2) {
      console.log("space 2");
    } else if (spaceClicked.xPos <= this.col3) {
      console.log("space 3")
    }
  } else if (spaceClicked.yPos <= this.row2) {
    if (spaceClicked.xPos <= this.col1) {
      console.log("space 4");
    } else if (spaceClicked.xPos <= this.col2) {
      console.log("space 5");
    } else if (spaceClicked.xPos <= this.col3) {
      console.log("space 6")
    }
  } else if (spaceClicked.yPos <= this.row3) {
    if (spaceClicked.xPos <= this.col1) {
      console.log("space 7");
    } else if (spaceClicked.xPos <= this.col2) {
      console.log("space 8");
    } else if (spaceClicked.xPos <= this.col3) {
      console.log("space 9")
    }
  }
}

function playerAction(spaceClicked) {
  console.log(spaceClicked)
}

function BoardSpace() {
  
}

//DOM interaction
let newGameBoard = new Board;
newGameBoard.drawBoard();
newGameBoard.drawX();
newGameBoard.drawO();
