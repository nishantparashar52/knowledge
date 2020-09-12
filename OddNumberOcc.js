function oddNumber(arr) {
    let obj = {};
    arr.reduce((acc, curr) => obj[curr] ? obj[curr] = obj[curr] + 1 : obj[curr] = 1, {});
    Object.values(obj).find(item => item % 2 !== 0 && item !== 0);
}

function countArr(arr) {
    let a = [...arr];
    const countObj = a.reduce((obj, curr) => obj[curr] = (obj[curr] || 0) + 1, {});
    return Object.keys(countObj).find(item => obj[item] === 1);
}
