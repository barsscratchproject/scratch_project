//ITERATIVE MONGOOD SERVER
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('error', err));

  //Autehticated used schema
  const UserSchema = new Schema({
      cookie: {
          type: string,
          required: true
      },
      timeofEntry: {
          type: Date,
          default: Date.now()
      },
      expires: {
          type: Date,
          default: (this.timeofEntry * 100)
      }
  });

  module.exports = mongoose.model('user', UserSchema);



