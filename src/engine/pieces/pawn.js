import Piece from "./piece";
import Player from "../player";
import Square from "../square";

export default class Pawn extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    const currentLocation = board.findPiece(this);
    const possiblePawnLocations = [];

    // If the pawn is on row 1, the can move 2 squares forward (or 1- players choice?)
    // Does player want to move it one or two?
    // can we move in to the plusOneRow somehow?

    if (this.player === Player.WHITE) {
      const plusOneRow = currentLocation.row + 1;

      const availableLocation = Square.at(plusOneRow, currentLocation.col);
      possiblePawnLocations.push(availableLocation);

      if (currentLocation.row === 1) {
        const twoMovesRow = currentLocation.row + 2;

        possiblePawnLocations.push(Square.at(twoMovesRow, currentLocation.col));
      }
    } else {

      if (currentLocation.row === 6) {
        const twoMovesRow = currentLocation.row - 2;

        possiblePawnLocations.push(Square.at(twoMovesRow, currentLocation.col));
      }
      const minusOneRow = currentLocation.row - 1;
      const availableLocation = Square.at(minusOneRow, currentLocation.col);
      possiblePawnLocations.push(availableLocation);
    }

    return possiblePawnLocations;
  }
}
