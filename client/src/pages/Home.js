// import React from "react";
import React, { useState, useEffect } from "react";
import CreateNewJokeBtn from "../components/CreateNewJokeBtn";
import PersonalPageBtn from "../components/PersonalPageBtn";
import LogOutBtn from "../components/LogOutBtn";
import OwnJokesBtn from "../components/OwnJokesBtn";
import JokeCard from "../components/JokeCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Nav from "../components/Nav";

import API from "../utils/API";

function Home() {
  
  // Setting our component's initial state
  const [jokes, setJokes] = useState([])
  
  // Load all jokes and store them with setJokes
  useEffect(() => {
    console.log("hi")
    API.getJokes()
      .then(res => 
        setJokes(res.data)
      )
      .catch(err => console.log(err));
    // loadJokes()
  }, [])
  
  return <div>
  <Header />
  <Nav>
  <CreateNewJokeBtn />
  <PersonalPageBtn />
  <LogOutBtn />
  <OwnJokesBtn />
  </Nav> 
  <Container> 
  <JokeCard jokes = {jokes} />
  </Container>
  <Footer />
  </div>       
  
}

export default Home;