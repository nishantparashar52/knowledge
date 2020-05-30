const fs = require('fs');
// const files = fs.readdirSync('./');
// console.log(files);

// create a file

// fs.writeFile('nishant.txt', "this is nishant file", err => {
//     if(err) console.log('error in creating file');
//     else {
//         console.log('file created');
//         fs.readFile('nishant.txt', 'utf8', (err, file) => {
//             if(err) console.log(err);
//             else console.log(file);
//         })
//     }
// });

fs.rename('nishant2.txt', 'nishant.txt', err => {
    if(err) console.log('not rename');
    else console.log('file created');
});
fs.appendFile('nishant.txt', "\n have enough work in this", err => {
    if(err) console.log(err);
    else console.log('success');
})

const readStream = fs.createReadStream('./nishant.txt', 'utf8');
const writeStream = fs.createWriteStream('./nishant2.txt');
readStream.on('data' , chunk => {
    writeStream.write(chunk);
    // console.log(chunk);
});
