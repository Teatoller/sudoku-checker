export function getBoardInput() {
    const input = document.getElementById('sudoku-input').value;
    return input.trim().split('\n').map(row => row.split(' ').map(Number));
  }
  
  export function createBoardFromInput(input) {
    return input;
  }
  
  export function showResult(isValid) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = isValid ? 'Valid Sudoku!' : 'Invalid Sudoku!';
  }
  