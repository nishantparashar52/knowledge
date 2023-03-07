function reverseWord(str) {
    const strArr = str.split(' ');
    let reverseWord = '';
    while(strArr.length > 0) {
        reverseWord += " " + strArr.pop();
    }
    return reverseWord.trim('');
}
reverseWord('i am here');