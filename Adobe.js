// Round 3 
// Module Federation Event Loop
// toys max toys ['toy1', 'toy2', 'toy1', 'toy3','toy2', 'toy3', 'toy2']
// Round 4

function KDistinctToys(arr, size) {
  let slow = 0, fast = 0, toys = {}, max = 0;
  // use fast and slow pointer in while loop

  while(fast !== arr.length) {
      let elem = arr[fast];
      toys[elem] = toys[elem] ? toys[elem] + 1: 1;
      if(Object.keys(toys).length <=size) fast++;
      else {
          if(toys[arr[slow]] > 1) {
              toys[arr[slow]] = toys[arr[slow]]- 1;
          } else delete toys[arr[slow]];
          slow++;
      }
      max = Math.max(max, fast - slow);
  }
  return max;
}
KDistinctToys(['toy1', 'toy2', 'toy1', 'toy3','toy2', 'toy3', 'toy2'], 2);

const endorsements = [
  { skill: "css", user: "Bill" },
  { skill: "javascript", user: "Chad" },
  { skill: "javascript", user: "Bill" },
  { skill: "css", user: "Sue" },
  { skill: "javascript", user: "Sue" },
  { skill: "html", user: "Sue" },
];
// [
//   { skill: 'css', user: [ 'Bill', 'Sue' ], count: 2 },
//   { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
//   { skill: 'html', user: [ 'Sue' ], count: 1 }
// ]

// {
//   css: ['Bill', 'Sue'],
//   javascript: ["Chad", 'bill'],
// }

// {
//   Skill: 'css',
//   user: ['Bill','Sue'],
//   count: 2
// }
//hashMapAcc = {
  // css: ['Bill', 'Sue'],
  // javascript: ["Chad", 'bill'],
// }

function CreateSortedUser(endorsements) {
  const hashMapAcc = endorsements.reduce((acc, item) => {
    const {skill, user} = item;
    if(acc[skill]) acc[skill] = [...acc[skill], user]; 
    else acc[skill] = [user];
    return acc;
  }, {});
  console.log(hashMapAcc);
  let finalResult = [];
  Object.keys(hashMapAcc).forEach((item, index) => {
    finalResult[index] = {};
    finalResult[index]['skill'] = item;
    finalResult[index]['user'] = hashMapAcc[item];
    finalResult[index]['count'] = hashMapAcc[item].length;
  })
  return finalResult;
}
console.log(CreateSortedUser(endorsements))


//  Round 3
// https://codesandbox.io/s/trusting-voice-7f5c2k?file=/src/Header/SearchNavigation.js


/* Adobe Round 1 for Sr Computer scientist
create a function which will reject 3 times and resolve at last.
write a function which will take a promise and LimitRetry
Once the limitRetry is reached return the promise else keep on 
returning reject */
let count = 0;
let createPr = () => new Promise((resolve, reject) => {
  if(count < 4) {count++; reject('error');}
  else setTimeout(() => resolve('success'));
})


function TakePr(promise, retryLimit) {
  let cc = 0;
  return new Promise((res, rej) => {
    function Retry() {
      promise()
      .then(res => {
        console.log(`inside res ${res}`);
      })
      .catch(err => {
        ++cc;
        if(cc <= retryLimit) {
          rej('error');
          console.log('inside reject');
          setTimeout(Retry, 1000);
        } else {
          setTimeout(Retry, 1000);
        };
      })
    }
    Retry();
  })
}

TakePr(createPr, 5).then(val => console.log(val)).catch(er => console.log(er));

/* Adobe Senior computer scientist */

/* Interviewer Mayank Shekhar

Hit this API: https://randomuser.me/api/?results=50&seed=abc&page=1
From the list of data, display the location information for each user 
https://codesandbox.io/s/objective-voice-3rs4qv

https://codesandbox.io/s/react-new?file=/src/App.js

Interviewer Viswesh prabhu Subramanian
If you have to create similar to Byjus
https://jsfiddle.net/nishant5857/uagrdwky/35/


Get top 3 words 
const str =
  "grapes grapes guava guava hi apple banana apple banana guava apple banana apple banana pomegranate";
https://codesandbox.io/s/cocky-paper-znw4l3?file=/src/index.js
*/