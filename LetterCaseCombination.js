function LetterCaseCombination(s) {
    const result = [];

    const dfs = (i, arr, slate) => {
        //backtracking case

        // base case
        if(i === arr.length) {
            return result.push(slate.join(''));
        }
        // const currentString = arr[i];
        const regex = /[a-zA-Z]/g;
        if(arr[i].match(regex)){
            //lowercase
            slate.push(arr[i]);
            dfs(i+1, arr, slate);
            slate.pop();
            //uppercase
            slate.push(arr[i].toUpperCase());
            dfs(i+1, arr, slate);
            slate.pop();
        } else {
            slate.push(arr[i]);
            dfs(i + 1, arr, slate);
            slate.pop();
        }
    }
    dfs(0, s, []);
    return result;
}

export default LetterCaseCombination;
