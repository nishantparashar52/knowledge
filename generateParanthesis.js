function generateParen(n) {
    let res = [], open = n, close = n;
    const innerFn = (c, open, close) => {
        if(c.length === n * 2) {
            res.push(c);
            return res;
        }
        if(close > open) {innerFn(`${c})`, open, close - 1)};
        if(open !== 0) {innerFn(`${c}(`, open - 1, close); }; 
    }
    innerFn('', open, close);
    return res;
}

generateParen(3)

 // output ['()()()', '()(())', '(())()', '(()())', '((()))']