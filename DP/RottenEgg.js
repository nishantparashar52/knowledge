// rotten egg

var matrix = [
    [ 2, 1, 0, 2, 1 ],
    [ 1, 0, 1, 2, 1 ], 
    [ 1, 0, 0, 2, 1 ]
];

function isSafe(i, j) { 
    if (i >= 0 && i < R && j >= 0 && j < C) 
        return true; 
    return false; 
}
function rotOranges(v)  {
    const R = 3;
    const C = 5;
    var changed = false;
    var no = 2;
    while (true) {
        for (var i = 0; i < R; i++) { 
            for (var j = 0; j < C; j++) { 
  
                // Rot all other oranges present at 
                // (i+1, j), (i, j-1), (i, j+1), (i-1, j) 
                if (v[i][j] == no) { 
                    if (issafe(i + 1, j) && v[i + 1][j] == 1) { 
                        v[i + 1][j] = v[i][j] + 1; 
                        changed = true; 
                    } 
                    if (issafe(i, j + 1) && v[i][j + 1] == 1) { 
                        v[i][j + 1] = v[i][j] + 1; 
                        changed = true; 
                    } 
                    if (issafe(i - 1, j) && v[i - 1][j] == 1) { 
                        v[i - 1][j] = v[i][j] + 1; 
                        changed = true; 
                    } 
                    if (issafe(i, j - 1) && v[i][j - 1] == 1) { 
                        v[i][j - 1] = v[i][j] + 1; 
                        changed = true; 
                    } 
                } 
            } 
        } 
  
        // if no rotten orange found it means all 
        // oranges rottened now 
        if (!changed) 
            break; 
        changed = false; 
        no++; 
    }
    for (var i = 0; i < R; i++) { 
        for (var j = 0; j < C; j++) {
            if(v[i][j] === 1) return '-1';
        }
    }
    return no - 2; 
}

