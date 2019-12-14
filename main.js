const express = require('express');
const app = express();
const port = 4100;

app.get('/', (req, res) => {
    res.send('Received a GET request')
});

app.post('/webhook', (req, res) => {
    console.log('Got a POST REQUEST');
    res.send('Got a POST request ')
});

app.listen(port, () => console.log('I am listening on port ' + port));
