const models = require('../models/Models');
const deckController = {};

deckController.createDeck = function (req, res, next) {
  models.Deck.create({
    topic: 'react',
    cards: [
      {
        question: 'question',
        answer: 'answer',
      },
    ],
  })
    .then((doc) => {
      console.log('deck created!');
      return res.status(200).json(doc);
    })
    .catch((err) => {
      console.log('Error creating document!');
      return res.status(400).json(err);
    });
};

deckController.findDeck = function (req, res, next) {
  console.log('findDeck detected!');
  models.Deck.find({}, (err, docs) => {
    if (err) {
      console.log('Error!, ', err);
      next(err);
    } else {
      console.log('success!');
      res.locals.deck = docs;
      res.status(200).json(docs);
      next();
    }
  });
};

deckController.updateDeck = function (req, res, next) {
  //
};

deckController.deleteDeck = function (req, res, next) {
  //
};

module.exports = deckController;
