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

// User schema - Represents users in the application
// minimize: false allows us to save empty objects
const userSchema = new Schema({ userName: String, decks: [Object] });

// creates a model for the 'user' collection that will be part of the export
module.exports = mongoose.model('user', userSchema);
