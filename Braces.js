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


function checkValidString(str) {
    let ValidString = {
        '{' : '}',
        '[' : ']',
        '(' : ')'
    };
    let isString = /([a-zA-Z0-9])/;
    let stack = [];
    let openingSymbol = Object.keys(ValidString);
    let closingSymbol = Object.values(ValidString);
    for(let i = 0; i < str.length; i++) {
        if(!isString.test(str[i])) {
            if(openingSymbol.indexOf(str[i]) > -1) stack.push(str[i]);
            else if(closingSymbol.indexOf(str[i]) > -1) {
                let popItem = stack.pop()
                if(ValidString[popItem] !== str[i]) return 'not a valid string';
            }
            
        }
    }
    if(stack.length > 0) return false;
    return 'valid string'; 
}
checkValidString("[bacc{}]");

