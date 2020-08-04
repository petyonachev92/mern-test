const { request } = require("express");

const express = require('express')
const app = express();
const port = 5000;

app.get('/', (req, res) => res.send('paca'));
app.get('/hui', (req, res) => res.send('send nudes'));

app.listen(port, () => console.log('Listening'));