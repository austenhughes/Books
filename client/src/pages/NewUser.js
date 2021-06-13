import React from "react";
import LogInPageBtn from "../components/LogInPageBtn";
import NewUserForm from "../components/NewUserForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Nav from "../components/Nav";

function NewUser() {
  
  return <div>
  <Header />
  <Nav>
  <LogInPageBtn />
  </Nav> 
  <Container>
  <NewUserForm />
  </Container>
  <Footer />
  </div>       
  
}

export default NewUser;