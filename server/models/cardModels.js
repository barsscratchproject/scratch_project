//ITERATIVE PSQL PPOL
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

// INSERT INTO cards (pd_id, front_question, back_answer)
// VALUES
//     (1, 'What is Earth''s largest continent?', 'Asia'),
//     (1, 'What is the biggest country by land mass?', 'Russia'),
//     (1, 'What country has the most natural lakes?', 'Canada'),
//     (1, 'How many time zones does China have?', '1'),
//     (1, 'How many timezones does Russia have?', '11'),
//     (2, 'Who was the Chinese ruler that built the Great Wall of China?', 'Qin Shi Huang'),
//     (2, 'What was the capital of the Inca empire?', 'Cusco'),
//     (2, 'Who became the Head of Rome after the assassination of Julius Caesar?', 'Octavian (Augustus Caesar)'),
//     (2, 'Of what ancient empire was Persepolis, the ceremonial centre?', 'The Persian Empire'),
//     (2, 'In what age did the Neanderthal live?', 'Paleolithic age'),
//     (3, 'What does HTML stand for?', 'Hypertext Markup Language'),
//     (3, 'Alpha in RGB extension named RGBA, defines', 'Opacity'),
//     (3, 'What is the difference between var, let, and const', 'Let and const are ES6 syntax keywords used to declare block-scoped variables, providing an added layer of protection from side effects as compared to variables delcared using the pre-ES6 var keyword, which is function scoped.'),
//     (3, 'What is the difference between stack and queue?', 'Queue is always First In, First Out. Stack is always Last In, First Out'),
//     (3, 'Explain Implicit Type Coercion in JavaScript.', 'Implicit type coercion in JavaScript is automatic conversion of value from one data type to another. It takes place when the operands of an expression are of different data types.');