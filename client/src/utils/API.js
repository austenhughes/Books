import axios from "axios";

export default {
  // Gets jokes books
  getJokes: function() {
    return axios.get("/api/jokes");
  },
  // Gets the joke with the given id
  getBook: function(id) {
    return axios.get("/api/jokes/" + id);
  },
  // Deletes the joke with the given id
  deleteBook: function(id) {
    return axios.delete("/api/jokes/" + id);
  },
  // Saves a joke to the database
  saveBook: function(jokeData) {
    return axios.post("/api/jokes", jokeData);
  }
};
