function Subset90(arr) {

    const result = [];

    const dfs = (i, arr, slate) => {
        // base case
        if(i === arr.length) {
            return result.push(slate.slice(''));
        }
        // dfs case
        dfs(i + 1, arr, slate);
        slate.push(arr[i]);
        dfs(i+1, arr, slate);
        slate.pop();
    }

    dfs(0, arr, []);
    const hash = {};
    for(let i of result) {
        hash[i] = i;
    }
    return Object.values(hash);
}

export default Subset90;
