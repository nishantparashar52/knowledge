function NQueen(n) {
    const result = [];


    const dfs = (i, n, slate) => {
        // backtracking
        let lastQ = i -1;
        for(let prevQ = 0; prevQ < lastQ; prevQ++) {
            //col case
            if(slate[lastQ] === slate[prevQ]) return;
            // diagnoal conflict
            let rowDiff = Math.abs(prevQ - lastQ);
            let colDiff = Math.abs(slate[prevQ] - slate[lastQ]);
            if(rowDiff === colDiff) return;
        }
        // base case
        if(i === n) {
            result.push(slate.slice());
            return;
        }
        for(let col = 0; col < n; col++) {
            slate.push(col);
            dfs(i + 1, n, slate);
            slate.pop();
        }
    }

    dfs(0, n, []);
    return result.map(board => formatBoard(board));
}

function formatBoard(board) {
    const result = [];
    for(let i =0 ; i<board.length; i++) {
        let newBoard = Array(board.length).fill('.');
        newBoard[board[i]] = 'Q';
        result.push(newBoard.join(''));
    }
    return result;
}

export default NQueen;