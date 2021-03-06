const models = require('../models/cardModels');

const cardController = {};

cardController.createCard = function(req, res, next){
    //
};

cardController.findCard = function(req, res, next){
    Card.find({}, 'question answer', (err, doc)=>{
        if(err){
            
        } else {
            res.locals = doc;
            next();
        }
    })
};

cardController.updateCard = function(req, res, next){
    //
};

cardController.deleteCard = function(req, res, next){
    //
};

module.exports = cardController;
