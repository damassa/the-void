const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ChampionSchema =  new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
    },

    nickname: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        required: true,
    },

    biography: {
        type: String,
        required: true,
    },

    difficulty: {
        type: String,
        required:true,
    },

    image: { 
        type: String,
        required: true
    },
    
    skills: [
        {
            ability: {
                type: String,
                required: true
            }, 

            description: {
                type: String,
                required: true
            },

            skill_image: {
                type: String,
                required: true
            }
        }
    ]
    
});

ChampionSchema.plugin(mongoosePaginate);

mongoose.model('Champion', ChampionSchema);