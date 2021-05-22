import React from "react";
import CreateNewJokeBtn from "../components/CreateNewJokeBtn";
import HomePageBtn from "../components/HomePageBtn";
import LogOutBtn from "../components/LogOutBtn";
import JokeCard from "../components/JokeCard";
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
  </Nav> 
  <Container>
  <JokeCard />
  </Container>
  <Footer />
  </div>       
  
}

export default PersonalPage;