const os = require('os');
const totalMemory = os.totalmem();
const remainingMem = os.freemem();

console.log(`total ${totalMemory} remaining ${remainingMem}`);