const { Pool } = require('pg');


const PG_URI = process.env.pgURI;

const pool = new Pool({
    connectionString: PG_URI
});

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    }
};

// create table public_deck(
//   pd_id serial primary key,
//   name varchar not null,
//   deck_created TIMESTAMP DEFAULT NOW()
//   );
  
//   create table cards(
//     card_id serial primary key,
//     pd_id integer not null,
//     front_question varchar not null,
//     back_answer varchar not null,
//     difficult boolean DEFAULT true,
//     card_created TIMESTAMP DEFAULT NOW(),
//     CONSTRAINT fk_deck   
//       FOREIGN KEY (pd_id)
//       REFERANCES public_deck(pd_id)
//     );










//OLD MONGOOD DB
// const mongoose = require('mongoose');

// const mongood =
//   'mongodb+srv://barsadmin:bh4iDXf8mI5eAyiz@cluster0.gmc5l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// mongoose
//   .connect(MONGO_URI, {
//     // options for the connect method to parse the URI
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // sets the name of the DB that our collections are part of
//     // dbName: 'scratch-project',
//   })
//   .then(() => console.log('Connected to Mongo DB!'))
//   .catch((err) => console.log(`Error with Mongo DB connection: ${err}`));

// const { Schema } = mongoose;

// // User schema - Represents users in the application
// // minimize: false allows us to save empty objects
// const userSchema = new Schema({ userName: String, decks: [Object] });

// // creates a model for the 'user' collection that will be part of the export
// module.exports = mongoose.model('user', userSchema);
