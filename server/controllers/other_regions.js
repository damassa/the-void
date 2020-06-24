const express = require('express');
const router = express.Router();

const database = require('./database');


// ADD REGION
router.post('/', (request, response) => {
    let name  = request.body.name;
    let image = request.body.image;

    if (name && image) {
        database.connection.query(`insert into other_regions (name, image) values (?, ?)`, [name, image],  (error, response) => {
            if (!error)
                response.status(200).json({ Resposta: response });
            else
                response.status(400).json({ error: error }).send();
        });
    } else
response.status(404).send( 'Validation error.');
});

// RETURN ALL REGIONS
router.get('/', (request, response) => {

    database.connection.query(`select * from other_regions ORDER BY name asc`, (error, result) => {
        if (!error) {
            response.status(200).json(result);
        }
        else {
            response.status(400).json({ error: error });
        }
    }); 
});

// DELETE REGION
router.delete('/:id', (request, response) => {
    let id = request.params.id;

    database.connection.query(`delete from other_regions where ? = id`, [id], (error, result) => {
        if (!error) {
            response.status(200).json(result);
        }
        else {
            response.status(400).json({ error: error });
        }
    });
});

module.exports = (api) => api.use('/api/other_regions', router);