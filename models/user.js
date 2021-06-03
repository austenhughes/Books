// login info: email address & password & an array of jokes that belong to them & ones that they save
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});
// Add password hashing with Bcrypt

const User = mongoose.model("User",userSchema);

module.exports = User;