const originalPuzzle =
	"530070000600195000098000060800060003400803001700020006060000280000419005000080079";


/*функция преобразовывает строку в массив и делаем из цифр объекты, со значениями value,
 isFixed, notes.*/
const createCellsFromPuzzle = (puzzle) => {
	return [...puzzle].map((number) => {
		const cell = {value: null, isFixed: false, notes: []};
		if (Number(number) !== 0) {
			cell.value = Number(number);
			cell.isFixed = true;
		}
		return cell;
	});
};

/* функция разбивает наш массив на 9 маленьких массивов - строки. в результате возвращаем
 двумерный
 массив.*/
const chunkIntoRows = (arr) => {
	const boardOfRows = [];
	for (let i = 0; i < arr.length; i += 9) {
		boardOfRows.push(arr.slice(i, i + 9));
	}
	return boardOfRows;
};

/*функция объединяет в себе преобразование цифр в объекты и разбивание массива на 9
 массивов строк, сделано для удобства, чтобы можно было сделать преобразование одним вызовом.*/
const parsePuzzle = (puzzle) => {
	return chunkIntoRows(createCellsFromPuzzle(puzzle));
};

export const boardState = parsePuzzle(originalPuzzle);
