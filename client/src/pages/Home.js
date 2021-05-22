import React from "react";
import CreateNewJokeBtn from "../components/CreateNewJokeBtn";
import PersonalPageBtn from "../components/PersonalPageBtn";
import LogOutBtn from "../components/LogOutBtn";
// import SaveToLibraryBtn from "../components/SaveToLibraryBtn";
import JokeCard from "../components/JokeCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Nav from "../components/Nav";

function Home() {
  
  return <div>
  <Header />
  <Nav>
  <CreateNewJokeBtn />
  <PersonalPageBtn />
  <LogOutBtn />
  </Nav> 
  <Container>
  <JokeCard>
  {/* <SaveToLibraryBtn /> */}
  </JokeCard>
  </Container>
  <Footer />
  </div>       
  
}

export default Home;