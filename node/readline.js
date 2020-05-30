const readline = require('readline');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});

const num1 = Math.floor(Math.random() * 10) + 1;
const num2 = Math.floor(Math.random() * 10) + 1;

const ans = num1 + num2;
rl.question(`what is the output ${num1} ${num2} \n`, (output) => {
    if(ans == output.trim()) {
        rl.close();
    } else {
        rl.setPrompt('Try again \n');
        rl.prompt();
        rl.on('line', userInput => {
            if(userInput.trim() == ans) {
                rl.close();
            } else {
                rl.setPrompt(`again wrong ansert ${userInput} try again \n`);
                rl.prompt();
            }
        })
    }
});
rl.on('close', () => {
    console.log('Correct !!!');
});
