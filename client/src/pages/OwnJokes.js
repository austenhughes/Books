import React, { useState, useEffect } from "react";
import CreateNewJokeBtn from "../components/CreateNewJokeBtn";
import HomePageBtn from "../components/HomePageBtn";
import PersonalPageBtn from "../components/PersonalPageBtn";
import LogOutBtn from "../components/LogOutBtn";
import OwnJokeCard from "../components/OwnJokeCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Nav from "../components/Nav";

import API from "../utils/API";

function OwnJokes() {

  // Setting our component's initial state
  const [jokes, setJokes] = useState([])
  
  // Load all jokes and store them with setJokes
  useEffect(() => {
    console.log("hi")
    loadJokes()
  }, [])

  // Loads all jokes and sets them to jokes
  function loadJokes() {
    const user = localStorage.getItem("userInfo")
    const userInfo = JSON.parse(user)
    const userID = userInfo[0]._id
    console.log("also hi")
    API.getJokesById(userID)
      .then(res => 
        setJokes(res.data)
      )
      .catch(err => console.log(err));
  };
  
  return <div>
  <Header />
  <Nav>
  <CreateNewJokeBtn />
  <HomePageBtn />
  <LogOutBtn />
  <PersonalPageBtn />
  </Nav> 
  <Container>
  <OwnJokeCard jokes = {jokes} />
  </Container>
  <Footer />
  </div>       
  
}

export default OwnJokes;