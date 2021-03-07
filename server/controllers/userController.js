const User = require('../models/Models');
const userController = {};

// Name lowercased to help normalize future functions with user document
userController.createUser = function (req, res, next) {
  console.log('create user detected!');
  User.create({
    userName: req.body.userName.toLowerCase(),
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
  User.find({ userName: req.params.user.toLowerCase() }, (err, docs) => {
    if (err) {
      console.log('Error!, ', err);
      return res.status(400).json('Error retrieving user! ' + err);
    } else {
      console.log('found user!');
      return res.status(200).json(docs);
    }
  });
};

userController.createDeck = function (req, res, next) {
  console.log('addDeck detected!');
  console.log(req.body);
  User.updateOne(
    { userName: req.params.user.toLowerCase() },
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
  // db.inventory.find( { tags: { $eq: [ "A", "B" ] } } )
};

/*
{
  userName: allison,
  decks: [
    { topic: 'physics', cards: {}},
  ]
}
*/

// userController.findDeck = function (req, res, next) {
//   console.log('findDeck detected!');
//   User.find({ 'decks.topic': 'math' }, (err, doc) => {
//     if (err) {
//       console.log('error finding deck!');
//       return res.status(400).json(err);
//     } else {
//       console.log('found deck!');
//       console.log(doc);
//       return res.status(200).json(doc);
//     }
//   });
// };

userController.findDeck = function (req, res, next) {
  console.log('findDeck invoked!');
  User.find({ 'decks.topic': 'physics' }, (err, doc) => {
    if (err) {
      console.log('error finding deck!');
      return res.status(400).json(err);
    } else {
      console.log('found deck!');
      console.log(doc);
      return res.status(200).json(doc);
    }
  });
};

module.exports = userController;
