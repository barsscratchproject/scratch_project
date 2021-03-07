const models = require('../models/Models');

const cardController = {};

cardController.createCard = function (req, res, next) {
  Card.insertOne(
    {
      cardNumber: req.body.cardNumber,
      question: req.body.question,
      answer: req.body.answer,
    },
    (err, doc) => {
      if (err) {
        next(err);
      } else {
        res.locals.newCard = doc;
        next();
      }
    }
  );
};

cardController.findCard = function (req, res, next) {
  Card.find({ cardNumber: req.body.cardNumber }, (err, doc) => {
    if (err) {
      next(err);
    } else {
      res.locals.cards = doc;
      next();
    }
  });
};

cardController.updateCard = function (req, res, next) {
  //
};

cardController.deleteCard = function (req, res, next) {
  //
};

module.exports = cardController;
