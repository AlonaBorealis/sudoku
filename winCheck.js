import {hasDuplicate} from "./duplicateCheck.js";

export const winChecker = (puzzle) => {
	for (let i = 0; i < puzzle.length; i++) {
		for (let j = 0; j < puzzle[i].length; j++) {
			if (puzzle[i][j].value === null) {
				return false;
			}
			if (hasDuplicate(i, j)) {
				return false;
			}
		}
	}
	return true;
};
