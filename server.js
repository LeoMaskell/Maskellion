const express = require('express');
const app = express()
const port = process.env.PORT || 10000;
const db = require('./backend/db');

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
    res.sendFile(__dirname + '/static/style.css');
});


// script files
app.get('/indexscript.js', (req, res) => {
    res.sendFile(__dirname + '/static/script/indexscript.js')
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


// db stuff
app.get('/albums', (req, res) => {
    db.all('SELECT * FROM albums', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
        console.log(rows)
    });
});


// POST requests
// db Post requests
app.post('/search', (req, res) => {
    const searchTerm = req.body.query;
    db.all('SELECT * FROM albums AND songs WHERE name LIKE ?', [`%${searchTerm}%`], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
        console.log(rows)
    });
});


// forward the port
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
    console.log('messages will be color coded');
});