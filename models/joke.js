const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jokeSchema = new Schema(
  {
  userID: { 
    type: String },
  joketype: { 
    type: String, 
    required: true },
  partOne: { 
    type: String, 
    required: true },
  partTwo: { 
    type: String },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Joke = mongoose.model("Joke", jokeSchema);

module.exports = Joke;
