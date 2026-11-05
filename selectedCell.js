import {board, createBoard} from "./createSudokuBoard.js";
import {boardState} from "./boardState.js";

export let selectedCell = null;

board.addEventListener("click", (event) => {
	if (event.target.classList.contains("board__cell")) {

		selectedCell = {
			row: Number(event.target.dataset.row),
			col: Number(event.target.dataset.col),
		};

		createBoard(boardState, selectedCell);
	}

});
