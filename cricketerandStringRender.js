function cricketScore(arr) {
    let cricketer = {'sehwag': 0, 'dravid': 0};
    let playing = true;
    for(let i = 0, len = arr.length; i < len; i++) {
        const indexVal = arr[i];
        if(i !== 0 && i % 6 === 0 || indexVal % 2 !== 0) playing = !playing;
        returnCumResponse(indexVal, cricketer, playing);
    }
    return cricketer;
}
function returnCumResponse(val, cricketer, playing) {
    if(!playing) cricketer.sehwag += val;
    else cricketer.dravid += val
}
// this will tell which player how much
cricketScore([1,2,3,4,6,0,5,6,11]);

function power(num, pow) {
    if(num === 0) return 0;
    if(pow === 0) return 1;
    if(pow === 1) return num;
    else return num * power(num, pow - 1);
}
// 3(ab)4(cd) => abababacdcdcdcd
function returnString(str) {
    let num, stack = "", finalStr = "";
    for(let i = 0, len = str.length; i < len; i++) {
        if(Number(str[i])) num = str[i];
        if(str[i].match(/[a-z]/)) stack = stack.concat(str[i]);
        if(str[i].indexOf(')') > -1) {
            for(let i = 0; i < num; i++) {
                finalStr = finalStr.concat(stack);
            }
            stack = "";
            num = 0;
        }
    }
    return finalStr;
}