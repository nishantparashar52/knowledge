function checkExp(exp) {
    const localExp = {'{' : '}' , '(' : ')', '[' : ']'};
    const entryPoints = Object.keys(localExp);
    const exitPoints = Object.values(localExp);
    let stack = [];
    for(let i = 0, len = exp.length; i < len; i++) {
        const currentIndex = exp[i];
        if(entryPoints.indexOf(currentIndex) > -1) {
            stack.push(currentIndex);
        } else if(exitPoints.indexOf(currentIndex) > -1) {
            const item = stack.pop();
            if(localExp[item] !== currentIndex) return false;
        }
    }
    if(stack.length > 0) return false;
    stack = [];
    return true;
}
checkExp("[bacc{}]");


