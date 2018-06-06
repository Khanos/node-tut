'use strict';

const express = require('express');
const fatima = require('./fatima.js')

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function(req, res) {
    res.send('Hello world\n');
});

app.get('/hola', function(req, res) {
    fatima.saluda();
    res.json('Hello fatima\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);