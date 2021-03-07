const { User } = require('../models/Models');
const userController = {};

userController.createUser = function (req, res, next) {
  User.create({
    userName: req.body.userName,
    decks: [],
  })
    .then((doc) => {
      console.log('User created!');
      return res.status(200).json(doc);
    })
    .catch((err) => {
      console.log('Error creating user!');
      return res.status(400).json(err);
    });
};

userController.findUser = function (req, res, next) {
  console.log('findUser detected!');
  User.find({ userName: req.params.user }, (err, docs) => {
    if (err) {
      console.log('Error!, ', err);
      return res.status(400).json('Error retrieving user! ' + err);
    } else {
      console.log('success!');
      return res.status(200).json(docs);
    }
  });
};

userController.addDeck = function (req, res, next) {
  console.log('addDeck detected!');
  User.findOneAndUpdate(
    { userName: req.params.user },
    { $push: { decks: req.body.deck } },
    (err, doc) => {
      if (err) {
        console.log('error adding deck!');
        return res.status(400).json(err);
      } else {
        console.log('user updated!');
        return res.status(200).json('user updated!');
      }
    }
  );
};

userController.deleteUser = function (req, res, next) {
  //
};

module.exports = userController;
