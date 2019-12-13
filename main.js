const express = require('express');
const app = express();
const port = 4100;

app.post('webhook', (req, res) => {
    res.send('Got a POST request')
});

app.listen(port, () => console.log('I am listening on port ' + port));
