// constructor approach
class maxAreaOfIsland {
    constructor(grid) {
        this.grid = grid;
        this.row = grid.length;
        this.column = grid[0].length;
        this.seen = this.getInitialData(this.row, this.column);
        this.ans = 0;
    }
    getArea(r, c) {
        if (r < 0 || r >= this.row || c < 0 || c >= this.column || this.seen[r][c] || this.grid[r][c] == 0) return 0;
        this.seen[r][c] = true;
        return (1 + this.getArea(r + 1, c) + this.getArea(r - 1, c) + this.getArea(r, c - 1) + this.getArea(r, c + 1));
    }
    getInitialData(row, column) {
        return Array.from(Array(row), _ => Array(column).fill(0));
    }
    getTotalArea() {
        for (let r = 0; r < this.row; r++) {
            for (let c = 0; c < this.column; c++) {
                this.ans = Math.max(this.ans, this.getArea(r, c));
            }
        }
        return this.ans;
    }
}

const area = [[0,0,1,0,0,0,0,1,0,0,0,0,0],
[0,0,0,0,0,0,0,1,1,1,0,0,0],
[0,1,1,0,1,0,0,0,0,0,0,0,0],
[0,1,0,0,1,1,0,0,1,0,1,0,0],
[0,1,0,0,1,1,0,0,1,1,1,0,0],
[0,0,0,0,0,0,0,0,0,0,1,0,0],
[0,0,0,0,0,0,0,1,1,1,0,0,0],
[0,0,0,0,0,0,0,1,1,0,0,0,0]];
var maxArea = new maxAreaOfIsland(area);
maxArea.getTotalArea();