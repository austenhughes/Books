const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect("mongodb://localhost/jokeData", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const jokeSeed = [
  {
    userID: "1",
    jokeID: 1,
    joketype:'Knock Knock',
    partOne: 'part 1',
    partTwo:'part 2'
  },
  {
    userID: "1",
    jokeID: 1,
    joketype:'Knock Knock',
    partOne: 'part 1',
    partTwo:'part 2'
  }
];

db.Joke.remove({})
  .then(() => db.Joke.collection.insertMany(jokeSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
