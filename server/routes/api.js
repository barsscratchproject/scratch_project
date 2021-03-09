const express = require('express');
const cookieController = require('../controllers/cookieController');
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
router.patch('/:user/editDeck', userController.editDeck);
// ...deletes deck (:deck) for existing user (:user)
router.delete('/:user/deck/delete', userController.deleteDeck);

// Cards...
// ...creates card in a deck (:deck) specified by the user (:user)
router.post('/:user/createCard', userController.createCard);
// router.post('/cards/:user/:deck', userController.createCard);
// ...deletes specific card from user's deck
router.delete('/:user/deleteCard', userController.deleteCard);

// User...
// ...finds existing user
router.get('/user/:user', userController.findUser);
// ...creates user, sets cookie ()
router.post(
  '/user',
  userController.createUser,
  cookieController.setCookie,
  (req, res) => {
    res.status(200).json('cookie set!');
  }
);

module.exports = router;
