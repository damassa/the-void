const mongoose = require('mongoose')
const OtherRegion = mongoose.model('OtherRegion')

module.exports = { 

    async index(req, res){
        const { page = 1} = req.query;
        const other_regions =  await OtherRegion.paginate({},{page,limit: 10});
        return res.json(other_regions);
    },

    async store(req, res){
        const other_region =  await OtherRegion.create(req.body);
        return res.json(other_region)
    },

    async show(req, res){
        const other_region =  await OtherRegion.findById(req.params.id);
        return res.json(other_region);
    },

    async update(req, res){
        const other_region =  await OtherRegion.findByIdAndUpdate(req.params.id, req.body, {new:true});
        return res.json(other_region);
    },

    async destroy(req, res){
        await OtherRegion.findByIdAndRemove(req.params.id);
        return res.json();
    }

};