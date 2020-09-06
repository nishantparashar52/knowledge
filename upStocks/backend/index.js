
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');
const axios = require('axios');
const os = require('os-utils');
app.use(cors())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
// let interval;
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.emit('hello', 'new Data');
    socket.on('disconnect', () => {
        console.log('user disconnected');
        clearInterval(timer);
    });
    let tick = 0;
    let timer = setInterval(() => {
        os.cpuUsage(cpuPercentage => {
            socket.emit('cpu', {
                name: tick++,
                value: cpuPercentage
            })
        })
    }, 1000);
    // setInterval(() => getApiAndEmit(socket), 10000);
    socket.emit('ping', {});
    socket.emit('sub', {state: true});
    socket.emit('unsub', {state: false});
});
// const getApiAndEmit = async socket => {
//     try {
//         const response = await axios.get('http://kaboom.rksv.net');
//         console.log(response);
//         socket.emit("FromAPI", response);
//     } catch(er) {
//         console.error('Error');
//     }
//   };

http.listen(4001, () => {
  console.log('listening on *:4001');
});