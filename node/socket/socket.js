// const express = require('express');
// const socket = require('socket.io');
// const http = require('http');
// const port = process.env.PORT||3000 // setting the port  
// let app = express(); 
// let server = http.createServer(app) 
// let io = socket(server) 
  
// server.listen(port);

// io.on('connection', socket => {
//     console.log('New user connected');
// });
// io.sockets.emit('hi', 'everyone');

// const server = require('http').createServer();

// const io = require('socket.io')(server, {
//   path: '/test',
//   serveClient: false,
//   // below are engine.IO options
//   pingInterval: 10000,
//   pingTimeout: 5000,
//   cookie: false
// });

// server.listen(3000);
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', () => { /* … */ });
server.listen(3000);