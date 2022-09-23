function getCelebrity(n, matrix) {
    let indegree = Array(n).fill(0), outdegree =Array(n).fill(0);
    for(let i =0; i< n;i++) {
        for(let j =0; j<n;j++) {
            let x = knows(i,j, matrix);
            outdegree[i] += x;
            indegree[j] += x;
        }
    }
    for(let i =0; i< n;i++) {
        if(indegree[i] === n-1 && outdegree[i] === 0) return i;
    }
    return -1;
}

function knows(a,b, matrix) {
    return matrix[a][b];
}
let matrix = [
    [0,0,1,0],
    [0,0,1,0],
    [0,0,1,0],
    [0,0,1,0]
]

console.log(getCelebrity(4, matrix));


