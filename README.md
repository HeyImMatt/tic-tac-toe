# _Tic-Tac-Toe_

#### _Will build the game Tic-tac-toe. We made this program in order to practice using objects. 6/17/_

#### By _**Kyle Hubbard & Matt McFarland**_

## Description

_This program will generate a tic-tac-toe board with 9 spaces arranged in rows of 3. each player will choose, alternating by turns, a space to place their mark, either an X or O, the game will then end when three of the same mark are placed consecutively_

## Specifications

**Objects**Game(holds rules, and all the rest of the objects), Board, Boardpiece(either empty, X, or O), Player(either 1 or 2).

**Behavior** Will display a game board
* Input: at start
* Output: 3 columns, 3 rows, 9 numbered spaces

**Behavior** Will allow a player to mark a board space with either an X or 0
* Input: Player 1 chooses space 5
* Output: space 5 = X

**Behavior** The Board will not allow an X to be placed in an 0 spot or vice versa
* Input: Player 1 chooses to place an X on space 5 which already has an 0
* Output: This space is already marked, player 1 must choose a new space

**Behavior** The game will end once 3 consecutive spaces are occupied by the same symbol
* Input: space 1, 2, & 3 are all occupied by X
* Output: Player 1 wins!

## Setup/Installation Requirements
#### Requirements
* _GitBash or a preferred computer terminal_
* _Web browser_
* _Optional: code editor - suggested VSCode-_
#### Install
* _Navigate to my github repository at: https://github.com/hubba180/tic-tac-toe_
* _Click the green clone or download button and copy the ".git" link_
* _On your homescreen open up your preferred terminal - GitBash recommended - and clone the file to your desktop. If your using GitBash the command is $ git clone https://github.com/hubba180/tic-tac-toe_
* _Navigate into the newly cloned folder and open index.html in any web browser_
* _to view code with GitBash: use $ code ._

## Known Bugs
_No known bugs_

## Support and contact details
_Kyle Hubbard:_
kyle.james.hubbard@gmail.com

_Matt McFarland_
mrmcfarland@gmail.com

## Technologies Used
* HTML
* Bootstrap
* Javascript
* JQuery
* CSS
* Git

### License
MIT - License
Copyright (c) 2020 