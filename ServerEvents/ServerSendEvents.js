const app = require('express')();

app.get("/", (req,res) => res.send("hello"))

app.get('/stream', (req,res) => {
    res.setHeader("Content-Type", "text/event-stream");
    sendData(res);
})
var num = 0;
function sendData(res) {
    res.write("data:" + `${num++}\n\n`);
    setTimeout(() => sendData(res), 1000);
}
app.listen(8080);
console.log('listening on 8080');
// const http = require('http');

// http.createServer(function(req, res) {
//   res.writeHead(200, {
//     'Content-Type': 'text/event-stream',
//     'Cache-Control': 'no-cache',
//     'Connection': 'keep-alive'
//   });

//   setInterval(function() {
//     const data = new Date().toTimeString();
//     res.write(`event: time\n`);
//     res.write(`data: ${data}\n\n`);
//   }, 1000);
// }).listen(3000);