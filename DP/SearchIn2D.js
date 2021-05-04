function SearchIn2D(arr, elem) {
    let r = 0, c = arr[0].length - 1;
    while(r < arr.length - 1 && c >= 0) {
        if(arr[r][c] === elem) return true;
        else if(arr[r][c] > elem) c--;
        else r++; 
    }
    return false;
}
SearchIn2D([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 14) // false
SearchIn2D([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3) // true