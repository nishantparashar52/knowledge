function getMinimumWindow(s,t) {
    let obj = {}, i = 0,ans = Number.MAX_VALUE;
    [...t].forEach((ti, _) => {
        console.log(ti);
        console.log(`obj[ti] ${obj[ti]}`);
        obj[ti] = obj[ti] ? (obj[ti] + 1) : 1;
    });
    [...s].forEach((si, j) => {
        if(obj[si] > 0) {
           obj[si]--;
        }
        while(Object.values(obj).reduce((acc, curr) => acc+= curr,0) === 0) {
            if(ans > j -i + 1) {
                ans = Math.min(ans,  j - i + 1);
                start = i;
            }
            if(obj[s[i]] !== undefined) obj[s[i]] += 1;
            i++;
        }
    })
    return s.substring(start, start + ans);
}
console.log(getMinimumWindow('this is a test string', 'tist'));