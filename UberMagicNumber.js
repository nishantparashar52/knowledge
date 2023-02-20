function isMagicNumber(p) {
    // Write your code here
    const hash = {1:1,6:9, 8:8,9:6,0:0};
    let finalNum = '';
    for(let i =0, len = p.length; i <len;i++) {
        const indice = p[i];
        if(hash[indice] === undefined) return false;
        finalNum += hash[indice];
    }
    finalNum = strRev(finalNum);
    // finalNum = finalNum.split('').reverse('').join(''); // approach 1
    return StrRef === p ? true : false;
}


function strRev(s) {
    let str = '';
    for(let i = s.length -1; i >0;i--) {
        str += s[i];
    }
    return str;
}