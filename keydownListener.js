import {selectedCell} from "./selectedCell.js";
import {boardState} from "./boardState.js";
import {createBoard} from "./createSudokuBoard.js";
import {winChecker} from "./winCheck.js";

document.addEventListener("keydown", (event) => {
		const digit = Number(event.key);
		const key = event.key;
		if (!selectedCell) {
			return;
		}

		const cell = boardState[selectedCell.row][selectedCell.col];

		if (!cell.isFixed) {

			if (digit >= 1 && digit <= 9) {
				cell.value = digit;
			} else if (key === "Backspace" || key === "Delete") {
				cell.value = null;
			}

			createBoard(boardState, selectedCell);

		}
	console.log(winChecker(boardState))
	},

);
