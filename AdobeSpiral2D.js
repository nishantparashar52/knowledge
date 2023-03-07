function spiral2D(arr) {
  let spiralArr = [],
    booleanRow = true,
    booleanCol = true,
    row = 0,
    col = 0,
    rowLength = arr.length - 1,
    colLength = arr[0].length - 1,
    currIndex = 0;

  function innerFn(row, col, currIndex) {
    while (col <= colLength - currIndex && row <= rowLength - currIndex) {
      // Traverse right
      if (booleanCol) {
        for (let i = col; i <= colLength - currIndex; i++) {
          spiralArr.push(arr[row][i]);
        }
        booleanCol = false;
        row++;
      }
      // Traverse down
      else if (booleanRow) {
        for (let i = row; i <= rowLength - currIndex; i++) {
          spiralArr.push(arr[i][colLength - currIndex]);
        }
        booleanRow = false;
        colLength--;
      }
      // Traverse left
      else if (!booleanCol) {
        for (let i = colLength - currIndex; i >= col; i--) {
          spiralArr.push(arr[rowLength - currIndex][i]);
        }
        booleanCol = true;
        rowLength--;
      }
      // Traverse up
      else if (!booleanRow) {
        for (let i = rowLength - currIndex; i >= row; i--) {
          spiralArr.push(arr[i][currIndex]);
        }
        booleanRow = true;
        col++;
      }
    }
    if (currIndex < Math.min(rowLength, colLength)) {
      innerFn(row, col, currIndex + 1);
    }
  }

  innerFn(row, col, currIndex);
  return spiralArr;
}

console.log(spiral2D([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]));