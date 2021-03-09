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
      res.locals.newUser = doc;
      console.log('after assigning to locals');
      console.log(res.locals.newUser);
      next();
    })
    .catch((err) => {
      console.log('Error creating user!');
      next(err);
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

// delete user
userController.deleteUser = function (req, res, next) {
  // db.inventory.find( { tags: { $eq: [ "A", "B" ] } } )
};

// create a deck
userController.createDeck = function (req, res) {
  User.updateOne(
    { userName: req.params.user },
    { $push: { decks: { topic: req.body.topic, cards: {} } } },
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

// create card -
// find all cards -
// find specific card <--- maybe
// edit a specific card
// delete specific card
// return just decks - X
// Find topic passed into params - X
// find specific topic in specific user deck - X
// find all decks - X
// delete deck - X
// make sure new deck is created with cards object - X
// edit deck - X

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
  User.find(
    { userName: req.params.user, 'decks.topic': req.body.topic },
    { 'decks.$': 1 },
    (err, doc) => {
      if (err) {
        console.log('error finding deck!');
        return res.status(400).json(err);
      } else {
        console.log('found deck!');
        console.log(doc[0].decks);
        return res.status(200).json(doc[0].decks);
      }
    }
  );
};

// edit a specific deck
userController.editDeck = function (req, res, next) {
  console.log('editDeck invoked!');
  User.updateOne(
    { userName: req.params.user, 'decks.topic': req.body.topic },
    { $set: { 'decks.$.topic': req.body.newTopic } },
    { new: true },
    (err, doc) => {
      if (err) {
        console.log('error editing deck!');
        res.status(400).json(err);
      } else {
        console.log('successfully edited deck!');
        res.status(200).json(doc);
      }
    }
  );
};

// delete a specific deck
userController.deleteDeck = function (req, res, next) {
  console.log('deleteDeck invoked!');

  // sanitizing req body
  if (!req.body.topic) {
    return next({
      log: 'ERROR IN userController.deleteDeck; invalid req.body.topic',
      message: { err: 'Invalid request body, check again' },
    });
  }

  User.findOneAndUpdate(
    { userName: req.params.user },
    { $pull: { decks: { topic: req.body.topic } } },
    { new: true },
    (err, doc) => {
      if (err) {
        console.log('Error updating document!');
        return res.status(400).json(err);
      } else {
        console.log('successfully updated document!');
        return res.status(200).json(doc);
      }
    }
  );
};

// create a card
userController.createCard = function (req, res) {
  console.log('createCard invoked!');
  User.findOneAndUpdate(
    { userName: req.params.user, 'decks.topic': req.body.topic },
    {
      $push: {
        'decks.$.cards': {
          id: Number(req.body.id),
          question: req.body.question,
          answer: req.body.answer,
        },
      },
    },
    { new: true },
    (err, doc) => {
      if (err) {
        console.log('error adding card!');
        res.status(400).json(err);
      } else {
        console.log('successfully added card!');
        res.status(200).json(doc);
      }
    }
  );
};

userController.deleteCard = function (req, res) {
  User.findOneAndUpdate(
    {
      userName: req.params.user,
      'decks.topic': req.body.topic,
    },
    { $pull: { 'decks.$.cards': { id: Number(req.body.id) } } },
    { new: true },
    (err, doc) => {
      if (err) {
        console.log('error deleting card!');
        res.status(400).json(err);
      } else {
        console.log('successfully deleting card!');
        res.status(200).json(doc);
      }
    }
  );
};

module.exports = userController;
