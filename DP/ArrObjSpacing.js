var ele = [
    {dataset:{displayName:'break 1', level:1}},
    {dataset:{displayName:'break 2', level:1}},
    {dataset:{displayName:'break 3', level:1}},
    {dataset:{displayName:'break 4', level:1}},
    {dataset:{displayName:'break 4.1', level:2}},
    {dataset:{displayName:'break 4.2', level:2}},
    {dataset:{displayName:'break 5', level:1}},
    {dataset:{displayName:'break 5.1', level:2}},
    {dataset:{displayName:'break 6', level:1}}
];

const arr = [{'break 1': ''}, {'break 2':''}, {'break 3': ''}, {'break 4': [{'break 4.1': ''}, {'break 4.2': ''}]}, {'break 5': {'break 5.1': ''}}, {'break 6': ''}];
function objToArr(array){
    const arr = [];
    for(let i = 0, len = array.length ; i < len; i++) {
        const elem = array[i].dataset;
        const name = elem.displayName;
        const level = elem.level;
        if(level === 1) {
            arr.push({name: []});
        } else if(level > 1) {
            for(const [key,value] of Object.entries(arr[length - 1])) {
                if(Array.isArray(value)) arr[len - 1] = [];
                else arr[len - 1].push({name: ''});
            }
        }
    }
    return arr;
}
break 1
break 2
break 3
break 4
    break 4.1
    break 4.2
break 5
    break 5.1