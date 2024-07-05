function combination(str, c) {
    let res = [], s = str;
    function innerFn(s, c) {
        for(let i = 0; i< s.length; i++) {
            if(s[i] === '*') {
                for(let j = 0; j < c.length; j++) {
                    return innerFn(s.replace('*', c[j]));
                }
        } else if(!(s.indexOf('*') > -1)) {
            res.push(s);
        }
    }
    }
    innerFn(s,'ab');
    return res;
}

combination('abcbc*adasdasd***', 'ab');