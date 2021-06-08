import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewUser from "./pages/NewUser";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import PersonalPage from "./pages/PersonalPage";
import NewJoke from "./pages/NewJoke";

// needs some working out 

function App() {
  return (
    <Router>
      <div>

        <Switch>

          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          
          <Route exact path="/yourJokes">
            <PersonalPage />
            </Route>

          <Route exact path="/newJoke">
            <NewJoke />
            </Route>

          <Route exact path="/newUser">
            <NewUser />
            </Route>

          <Route exact path="/Login">
            <Login />
            </Route>

          <Route>
            <NoMatch />
            </Route>
            
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
