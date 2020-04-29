function subSequence(source = [], target = [], m, n) {
    if (m === 0) return true;
    if(n === 0) return false; // empty array
    if (souce[m-1] === target[n-1]) {
        subSequence(source, target, m-1, n-1);
    }
    subSequence(source, target, m, n - 1);
}