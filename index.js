import "./styles/main.scss";
import {boardState} from "./boardState.js";
import {createBoard} from "./createSudokuBoard.js";
import {selectedCell} from "./selectedCell.js";
import "./keydownListener.js"

createBoard(boardState, selectedCell);


