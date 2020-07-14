import Piece from "./piece";
import Square from "../square.js";

export default class Bishop extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    const currentLocation = board.findPiece(this);
    const availableBishopMoves = [];

    let highlightedLocation = Square.at(
      currentLocation.row,
      currentLocation.col
    );

    while (true) {
      highlightedLocation.row++;
      highlightedLocation.col--;

      if (squareLocationExists(highlightedLocation)) {
        const copyLocation = Square.at(
          highlightedLocation.row,
          highlightedLocation.col
        );
        availableBishopMoves.push(copyLocation);
      } else {
        break;
      }
    }

    highlightedLocation = Square.at(currentLocation.row, currentLocation.col);

    while (true) {
      highlightedLocation.row++;
      highlightedLocation.col++;

      if (squareLocationExists(highlightedLocation)) {
        const copyLocation = Square.at(
          highlightedLocation.row,
          highlightedLocation.col
        );
        availableBishopMoves.push(copyLocation);
      } else {
        break;
      }
    }

    highlightedLocation = Square.at(currentLocation.row, currentLocation.col);

    while (true) {
      highlightedLocation.row--;
      highlightedLocation.col--;

      if (squareLocationExists(highlightedLocation)) {
        const copyLocation = Square.at(
          highlightedLocation.row,
          highlightedLocation.col
        );
        availableBishopMoves.push(copyLocation);
      } else {
        break;
      }
    }

    highlightedLocation = Square.at(currentLocation.row, currentLocation.col);

    while (true) {
      highlightedLocation.row--;
      highlightedLocation.col++;

      if (squareLocationExists(highlightedLocation)) {
        const copyLocation = Square.at(
          highlightedLocation.row,
          highlightedLocation.col
        );
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
