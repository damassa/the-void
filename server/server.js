const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const api = express();
api.use(cors());
api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());

// Controllers import

require('./controllers/champions')(api);
require('./controllers/other_regions')(api);
require('./controllers/skills_champions')(api);

const port = 3333;
api.listen(port, () => {
    console.log(`Api running on port ${port}`);
})