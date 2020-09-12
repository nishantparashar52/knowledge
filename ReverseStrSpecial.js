function ReverseSpecialStr(inputStr) {
    let str = inputStr.split('');
      let start = 0, end = str.length - 1;
      while(start < end) {
          if(!isValidCharacter(str[start])) start++;
          else if(!isValidCharacter(str[end])) end--;
          else {
              temp = str[start];
              str[start] = str[end];
              str[end] = temp;
              start++;
              end--;
          }
      }
      return str.join('');
  }
  
  function isValidCharacter(exp) {
      const regex = /[a-zA-z]/;
      if(exp.match(regex)) return true;
      return false; 
  }

  ReverseSpecialStr("Hello<>*");

  function ReverseStr(str) {
    let arr = [...str];
    for(let i = 0, len = arr.length; i < len/2; i++) {
        swap(arr, i, len - i - 1);
    }
    return arr;
}
function swap(arr, start, end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
}

// ReverseSpecial

function ReverseSpecialStr(str) {
    let arr = [...str];
    let start = 0, end = arr.length - 1;
    while(start < end) {
        if(!isValidStr(start)) start++;
        else if(!isValidStr(end)) end--;
        else swap(arr, start, end);
    }
    return arr.join();
}

function isValidStr(index) {
    if(index.match(/[a-zA-Z]/)) return true;
    return false;
}


ReverseStr('nishant');