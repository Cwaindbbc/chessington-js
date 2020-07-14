import Piece from "./piece";
import Square from "../square.js";

export default class Bishop extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    const currentLocation = board.findPiece(this);
    const availableBishopMoves = [];

    const highlightedLocation = Square.at(
      currentLocation.row,
      currentLocation.col
    );
    while (true) {
      highlightedLocation.row++;
      highlightedLocation.col--;


      if (squareLocationExists(highlightedLocation)) {
        const copyLocation = Square.at(highlightedLocation.row,highlightedLocation.col);
        availableBishopMoves.push(copyLocation);
      } else {
        break;
      }
    
    }
    console.log(availableBishopMoves);
    return availableBishopMoves;
  }
}
function squareLocationExists(square) {
  if (
    square.row >= 0 &&
    square.row <= 7 &&
    square.col >= 0 &&
    square.col <= 7
  ) {
    return true;
  } else {
    return false;
  }
}

/*
1.  get location square
2. Potential moves = 
initailise array - avaialble moves
 a)forward left: 
    increment  row, decrement the col
    check if this potential move still exists ,if not existing the stop the loop.
    push potential square in to the array each time we iterate
    
 b)forward right
 c)backward left
d)backward right

*/
// put all four sections in to one and return.
//logic for same sqaure.
