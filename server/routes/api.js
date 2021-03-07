const express = require('express');

const userController = require('../controllers/userController');
const deckController = require('../controllers/deckController');
const cardController = require('../controllers/cardController');

const router = express.Router();

router.post('/user', userController.createUser);
router.get('/user/:user', userController.findUser);

module.exports = router;
