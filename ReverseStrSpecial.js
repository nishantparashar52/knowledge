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