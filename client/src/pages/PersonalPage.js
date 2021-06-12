import React from "react";
// import React, { useState, useEffect } from "react";
import CreateNewJokeBtn from "../components/CreateNewJokeBtn";
import HomePageBtn from "../components/HomePageBtn";
import LogOutBtn from "../components/LogOutBtn";
import OwnJokesBtn from "../components/OwnJokesBtn";
import SavedJokeCard from "../components/SavedJokeCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Nav from "../components/Nav";

// import API from "../utils/API";

function PersonalPage() {

   // Setting our component's initial state
  // const [jokes, setJokes] = useState([])
  
  // // Load user and store them with setJokes
  // useEffect(() => {
  //   console.log("hi")
  //   loadJokes()
  // }, [])

  // // Loads current user and sets them to jokes
  // function loadJokes() {
  //   const user = localStorage.getItem("userInfo")
  //   const userInfo = JSON.parse(user)
  //   const userID = userInfo[0]._id
  //   console.log("also hi")
  //   API.getUsersById(userID)
  //     .then(res => 
  //       setJokes(res.data),
  //     )
  //     .catch(err => console.log(err));
  // };

  return <div>
  <Header />
  <Nav>
  <CreateNewJokeBtn />
  <HomePageBtn />
  <LogOutBtn />
  <OwnJokesBtn />
  </Nav> 
  <Container>
  <SavedJokeCard 
  // jokes = {jokes} 
  />
  </Container>
  <Footer />
  </div>       
  
}

export default PersonalPage;