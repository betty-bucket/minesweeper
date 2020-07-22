document.addEventListener('DOMContentLoaded', startGame)



// Define your `board` object here!
var board =  {
  cells:
  [{row: 0, col: 0, isMine: true, hidden: true},
  {row: 0, col: 1, isMine: false, hidden: true},
  {row: 0, col: 2, isMine: true, hidden: true},
  {row: 1, col: 0, isMine: false, hidden: true},
  {row: 1, col: 1, isMine: true, hidden: true},
  {row: 1, col: 2, isMine: true, hidden: true},
  {row: 2, col: 0, isMine: false, hidden: true},
  {row: 2, col: 1, isMine: true, hidden: true},
  {row: 2, col: 2, isMine: true, hidden: true}]
}

function startGame () {
  // Don't remove this function call: it makes the game work!
  

  for (i=0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines (board.cells[i])
  }

  lib.initBoard()

  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForWin)

}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?

function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
  for (var i = 0; i < board.cells.length; i++) {

  if (board.cells[i].isMine === true && board.cells[i].isMarked === false) {
    return
  } else if (board.cells[i].isMine === false && board.cells[i].hidden === true) {
    return
  } 
}
  lib.displayMessage('You win! YAYYYYYY!')

  //for each cell if ismine is true and is marked is true then it's a winning cell.
  //for each cell if ismine is false and hidden is false then this is also a winning cell.
  

}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0;
  for (var i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine == true) {
      count++;
    }
  } 
    return count;  
   

  //if surrounding cells have isMine property:true, then count this

}

//Your job is to define it so it returns the number of cells around the current cell that have the isMine property set to true.

//Think about how to get row and col out of your cell object: remember dot and bracket notation?

//You're going to have to loop through the surrounding cells returned from getSurroundingCells, checking each one to see if it's a mine and adding to a count variable if it is.

//Once you have the correct count, return it.