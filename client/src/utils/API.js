import axios from "axios";

export default {
  // jokes stuff
  // Gets jokes
  getJokes: function() {
    return axios.get("/api/jokes");
  },
  // Gets the joke with the given id ... this is set to user id not joke id right now
  getJokesById: function(id) {
    return axios.get("/api/jokes/" + id);
  },
  // Deletes the joke with the given id
  deleteJokes: function(id) {
    return axios.delete("/api/jokes/" + id);
  },
  // Saves a joke to the database
  saveJokes: function(jokeData) {
    return axios.post("/api/jokes", jokeData);
  },

  // user stuff 
  // save user
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  },
  // Gets users
  getUser: function() {
    return axios.get("/api/user");
  },
  // gets user by id
  getUsersById: function(id) {
    return axios.get("/api/user/" + id);
  },

  // saving favorites
  saveJokeToUser: function(id, jokeData) {
    return axios.put("/api/user/" + id, jokeData);
  },

};
