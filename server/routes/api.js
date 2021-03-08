const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Decks...
// ...finds all decks for user (:user)
router.get('/:user/deck/all', userController.findAllDecks);
// ...finds specific deck (:deck) for user (:user)
router.get('/:user/deck/', userController.findDeck);
// ...creates new deck for existing user (:user)
router.patch('/:user/createDeck', userController.createDeck);
// ...edits specific deck (:deck) for existing user (:user)
router.patch('/:user/deck/:deck/edit', userController.editDeck);
// ...deletes deck (:deck) for existing user (:user)
router.delete('/:user/deck/delete', userController.deleteDeck);

// User...
// ...finds existing user
router.get('/user/:user', userController.findUser);
// ...creates user
router.post('/user', userController.createUser);

// Cards...
// ...creates card in a deck (:deck) specified by the user (:user)
// router.post('/cards/:user/:deck', userController.createCard);
// ...returns all cards from deck (:deck)
// Note: we may need an identifier for each card

// create deck X
// find all decks
// find specific deck
// edit a specific deck
// delete deck

// create card
// find all cards
// find specific card <--- maybe
// edit a specific card
// delete specific card

module.exports = router;
