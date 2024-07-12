import { validateSudoku } from './validator';
import { createBoardFromInput, getBoardInput, showResult } from './ui';

document.getElementById('validate-button').addEventListener('click', () => {
  const boardInput = getBoardInput();
  const board = createBoardFromInput(boardInput);
  const isValid = validateSudoku(board);
  showResult(isValid);
});
