function Permutation(arr) {
    const result = [];


    const dfs = (i, arr) => {
        if(i === arr.length) result.push(arr.slice());
        for(let j = i; j <arr.length; j++) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            dfs(i+1, arr);
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    dfs(0, arr);
    return result;
}

function PermutationDuplicate(arr) {
    const result = [];

    const dfs = (i, arr) => {
        if(i === arr.length) result.push(arr.slice());
        const hash = {};
        for(let j = i; j <arr.length; j++) {
            debugger;
            if(hash[arr[j]]) continue;
            hash[arr[j]] = true;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            dfs(i+1, arr);
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    dfs(0, arr);
    return result;
}

export {Permutation, PermutationDuplicate};
