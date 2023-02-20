function LongestPalindromeSub(s) {
    // let l = 0, r = 0, maxLength = 1, len = s.length,even = len % 2 === 0, outputLen = 1;
    // if(len <= 1) return s;
    // for(let i = 0; i< len; i++) {
    //     l = i, r = even ? i + 1 : i;
    //     while(l >= 0 && r <= len && s.charAt(l) === s.charAt(r+1)) {
    //         r++;
    //     }
    //     while(l >=0 && r < len && s.charAt(l) === s.charAt(r)) {
    //         l--;r++;
    //     }
    //     outputLen = r - l - 1;
    //     if(outputLen > maxLength) {
    //         maxLength = outputLen;
    //         start = l+1;
    //     }
    // }
    // return s.slice(start,start + maxLength);

    let l = 0, r = 0, maxLength = 1, len = s.length,even = len % 2 === 0, outputLen = 1;
    if(len <= 1) return s;
    while(l >= 0 && r <= len && s.charAt(l) === s.charAt(r+1)) {
        r++;
    }
    outputLen = r - l + 1;
    if(outputLen > maxLength) {
        maxLength = outputLen;
        start = l+1;
    }
    for(let i = 0; i< len; i++) {
        l = i, r = i;
        while(l >=0 && r < len && s.charAt(l) === s.charAt(r)) {
            l--;r++;
        }
        outputLen = r - l - 1;
        if(outputLen > maxLength) {
            maxLength = outputLen;
            start = l+1;
        }
    }
    return s.slice(start,start + maxLength);
}

console.log(LongestPalindromeSub("aaabaaaa"));