const models = require('../../models');
const utils  = require('../../modules/utils')


module.exports ={
    get : function(req,res){
        models.url.findAll()
        .then(data => res.status(200).json(data))
    },
    redirect: function(req,res){
        models.url.findOne({ where : { id : req.params.id} })
        .then(data =>{
            models.url.update({visits : data.visits + 1},{ where : { id : req.params.id} })
            res.redirect(data.url)
            res.status(302).send()
        })
    },

    post:function(req,res){
        utils.getUrlTitle(req.body.url, (err,title) =>{
            models.url.create({
                url : req.body.url,
                title : title
            }).then(data => res.status(201).json(data))
        })
    }
}

