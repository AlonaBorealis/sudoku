export const countBlockNumber = (row, col) => {

	const rowNumber = Math.trunc(row / 3);
	const colNumber = Math.trunc(col / 3);

	return {
		rowNumber: rowNumber,
		colNumber: colNumber,
	};
};
