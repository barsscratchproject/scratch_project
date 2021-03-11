const db = require('../models/cardModels.js');

const deckController = {};
//display public decks
deckController.displayDecks = (req, res, next) => {
    const deckQuery = `SELECT *  
                        FROM public_deck`
    db.query(deckQuery)
      .then(result => {
          const publicDecks = result.rows.name;
          res.locals.publicDecks = publicDecks;
          return next();
      })
      .catch(err => next(err));
};

deckController.addDeck = (req, res, next) => {
    
}


//display private decks

//add decks
//add cards to deck
//delete decks
//delete decks