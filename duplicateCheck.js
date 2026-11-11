import {boardState} from "./boardState.js";
import {countBlockNumber} from "./countBlockNumber.js";

const hasDuplicateInRow = (row, col) => {
	const cellValue = boardState[row][col].value;

	/*делаем проверку пустая ли клетка, если да, то сразу выходим с функции - нам тут
	 проверять нечего*/
	if (cellValue === null) {
		return false;
	}
	/*идем по нашей строке*/
	for (let i = 0; i < boardState[row].length; i++) {

		/*если мы наступим на проверяемую клетку, то мы ее пропустим*/
		if (col !== i) {

			if (boardState[row][i].value === cellValue) {
				return true;
			}
		}
	}
	return false;
};

const hasDuplicateInCol = (row, col) => {
	const cellValue = boardState[row][col].value;

	/*делаем проверку пустая ли клетка, если да, то сразу выходим с функции - нам тут
	 проверять нечего*/
	if (cellValue === null) {
		return false;
	}
	/*идем по нашему столбцу*/
	for (let i = 0; i < boardState.length; i++) {

		/*если мы наступим на проверяемую клетку, то мы ее пропустим*/
		if (row !== i) {

			if (boardState[i][col].value === cellValue) {
				return true;
			}
		}
	}
	return false;
};

const hasDuplicateInBlock = (row, col, blockNumber) => {
	const cellValue = boardState[row][col].value;

	if (cellValue === null) {
		return false;
	}

	const firstCellRow = blockNumber.rowNumber * 3;
	const firstCellCol = blockNumber.colNumber * 3;

	for (let i = firstCellRow; i < firstCellRow + 3; i++) {
		for (let j = firstCellCol; j < firstCellCol + 3; j++) {

			if (i !== row || j !== col)
				if (boardState[i][j].value === cellValue) {
					return true;
				}
		}
	}
	return false;
};

export const hasDuplicate = (row, col) => hasDuplicateInRow(row, col) || hasDuplicateInCol(row, col) || hasDuplicateInBlock(row, col, countBlockNumber(row, col));
