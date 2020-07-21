const express = require('express');
const router = express.Router();

const database = require('./database');

// GET CHAMPIONS WITH SKILLS
router.get('/', (request, response) => {

    database.connection.query('SELECT * FROM skills_champions', (error, result) => {
        if (!error) {
            response.status(200).json(result);
        }
        else {
            response.status(400).json({ error: error });
        }
    }); 
});

module.exports = (api) => api.use('/api/skills_champions', router);