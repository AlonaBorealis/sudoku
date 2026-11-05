import {countBlockNumber, hasDuplicate} from "./duplicateCheck.js";

export const board = document.querySelector(".board");

/*функция для очистки контейнера с доской, чтобы избежать дублирования.*/
const cleanBoard = () => {
	board.innerHTML = "";
};

/*функция отвечает за отрисовку нашей судоку.*/
export const createBoard = (puzzle, selectedCell) => {

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

			if (selectedCell && (i === selectedCell.row || j === selectedCell.col || (countBlockNumber(i, j).rowNumber === countBlockNumber(selectedCell.row, selectedCell.col).rowNumber && countBlockNumber(i,j).colNumber === countBlockNumber(selectedCell.row, selectedCell.col).colNumber))) {
				item.classList.add("board__cell--colored-by-selection");
			}

			if (hasDuplicate(i, j)) {
				item.classList.add("board__cell--duplicate");
				if (!puzzle[i][j].isFixed) {
					item.classList.add("board__cell--duplicate-not-fixed");
				}
			}

		}
	}

	/*возвращаем отрисованную доску.*/
	return board;
};
