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
