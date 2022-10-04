function LetterCombination(digits) {
    const result = [], hash = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };

    const dfs = (i, digits, slate) => {
        // backtracking
        if(i > digits.length) return;
        // base case
        if(i === digits.length) {
            result.push(slate.join(''))
            return;
        }

        // dfs recursion
        for(let j = 0; j < hash[digits[i]].length;j++) {
            slate.push(hash[digits[i]][j]);
            dfs(i+1, digits,slate);
            slate.pop();
        }
    }
    dfs(0, digits, []);
    return result;
}

export default LetterCombination;