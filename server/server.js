const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


const api = express();

// Starting server
api.use(cors());
api.use(express.json());

// Starting database

/*mongoose.connect('mongodb+srv://damassa:91799449@cluster0.euofb.mongodb.net/the-void?retryWrites=true&w=majority', {
    useNewUrlParser: true
});*/

mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true
});

requireDir("./src/models");

api.use('/api', require('./src/routes'));

api.listen(3333);