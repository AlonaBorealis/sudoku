import {countBlockNumber} from "./countBlockNumber.js";
import {boardState} from "./boardState.js";

export const isColoredBySelection = (row, col, selectedCell) => {
	if (!selectedCell) {
		return false;
	}

	const blockNumberOfSelectedCell = countBlockNumber(selectedCell.row, selectedCell.col);

	const blockNumberOfCell = countBlockNumber(row, col);

	const inSameBlock = blockNumberOfCell.rowNumber === blockNumberOfSelectedCell.rowNumber
		&&
		blockNumberOfCell.colNumber === blockNumberOfSelectedCell.colNumber;


	const inSameRowOrCol = row === selectedCell.row || col === selectedCell.col;

	return inSameBlock || inSameRowOrCol;

};

export const isColoredSameNumbers = (row, col, selectedCell) => {
	const cellValue = boardState[row][col].value;

	if (!selectedCell) {
		return false;
	} else if (cellValue === null) {
		return false;
	}

	const selectedCellValue = boardState[selectedCell.row][selectedCell.col].value;

	return cellValue === selectedCellValue;
};
