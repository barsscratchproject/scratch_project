const User = require('../models/Models');
const userController = {};

// create a user
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

// find a user
userController.findUser = function (req, res, next) {
  User.find({ userName: req.params.user }, (err, docs) => {
    if (err) {
      console.log('Error!, ', err);
      return res.status(400).json('Error retrieving user! ' + err);
    } else {
      console.log('found user!');
      return res.status(200).json(docs);
    }
  });
};

userController.deleteUser = function (req, res, next) {
  // db.inventory.find( { tags: { $eq: [ "A", "B" ] } } )
};

// create a deck
userController.createDeck = function (req, res) {
  User.updateOne(
    { userName: req.params.user },
    { $push: { decks: { topic: req.body.topic, cards: {} } }},
    (err, doc) => {
      if (err) {
        console.log('error adding deck!');
        return res.status(400).json(err);
      } else {
        console.log('deck created!');
        console.log(doc);
        return res.status(200).json('user updated!');
      }
    }
  );
};



// return just decks - X
// Find topic passed into params - X
// find specific topic in specific user deck - X
// find all decks - X
// delete deck - 
// edit deck - 

// create card 
// find all cards 
// find specific card <--- maybe
// edit a specific card
// delete specific card

// find all the decks
userController.findAllDecks = function (req, res, next) {
  console.log('findAllDecks invoked!');
  User.find({ userName: req.params.user }, 'decks', (err, doc) => {
    if (err) {
      console.log('error finding all decks!');
      return res.status(400).json(err);
    } else {
      console.log('found all decks!');
      console.log(doc);
      return res.status(200).json(doc);
    }
  });
};

// find a specific deck
userController.findDeck = function (req, res, next) {
  console.log('findDeck invoked!');
  User.find({ userName: req.params.user, 'decks.topic': req.params.deck }, {'decks.$': 1 }, (err, doc) => {
    if (err) {
      console.log('error finding deck!');
      return res.status(400).json(err);
    } else {
      console.log('found deck!');
      console.log(doc[0].decks);
      return res.status(200).json(doc[0].decks);
    }
  });
};

// delete a specific deck  // not completed yet!
userController.deleteDeck = function (req, res, next) {
  console.log('deleteDeck invoked!');
  User.updateOne( { userName: req.params.user }, { $pull: { decks: { 'decks.topic': req.params.deck } }}, (err, doc) => {
    if (err) {
      console.log('error deleting deck!');
      return res.status(400).json(err);
    } else {
      console.log('deleted deck!');
      console.log(doc);
      return res.status(200).json(doc);
    }
  });
};




module.exports = userController;
