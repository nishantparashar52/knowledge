function isValid(paren) {
    let stack = [];
    let obj = {'(': ')'};
    for(let k of paren) {
        if(obj[k]) stack.push(k);
        else if(stack.length > 0) stack.pop();
        else return false;
    }
    if(stack.length ===0) return true;
    else {
        stack = [];
        return false;
    }
}

function ValidParenthesis(n) {
    const result = [];

    const dfs = (i, n, slate) => {
        if(i === n * 2) {
            if(isValid(slate.join(''))) { 
                result.push(slate.join(''));
            }
            return;
        }
        slate.push('(');
        dfs(i+1, n, slate);
        slate.pop();
        slate.push(')');
        dfs(i+1, n, slate);
        slate.pop();
    }
    dfs(0, n, []);
    return result;
}

// using open and close count
function ValidParenthesisUsingCount(n) {
    const result = [];

    const dfs = (i, n, open, close, slate) => {
        if(open > n) return;
        if(close > open) return;
        if(i === n * 2) {
            if(isValid(slate.join(''))) { 
                result.push(slate.join(''));
            }
            return;
        }
        slate.push('(');
        dfs(i+1, n, open  +1, close, slate);
        slate.pop();
        slate.push(')');
        dfs(i+1, n, open, close + 1, slate);
        slate.pop();
    }
    dfs(0, n, 0,0,[]);
    return result;
}

export {ValidParenthesis, ValidParenthesisUsingCount};