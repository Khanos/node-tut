'use strict';

const express = require('express');
const hello = require('./hello.js')

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function(req, res) {
    hello.sayhi();
    res.send('Hello world\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);