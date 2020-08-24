const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const OtherRegionSchema =  new mongoose.Schema({
    
    name:{
        type: String,
        required: true,
    },

    image:{ 
        type: String,
        required: true
    }
    
});

OtherRegionSchema.plugin(mongoosePaginate);

mongoose.model('OtherRegion', OtherRegionSchema);