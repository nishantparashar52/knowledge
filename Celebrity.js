function Celebrity(arr) {
    let stack = [];
    for(let k of arr) stack.push(k);
    while(stack.length >= 2) {
        const i = stack.pop();
        const j = stack.pop();
        if(arr[i][j] === 1) {
            //if i knows j i is not a celebrity
            stack.push(j);
        } else {
            //if i doesn't know j => j is not a celebrity
            stack.push(i);
        }
    }
    const potential = stack.pop();
    for(let i = 0; i < arr.length; i++) {
        if(i !== potential) {
            if(arr[i][potential] === 0 || arr[potential][i] === -1) return false;
        }
    }
    return potential;
}

