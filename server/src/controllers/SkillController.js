const mongoose = require('mongoose')
const Skill = mongoose.model('Skill')

module.exports = { 

    async index(req, res){
        const { page = 1} = req.query;
        const skills =  await Skill.paginate({},{page,limit: 10});
        return res.json(skills);
    },

    async store(req, res){
        const skill =  await Skill.create(req.body);
        return res.json(skill)
    },

    async show(req, res){
        const skill =  await Skill.findById(req.params.id);
        return res.json(skill);
    },

    async update(req, res){
        const skill =  await Skill.findByIdAndUpdate(req.params.id, req.body, {new:true});
        return res.json(skill);
    },

    async destroy(req, res){
        await Skill.findByIdAndRemove(req.params.id);
        return res.json();
    }

};