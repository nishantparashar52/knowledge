// Round 3 
// Module Federation Event Loop
// toys max toys ['toy1', 'toy2', 'toy1', 'toy3','toy2', 'toy3', 'toy2']
// Round 4

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
    const [skill, user] = item;
    if(acc[skill]) acc[skill] = [...acc[skill], user]; 
    else acc[skill] = [user];
    return acc;
  }, {});
  // console.log(hashMapAcc);
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