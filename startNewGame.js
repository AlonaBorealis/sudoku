import {clearSelectedCell} from "./selectedCell.js";
import {clearBoardForNewGame} from "./boardState.js";

export const startNewGame = () => {
	clearSelectedCell();
	clearBoardForNewGame();
};




