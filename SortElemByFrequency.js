function SortElemByFrequency(arr) {
    let obj = {};
    arr.forEach(item => obj[item] = (obj[item] || 0) + 1);
    const sortable = arr.map(item => [item, obj[item]]);
    sortable.sort((a, b) => {
        if(a[1] === b[1]) return a[0] - b[0];
        return b[1] - a[1];
    });
    return sortable.map(s => s[0]);
}

SortElemByFrequency([6,7,8,8,8,7,6]);

function SortElemByFrequencyObj(arr) {
    const frequency = arr.reduce((obj, curr) => {
        obj[curr] = (obj[curr] || 0) + 1;
        return obj;
    }, {});
    return Object.entries(frequency).sort((a, b) => b[1] - a[1]).flatMap(item => Array(item[1]).fill(item[0]))
}