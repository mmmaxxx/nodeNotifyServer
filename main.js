const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Received a GET request')
});

io.on('connection', (socket) => {
    console.log('A user connected');
});

app.post('/webhook', (req, res) => {
    // todo: get the referer somehow
    io.emit('notif', JSON.stringify(req.get('Referrer')));
    console.log('Got a POST REQUEST', JSON.stringify(req.body));
    console.log('Request referer', JSON.stringify(req.get('Referrer')));
    res.send('Got a POST request ')
});

http.listen(process.env.PORT || 4100, () => console.log('I am listening on port ' + process.env.PORT));
