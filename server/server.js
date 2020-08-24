const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


const api = express();

// Starting server
api.use(cors());
api.use(express.json());

// Starting database

mongoose.connect('mongodb://localhost:27017/the-void', {
    useNewUrlParser: true,
});

mongoose.connection.on('connected', function(){
    console.log('Connected')
});

requireDir("./src/models");

api.use('/api', require('./src/routes'));

api.listen(3333);