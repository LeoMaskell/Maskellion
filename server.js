const express = require('express');
const app = express()
const port = process.env.PORT || 10000;

app.use(express.json());


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

app.get('/search.html', (req, res) => {
    res.sendFile(__dirname + '/frontend/search.html');
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
// icons
app.get('/book', (req, res) => {
    res.sendFile(__dirname + '/static/icons/book.png');
});

app.get('/bookH', (req, res) => {
    res.sendFile(__dirname + '/static/icons/bookH.png');
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/static/icons/home.png');
});

app.get('/homeH', (req, res) => {
    res.sendFile(__dirname + '/static/icons/homeH.png');
});

app.get('/search', (req, res) => {
    res.sendFile(__dirname + '/static/icons/search.png');
});

app.get('/searchH', (req, res) => {
    res.sendFile(__dirname + '/static/icons/searchH.png');
});

app.get('/settings', (req, res) => {
    res.sendFile(__dirname + '/static/icons/settings.png');
});

app.get('/settingsH', (req, res) => {
    res.sendFile(__dirname + '/static/icons/settingsH.png');
});


// POST requests


// forward the port
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
    console.log('messages will be color coded');
});