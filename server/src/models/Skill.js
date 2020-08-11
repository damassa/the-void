const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const SkillSchema =  new mongoose.Schema({
    
    ability:{
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    skill_image: { 
        type: String,
        required: true
    }
    
});

SkillSchema.plugin(mongoosePaginate);

mongoose.model('Skill', SkillSchema);