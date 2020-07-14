import Piece from "./piece";
import Square from "../square";

export default class Rook extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    const currentLocation = board.findPiece(this);

    let possibleRookLocations = [];

    for (let i = 0; i < 8; i++) {
      if (currentLocation.col != i) {
        possibleRookLocations.push(Square.at(currentLocation.row, i));
      }
    }

    for (let i = 0; i < 8; i++) {
      if (currentLocation.row != i) {
        possibleRookLocations.push(Square.at(i, currentLocation.col));
      }
    }

    return possibleRookLocations;
  }
}
