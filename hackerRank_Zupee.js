function findEleminMatrix(elem, matrix) {
    let m = matrix[0].length - 1;
    let n = matrix.length - 1;
    let i = 0;
    let j = n;
    while(i <= m && j <= n) {
       if(matrix[i][j] < elem) {
        i++;
    } else if(matrix[i][j] > elem) {
       j--;
    } else return true;
    }
    return false;
}

function main() {
    const matrix = [[1,2,3,4,5],[1,7,8,9,10],[6,8,13,14,15],[11.5,17,18,19,20]];
    
    var result = findEleminMatrix(9, matrix);
    console.log(result);
}

// max vowels
function findMaxVowels(matrix) {
    let m = matrix.length - 1;
    let n = matrix[0].length - 1;
    let i = 0;
    let j = 0;
    const vowels = ['a', 'e', 'i', 'o' ,'u'];
    let rowCount = 0;
    while(i <= m && j <= n) {
       if(vowels.indexOf(matrix[i][j]) > -1) {
        rowCount++;
        j++;
        } else i++;
    }
    return rowCount;
}