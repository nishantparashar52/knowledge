function CheckFun(str, output) {
    const arr = [...str];
    const obj = {};
    for(let i = 0; i<arr.length; i++) {
        const index = arr[i];
        obj[index] = (obj[index] || 0) + 1;
    }
    const outputStr = [...output];
    let counter = 0;
    for(let i = 0; i<outputStr.length; i++) {
        const index = outputStr[i];
        if(!obj[index]) {
            if(counter > 0) return false;
            else counter++;
        }
    }
    return true;
}

CheckForStringMatch('abc', 'cad');