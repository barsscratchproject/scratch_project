const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// User...
// ...finds existing user
router.get('/user/:user', userController.findUser);
// ...creates user
router.post('/user', userController.createUser);

// Decks...
// ...finds existing deck for user (:user)
router.get('/deck', userController.findDeck);
// ...creates new deck for existing user (:user)
router.patch('/user/deck/:user', userController.createDeck);

// Cards...

module.exports = router;
