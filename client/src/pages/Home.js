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

  // // Setting our component's initial state
  // const [jokes, setJokes] = useState([])
  
  // // Load all books and store them with setBooks
  // useEffect(() => {
  //   loadJokes()
  // }, [])

  // // Loads all books and sets them to books
  // function loadJokes() {
  //   API.getJokes()
  //     .then(res => 
  //       setJokes(res.data)
  //     )
  //     .catch(err => console.log(err));
  // };
  
  return <div>
  <Header />
  <Nav>
  <CreateNewJokeBtn />
  <PersonalPageBtn />
  <LogOutBtn />
  </Nav> 
  <Container>
  <JokeCard />
  </Container>
  <Footer />
  </div>       
  
}

export default Home;