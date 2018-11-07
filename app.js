const express = require('express');

const app = express();

app.get('/', (req, res) => { res.send('Hello World!') })
app.get('/test', (req, res) => { res.send('Hello World! in the test') })


module.exports = app;