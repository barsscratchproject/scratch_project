const express = require('express');
const cookieController = require('../controllers/cookieController');
const userController = require('../controllers/userController');
const loginController = require('../controllers/loginController');

const app = require('../server');
const router = express.Router();

router.get('/', loginController.login);
router.post('/newUser', userController.createUser, (req, res) => {
  console.log('back in login route handler!');
  console.log(res.locals.newUser);
  res.status(200).json(res.locals.newUser);
});

module.exports = router;
