const express = require('express');
const app = express()
const port = process.env.PORT || 10000;

app.use(express.JSON());


// pages
let loads = 0
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/frontend/index.html');
    loads++
    console.log(`loads: ${loads}`);
});

app.get('/lib.html', (req, res) => {
    res.sendFile(__dirname + '/frontend/lib.html');
});

app.get('/settings.html', (req, res) => {
    res.sendFile(__dirname + '/frontend/settings.html');
});

app.get('/song.html', (req, res) => {
    res.sendFile(__dirname + '/frontend/song.html');
});

//static files
app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/static/logo.png');
});

app.get('/logo', (req, res) => {
    res.sendFile(__dirname + '/static/logo.png');
});


// POST requests


// forward the port
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
    console.log('messages will be color coded');
});