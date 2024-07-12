const createBoardFromInput = (input) => {
    const rows = input.trim().split('\n');
    return rows.map(row => row.split(' ').map(Number));
  };
  
  const getBoardInput = () => {
    return document.getElementById('sudoku-input').value;
  };
  
  const showResult = (isValid) => {
    const result = document.getElementById('result');
    result.textContent = isValid ? 'Valid Sudoku!' : 'Invalid Sudoku!';
  };
  
  module.exports = {
    createBoardFromInput,
    getBoardInput,
    showResult,
  };
  