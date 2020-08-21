const express = require('express')
const routes = express.Router();

const ChampionController = require('../src/controllers/ChampionController')
const OtherController = require('../src/controllers/OtherController')

routes.get('/champions', ChampionController.index);
routes.post('/champions', ChampionController.store);
routes.get('/champions/:id' , ChampionController.show);
routes.put('/champions/:id', ChampionController.update);
routes.delete('/champions/:id', ChampionController.destroy);

routes.get('/other_regions', OtherController.index);
routes.post('/other_regions', OtherController.store);
routes.get('/other_regions/:id' , OtherController.show);
routes.put('/other_regions/:id', OtherController.update);
routes.delete('/other_regions/:id', OtherController.destroy);


module.exports = routes;  