const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jokeSchema = new Schema({
  userID: { type: String, required: true },
  jokeID: { type: Number, required: true },
  joketype: { type: String, required: true },
  partOne: { type: String, required: true },
  partTwo: { type: String },
});

// const bookSchema = new Schema({
//   title: { type: String, required: true },
//   author: { type: String, required: true },
//   synopsis: String,
//   date: { type: Date, default: Date.now },
// });

const Joke = mongoose.model("Joke", jokeSchema);

module.exports = Joke;