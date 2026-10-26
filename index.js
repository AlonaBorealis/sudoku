import "./styles/styles.scss";

/*достаем наш контейнер где будет храниться судоку и сама судоку в формате строки.*/
const board = document.querySelector(".board");
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

/*функция для очистки контейнера с доской, чтобы избежать дублирования.*/
const cleanBoard = () => {
	board.innerHTML = "";
};

/*функция отвечает за отрисовку нашей судоку.*/
const createBoard = (puzzle) => {

	/*вызываем функцию, чтобы очистить предыдущие доски*/
	cleanBoard();

	/*цикл начинает идти по строкам и создает отдельные контейнеры под каждую строку.*/
	for (let i = 0; i < puzzle.length; i++) {
		const group = document.createElement("div");

		/*задаем каждой строке класс, атрибуты и добавляем строки в контейнер board.*/
		group.classList.add("board__row");
		group.setAttribute("role", "row");
		board.appendChild(group);

		/*цикл идет по объектам внутри строки и создает клетку для каждого.*/
		for (let j = 0; j < puzzle[i].length; j++) {
			const item = document.createElement("span");

			/*идет проверка на то, задана ли цифра по умолчанию или ее ввел пользователь, если
			 проверка проходит, то задаем атрибут, который блокирует возможность изменять
			  значение.*/
			if (puzzle[i][j].isFixed === true) {
				item.setAttribute("aria-readonly", "true");
			}

			/*задаем внутрь клетки значение.*/
			item.textContent = puzzle[i][j].value;

			/*задаем для каждой клетки координаты в виде значения строки и колонки.*/
			item.dataset.row = i;
			item.dataset.col = j;

			/*добавляем клеткам класс, атрибут и добавляем внутрь строки.*/
			item.classList.add("board__cell");
			item.setAttribute("role", "gridcell");
			group.appendChild(item);
			/*получаем данные из обработчика событий, который слушает клики, и проверяем
			существует ли кнопка на которую нажали, а дальше смотрим какая это кнопка по ее
			координатам и присваиваем ей модификатор selected*/
			if (selectedCell && i === selectedCell.row && j === selectedCell.col) {
				item.classList.add("board__cell--selected");
			}
		}
	}

	/*возвращаем отрисованную доску.*/
	return board;
};


const boardState = parsePuzzle(originalPuzzle);

let selectedCell = null;

board.addEventListener("click", (event) => {
	if (event.target.classList.contains("board__cell")) {
		selectedCell = {
			row: Number(event.target.dataset.row),
			col: Number(event.target.dataset.col),
		};
		createBoard(boardState);
	}

});


createBoard(boardState);


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
			createBoard(boardState);

		}

	},
);

console.log(boardState);


