const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const readStream = fs.createReadStream('./abc.html');
    res.writeHead(200, {'Content-type': 'text/html'});
    readStream.pipe(res);
    // if(req.url === '/') res.write(JSON.stringify([1,2,3])); res.end();
});
server.listen(3000);

console.log('listening');
