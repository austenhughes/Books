import axios from "axios";

export default {
  // Gets jokes
  getJokes: function() {
    return axios.get("/api/jokes");
  },

  // Gets the joke with the given id
  
  // getJokes: function(id) {
  //   return axios.get("/api/jokes/" + id);
  // },
  
  // Deletes the joke with the given id
  deleteJokes: function(id) {
    return axios.delete("/api/jokes/" + id);
  },
  // Saves a joke to the database
  saveJokes: function(jokeData) {
    return axios.post("/api/jokes", jokeData);
  },
  

  // user stuff 
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  },
  // Gets users
  getUser: function() {
    return axios.get("/api/user");
  },
  

  // // auth routes 
  // getLogin: function() {
  //   return axios.get("/api/auth");
  // }

};
