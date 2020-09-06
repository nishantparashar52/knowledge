
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var cors = require('cors');
const axios = require('axios');
app.use(cors())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
// let interval;
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
        clearInterval(interval);
    });
    setInterval(() => getApiAndEmit(socket), 10000);
    socket.emit('ping', {});
    socket.emit('sub', {state: true});
    socket.emit('unsub', {state: false});
});
const getApiAndEmit = async socket => {
    try {
        const response = await axios.get('http://kaboom.rksv.net');
        console.log(response);
        socket.emit("FromAPI", response);
    } catch(er) {
        console.error('Error');
    }
  };

http.listen(4001, () => {
  console.log('listening on *:4001');
});