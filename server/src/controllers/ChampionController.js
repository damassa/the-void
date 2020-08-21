const mongoose = require('mongoose')
const Champion = mongoose.model('Champion')

module.exports = {
    async index(req, res){
        
        // request example : /procuts?page=2 
        const { page = 1 } = req.query;
        const champion = await Champion.paginate({},{page, limit: 10});
        return res.json(champion);
    },

    async store(req, res){
        const champion = await Champion.create(req.body);
        return res.json(champion); 
    },

    async show(req, res){
        const champion = await Champion.findById(req.params.id);
        return res.json(champion);
    },

    async update(req, res){
        const champion =  await Champion.findByIdAndUpdate(
            req.params.id , req.body, {new : true}
        );
        return res.json(champion);
    },

    async destroy(req, res){
        await Champion.findByIdAndRemove(req.params.id);
        return res.json();
    }
};  