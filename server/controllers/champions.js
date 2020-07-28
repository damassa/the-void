const express = require('express');
const router = express.Router();

const database = require('./database');

// ADD CHAMPION
router.post('/', (request, response) => {
    let name       = request.body.name;
    let nickname   = request.body.nickname;
    let role       = request.body.role;
    let difficulty = request.body.difficulty;
    let biography  = request.body.biography;
    let image      = request.body.image;

    if (name && nickname && role && difficulty && biography && image) {
        database.connection.query(`insert into champions (name, nickname, role, difficulty, biography, image) values (?, ?, ?, ?, ?, ?)`, [name, nickname, role, difficulty, biography, image],  (error, response) => {
            if (!error)
                response.status(200).json({ Resposta: response });
            else
                response.status(400).json({ error: error }).send();
        });
    } else
        response.status(404).send( 'Validation error.');
});

// RETURN ALL CHAMPIONS WITH SKILLS
router.get('/', (request, response) => {
    database.connection.query(`select * from champions ORDER BY id`, (error, champions) => {
        if (!error) {        
            champions.forEach(( champion, index ) => {
                database.connection.query(`select champion_id, name as ability, description, image as s_image from skills WHERE champion_id = ?`, [champion.id], (error, skills) => {
                    if (error) {
                        response.status(400).json({ error: error });
                        return false;
                    } else {
                        champions[index].skills = skills;
                    }
                    console.log(champions[index]);
                })
            })
            response.status(200).json(champions);     
        }
        else {
            response.status(400).json({ error: error });
        }
    }); 
});

// DELETE CHAMPION
router.delete('/:id', (request, response) => {
    let id = request.params.id;

    database.connection.query(`delete from champions where ? = id`, [id], (error, result) => {
        if (!error) {
            response.status(200).json(result);
        }
        else {
            response.status(400).json({ error: error });
        }
    });
});

module.exports = (api) => api.use('/api/champions', router);