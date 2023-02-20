// trailing zero

/*
n!

        5 => 5*4*3*2*1 5*2
        10 =>
        15 => 3
        20 => 4
         /5 



LPS

abcdcab

// abba

abcddcba
    d
   cdc
  bcdcb
 abcdcba */


function LPS(str) {
    // even old str
    let longest = '', evenPalindrome = '', oddPalindrome ='';
    for(let i =0; i < str.length; i++) {
        evenPalindrome = expandFromCenter(str, i-1, i);
        oddPalindrome = expandFromCenter(str, i, i);
        if(longest.length < evenPalindrome.length) longest = evenPalindrome;
        if(longest.length < oddPalindrome.length) longest = oddPalindrome;
    }
    return longest;
}

function expandFromCenter(str, start, end) {
    let i = 0;
    while(str[start -i] && str[start - i] === str[end + i]) {
        i++;
    }
    i--;
    return str.slice(start - i, end + i + 1);
}
LPS("babad");
LPS("cbbd");