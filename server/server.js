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
  console.log('New User Connected');

  socket.emit('newEmail', {
    from: 'Mikey',
    text: 'Hey, hows the dinner',
    createdAt: 123
  });

  socket.emit('newMessage', {
    from: 'Nigella',
    text: 'See you at the quiche',
    createdAt: 12321415
  })

  socket.on('createMessage', (message) => {
    console.log('createMessage', message)
  });

  socket.on('disconnect', (socket) => {
    console.log('The user has been disconnected.')
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`)
});
