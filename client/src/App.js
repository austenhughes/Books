import NewUser from "./pages/NewUser";
import Login from "./pages/Login";
// import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import PersonalPage from "./pages/PersonalPage";
import NewJoke from "./pages/NewJoke";
import OwnJokes from "./pages/OwnJokes";

import { AuthProvider, AuthContext } from "./context/AuthContext";
import React, { Suspense, useContext } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"; 

const AuthenticatedRoute = ({ children, ...rest }) => {
  const auth = useContext(AuthContext);
  return (
    <Route {...rest} render={() => (auth.isAuthenticated() ? <div>{children}</div> : <Redirect to="/" />)}></Route>
  );
};

const UnauthenticatedRoutes = () => (
  <>
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/newUser">
        <NewUser />
      </Route>
    </Switch>
  </>
);

const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <AuthenticatedRoute path={["/home", "/yourJokes", "/newJoke", "/ownJokes"]}>
          <Route exact path={["/", "/home"]}>
              <Home />
           </Route>
          <Route exact path="/yourJokes">
             <PersonalPage />
           </Route>
           <Route exact path="/ownJokes">
             <OwnJokes />
           </Route>
          <Route exact path="/newJoke">
             <NewJoke />
           </Route>
           {/* <Route>
             <NoMatch />
           </Route> */}
          </AuthenticatedRoute>
          <UnauthenticatedRoutes />
        </Switch>
      </Suspense>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
