const arrOfStrings = ["app","ab","apple", "banana","mango"]
// const lWeights = ["a","b","c",......];

function isInOrder(arr){ // lWeights
  let i = 0, j = 1, getOutput = null;
  if(arr.length < 1) return true;
  if(!Array.isArray(arr)) return new Error('not an array');
  while(i < arr.length && j < arr.length) {
      getOutput = isIndexSorted(arr[i], arr[j]); // lWeights
    if(getOutput) {
      i++;
      j++;
    } else return false;
  }
  return true;
}

function isIndexSorted(firstString, secondString, lWeights) {
  let str1 = [...firstString];
  let str2 = [...secondString];
  let i = 0;
//   const cache = {'key': indexOfArr, 'key2': indexOfArrKey2};
//   let lWeight1 = lWeights.indexOf(str1[i]);
//   let lWeight2 = lWeights.indexOf(str2[i]);
  while(i < str1.length && i < str2.length && str1[i] !== undefined && str2[i] !== undefined) {
    if(str1[i] === str2[i]) {
      i++;
    } else if(str1[i] > str2[i]) return false;
    else return true;
  }
  if(str2.length < str1.length) return false;
  else return true;
}

console.log(isInOrder(arrOfStrings, lWeights));

// true/false
