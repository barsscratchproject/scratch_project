const models = require('../models/cardModels');
const deckController = {};

deckController.createDeck = function(req, res, next){
    Deck.insertOne({ deckName: req.body.deckName }, (err, doc)=>{
        if(err){
            next(err);
        } else {
            res.locals.newDeck = doc;
            next();
        }
    })
};

deckController.findDeck = function(req, res, next){
    Deck.find({ deckName: req.body.deckName }, (err, docs)=>{
        if(err){
            next(err);
        } else {
            res.locals.decks = docs;
            next();
        }
    })
};

deckController.updateDeck = function(req, res, next){
    //
};

deckController.deleteDeck = function(req, res, next){
    //
};

module.exports = deckController;
