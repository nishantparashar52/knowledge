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