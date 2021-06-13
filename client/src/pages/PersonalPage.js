import React from "react";
import CreateNewJokeBtn from "../components/CreateNewJokeBtn";
import HomePageBtn from "../components/HomePageBtn";
import LogOutBtn from "../components/LogOutBtn";
import OwnJokesBtn from "../components/OwnJokesBtn";
import SavedJokeCard from "../components/SavedJokeCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Nav from "../components/Nav";


function PersonalPage() {

  return <div>
  <Header />
  <Nav>
  <CreateNewJokeBtn />
  <HomePageBtn />
  <LogOutBtn />
  <OwnJokesBtn />
  </Nav> 
  <Container>
  <SavedJokeCard />
  </Container>
  <Footer />
  </div>       
  
}

export default PersonalPage;