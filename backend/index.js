require('dotenv').config();

const db = require('./database/connection')

const port = process.env.PORT;

const express = require('express');

const app = express();

app.get('/', (req, res)=> {
    res.json({
        messege: 'Working'
    })
})

app.listen(port);

console.log("server ok");