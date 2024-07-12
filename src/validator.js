const isUnique = (array) => {
    const set = new Set(array);
    return set.size === 9 && !set.has(0);
  };
  
  const validateRows = (board) => board.every(isUnique);
  
  const validateColumns = (board) => {
    for (let col = 0; col < 9; col++) {
      const column = board.map(row => row[col]);
      if (!isUnique(column)) {
        return false;
      }
    }
    return true;
  };
  
  const validateGrids = (board) => {
    for (let row = 0; row < 9; row += 3) {
      for (let col = 0; col < 9; col += 3) {
        const grid = [];
        for (let r = 0; r < 3; r++) {
          for (let c = 0; c < 3; c++) {
            grid.push(board[row + r][col + c]);
          }
        }
        if (!isUnique(grid)) {
          return false;
        }
      }
    }
    return true;
  };
  
  export function validateSudoku(board) {
    return validateRows(board) && validateColumns(board) && validateGrids(board);
  }
  