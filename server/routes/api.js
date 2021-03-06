const express = require('express');

const cardController = require('../controllers/cardController');
const deckController = require('../controllers/deckController');

const router = express.Router();

router.get('/',
  deckController.findDeck,
  (req, res) => res.status(200).json(res.locals.currentDeck));

router.post('/',
  deckController.createDeck,
  (req, res) => res.status(200).json(res.locals.decks));

module.exports = router;
