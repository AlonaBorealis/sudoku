import {startNewGame} from "./startNewGame.js";

export const winScreen = document.querySelector(".win-screen");

const buttonBackToBoard = document.querySelector(".win-screen__back-to-board-button");
const buttonStartNewGame = document.querySelector(".win-screen__new-game-button");

export const showWinScreen = (winChecker) => {
	if (winChecker) {
		return winScreen.classList.add("win-screen--visible");
	}
};

const removeVisibilityOfWinWindow = () => {
	winScreen.classList.remove("win-screen--visible");
};

buttonBackToBoard.addEventListener("click", removeVisibilityOfWinWindow);

buttonStartNewGame.addEventListener("click", ()=> {
	removeVisibilityOfWinWindow()
	startNewGame()
})

