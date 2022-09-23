function LongestValidParenthesis(str) {
    let len = 0, obj = {'(': ')'}, stack = [], maxVal = 0, previousMax = 0;
    for(let i =0; i<str.length;i++) {
        maxVal = 0;
        for(let j =0 ; j< str.length; j++) {
            if(Object.keys(obj).includes(str[j])) stack.push(str[j]);
            else if(stack[stack.length - 1] === obj[str[j]]) {
                stack.pop();
                maxVal += 1;
            }
        }
        previousMax = Math.max(previousMax, maxVal);
    }

    return previousMax;
}

console.log(LongestValidParenthesis('(()'));