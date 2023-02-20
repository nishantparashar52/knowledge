var skillsArray = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];

// convert into
[
    { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
    { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
    { skill: 'html', user: [ 'Sue' ], count: 1 } 
]

function returnEndorsement(skillsArr) {
    const skillsObj = {};
    skillsArr.forEach(endorsements => {
        const {skill, user} = endorsements;
        if(!skillsObj[skill]) {
            skillsObj[skill] = {
                user: [user],
                skill: skill,
                count:1
            }
        } else {
            skillsObj[skill] = {
                ...skillsObj[skill],
                user: [...skillsObj[skill].user, user],
                count: skillsObj[skill].count + 1
            }
        }
    })
    return Object.values(skillsObj).sort((a,b) => a.count > b.count ? -1 : 1)
}
console.log(returnEndorsement(skillsArray));

function createButtons(){
    for (var i = 1; i <= 5; ++i) {
      var body = document.getElementsByTagName("body")
      var button = document.createElement("button")
      button.innerHTML = 'button' + i;
      button.onclick = (function(i){
        return function() {
            console.log('this is button' + i)
        }
      })(i)
      body[0].appendChild(button)
    }
  }
  createButtons();

  var promise1 = new Promise((resolve, _) => {
    console.log('hi');
    setTimeout(() => console.log('hello'), 1000);
    resolve('done');
  })
  // reverse a string
let s1 = '';
for(let i = s.length - 1; i >= 0;i--) {
    debugger;
    s1 += s[i];
}