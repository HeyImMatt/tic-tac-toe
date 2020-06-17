function Game() {
  const player1 = new Player


}

function Player() {

}

function Board() {
  this.gameBoard = document.getElementById('gameBoard');
  this.gameBoardCtx = gameBoard.getContext('2d');
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

Board.prototype.listener = function() {
  this.gameBoard.addEventListener('click', (event) => {
    let spaceClicked = {
      xPos: event.layerX,
      yPos: event.layerY
    }
    playerAction(spaceClicked);
  })
}

function playerAction(spaceClicked) {
  console.log(spaceClicked)
}

function BoardSpace() {
  
}

//DOM interaction
let newGameBoard = new Board;
newGameBoard.drawBoard();

console.log(document.getElementById('gameBoard'));