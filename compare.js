function compare(obj1, obj2) {
    if(Object.keys(obj1).length !== Object.keys(obj2).length) return false;
    for(let key in obj1) {
        if(obj1[key] !== obj2[key]) return false;
        else if(typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
            if(Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
                if(obj1[key].length !== obj2[key].length) return false;
                else compareJSON(obj1[key], obj2[key]);
            }
            compare(obj1[key], obj2[key])
        } else if(typeof obj1[key] === 'function' && typeof obj2[key] === 'function') {
            compareJSON(obj1[key], obj2[key]);
        }
    }
    return true;
}
function compareJSON(val1, val2) {
    return JSON.stringify(obj1[key]) === JSON.stringify(obj2[key])
}

compare(
    {c: 'name', c2: 'dsd', n: function() { return 'getName'; }},
    {c: 'name', c2: 'dsd', n: function() { return 'dsds'; }}
)