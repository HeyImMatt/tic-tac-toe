function Game() {
  const player1 = new Player


}

function Player() {

}

function Board() {


}

Board.prototype.drawBoard = function() {
  const gameBoard = document.getElementById('gameBoard');
  const gameBoardCtx = gameBoard.getContext('2d');
  gameBoardCtx.beginPath();
  gameBoardCtx.moveTo(100, 0);
  gameBoardCtx.lineTo(100, 300);
  gameBoardCtx.stroke();

  gameBoardCtx.beginPath();
  gameBoardCtx.moveTo(200, 0);
  gameBoardCtx.lineTo(200, 300);
  gameBoardCtx.stroke();

  gameBoardCtx.beginPath();
  gameBoardCtx.moveTo(0, 100);
  gameBoardCtx.lineTo(300, 100);
  gameBoardCtx.stroke();
  
  gameBoardCtx.beginPath();
  gameBoardCtx.moveTo(0, 200);
  gameBoardCtx.lineTo(300, 200);
  gameBoardCtx.stroke();
}

function BoardSpace() {
  
}

//DOM interaction
let newGameBoard = new Board;
newGameBoard.drawBoard();

console.log(document.getElementById('gameBoard'));