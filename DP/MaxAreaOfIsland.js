function maxAreaOfIsland(grid) {
    this.grid = grid;
    let ans = 0;
    let seen = getInitialData(grid.length, grid[0].length);
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[0].length; c++) {
        ans = Math.max(ans, area(r, c));
      }
    }
    function area(r, c) {
        if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || seen[r][c] || grid[r][c] == 0)
          return 0;
        seen[r][c] = true;
        return (1 + area(r + 1, c) + area(r - 1, c) + area(r, c - 1) + area(r, c + 1));
      }
      return ans;
  }
  function getInitialData(row, column) {
    return Array.from((Array(row), _ => Array(3).fill(0);
  }

  maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]])

// approach 2 using stack

function maxAreaOfIsland2(grid) {
    this.grid = grid;
    let ans = 0;
    let seen = getInitialData(grid.length, grid[0].length);;
    let dr = [1,-1,0,0];
    let dc = [0,0, 1,-1];
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[0].length; c++) {
          if(grid[r][c] === 1 && !seen[r][c])
            
        ans = Math.max(ans, area(r, c));
      }
    }
    function area(r, c) {
        if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || seen[r][c] || grid[r][c] == 0)
          return 0;
        seen[r][c] = true;
        return (1 + area(r + 1, c) + area(r - 1, c) + area(r, c - 1) + area(r, c + 1));
      }
      return ans;
  }