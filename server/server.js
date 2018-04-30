const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    from: 'Admin',
    text: 'Welcome to the chat app',
    createdAt: new Date().getTime()
  });

    socket.broadcast.emit('newMessage', {
      from: 'Admin',
      text: 'New user has joined derps.',
      createdAt: new Date().getTime()
    });

socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage',  {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });
    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // });
  });

  socket.on('disconnect', (socket) => {
    console.log('The user has been disconnected.')
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`)
});
