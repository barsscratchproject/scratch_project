const mongoose = require('mongoose');

// const MONGO_URI = 'mongodb+srv://ryanmcdaniel:admin@cluster0.mg5pj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const MONGO_URI =
  'mongodb+srv://barsadmin:bh4iDXf8mI5eAyiz@cluster0.gmc5l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    // dbName: 'scratch-project',
  })
  .then(() => console.log('Connected to Mongo DB!'))
  .catch((err) => console.log(`Error with Mongo DB connection: ${err}`));

const Schema = mongoose.Schema;

/*
USER SCHEMA
*/
const userSchema = new Schema({
  userName: String,
  decks: [],
});

// creats a model for the 'user' collection that will be part of the export
const User = mongoose.model('user', userSchema);

/*
DECK SCHEMA
*/
const deckSchema = new Schema({
  topic: String,
  cards: [Object],
});

// creats a model for the 'deck' collection that will be part of the export
const Deck = mongoose.model('deck', deckSchema);

/*
CARD SCHEMA
*/
const cardSchema = new Schema({
  cardNumber: { type: Number },
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

// creats a model for the 'card' collection that will be part of the export
const Card = mongoose.model('card', cardSchema);

// exports all the models in an object to be used in the controller
module.exports = {
  User,
  Deck,
  Card,
};
