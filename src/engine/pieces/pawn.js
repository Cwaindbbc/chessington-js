import Piece from "./piece";
import Player from "../player";

export default class Pawn extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {


     if (this.player === Player.WHITE) {
       return new Array({ row: 1, col: 0 });
     }
     if (this.player === Player.BLACK) {
      return new Array({ row:6, col:7 });
    }
  }
}
