const mongoose = require("mongoose");
const db = require("../models");

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
    joketype:'Dumb',
    partOne: 'How many apples grow on a tree?',
    partTwo:'All of them'
  },
  {
    userID: "1",
    jokeID: 1,
    joketype:'Questions and Answer',
    partOne: 'How does a penguin build his house?',
    partTwo:'Igloos it together'
  },
  {
    userID: "1",
    jokeID: 1,
    joketype:'Pun',
    partOne: 'Dogs can’t operate MRI machines',
    partTwo:'But catscan'
  },
  {
    userID: "1",
    jokeID: 1,
    joketype:'Other',
    partOne: '5/4 of people admit they’re bad at fractions',
    partTwo:''
  },
  {
    userID: "1",
    jokeID: 1,
    joketype:'Question and Answer',
    partOne: 'When does a joke become a “dad joke?”',
    partTwo:'When it becomes apparent.'
  },
  {
    userID: "1",
    jokeID: 1,
    joketype:'Dumb',
    partOne: 'Yesterday I spotted an albino dalmation',
    partTwo:'It was the least I could do for him.'
  },
  {
    userID: "1",
    jokeID: 1,
    joketype:'Question and Answer',
    partOne: 'Why are bigger rocks braver than the rest?',
    partTwo:'Because they are boulder.'
  },
  {
    userID: "1",
    jokeID: 1,
    joketype:'Question and Answer',
    partOne: 'What kind of dogs do computer programmers have?',
    partTwo:'Computer Labs'
  },
  {
    userID: "1",
    jokeID: 1,
    joketype:'Dumb',
    partOne: 'Shout out to my Grandma',
    partTwo:'Its the only way she will hear you'
  },
  {
    userID: "1",
    jokeID: 1,
    joketype:'Question and Answer',
    partOne: 'What do you call a tired tornado?',
    partTwo:'Winded'
  },
  {
    userID: "1",
    jokeID: 1,
    joketype:'Dumb',
    partOne: 'You gotta hand it to short people',
    partTwo:'Because they cant reach'
  },
];

db.Joke.remove({})
  .then(() => db.Joke.collection.insertMany(jokeSeed,))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

  const userSeed = [
    {
      email: "Jane@email.com",
      password: "Password!",
    },
   
  ];

  db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed,))
  .then((data) => {
    console.log(data.result.n + "user inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });