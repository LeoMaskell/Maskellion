const express = require('express');
const app = express()
const port = process.env.PORT || 10000;

app.use(express.JSON());


// pages
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/frontend/index.html');
});


// POST requests


// forward the port
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
    console.log('messages will be color coded');
});