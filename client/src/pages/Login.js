import React from "react";
import CreateNewUserBtn from "../components/CreateNewUserBtn";
// import LogInBtn from "../components/LogInBtn";
import LoginForm from "../components/LoginForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Nav from "../components/Nav";

function Login() {
  
  return <div>
  <Header />
  <Nav>
  <CreateNewUserBtn />
  </Nav> 
  <Container>
  <LoginForm />
  {/* <LogInBtn /> */}
  </Container>
  <Footer />
  </div>       
  
}

export default Login;