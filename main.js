const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.send('Received a GET request')
});

io.on('connection', (socket) => {
    console.log('A user connected');
});

app.post('/webhook', (req, res) => {
    io.emit('notif', 'test');
    console.log('Got a POST REQUEST');
    res.send('Got a POST request ')
});

http.listen(process.env.PORT || 4100, () => console.log('I am listening on port ' + process.env.PORT));
