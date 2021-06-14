import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  button: {
    borderRadius: "18px",
    backgroundColor: "#FFEE32",
    fontSize : "20px",
    textAlign: "center",
    width: "40%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  form: {
    borderRadius: "18px",
    // backgroundColor: "#FFEE32",
    fontSize : "20px",
    textAlign: "center",
    width: "65%",
    height: "50px",
    marginLeft: "auto",
    marginRight: "auto",
    margin: "5px",
  }
});

// import API from "../../utils/API";

// import React, { useState} from "react";
// import { Button } from '@material-ui/core';

function LoginForm(props) {
  const classes = useStyles();

  const authContext = useContext(AuthContext);
  const [signInSuccess, setSignInSuccess] = useState();
  const [signInError, setSignInError] = useState();
  const [redirectOnSignIn, setRedirectOnSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const submitCredentials = async (credentials) => {
    try {
      // console.log(credentials)
      const url = "/api/auth";
      const fetchResponse = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "include", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(credentials), // body data type must match "Content-Type" header
      });
      const data = await fetchResponse.json();

      // const fetchResponse = API.getLogin({email, password});
      
      // const data = await fetchResponse;
      authContext.setAuthState(data);
      setSignInSuccess(data.message);
      setSignInError(null);

      setTimeout(() => {
        setRedirectOnSignIn(true);
      }, 700);
    } catch (error) {
      setSignInError(error.message);
      setSignInSuccess(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log({ email, password })

    submitCredentials({ email, password });
  };

  return (

    <div>
    {redirectOnSignIn && <Redirect to="/home" />}
    {signInSuccess && <h1>success</h1>}
    {signInError && <h1>Error: {signInError} </h1>}

    <form onSubmit={handleSubmit}>
      <div className="loginForm">
        <input
        //   onChange={handleInputChange}
          onChange={(e) => setEmail(e.target.value.trim())}
          value={props.value}
          name="email"
          type="text"
          className={classes.form}
          placeholder="email"
          id="email"
        />
        <input
        //   onChange={handleInputChange}
          onChange={(e) => setPassword(e.target.value.trim())}
          value={props.value}
          name="password"
          type="password"
          className={classes.form}
          placeholder="password"
          id="password"
        />
      </div>

      <Button 
        // onClick={handleLogIn}  
        type="submit"
        className="btn btn-primary LogInBtn">
        <input className={classes.button} value="login"/>
      </Button>

    </form>
    <img src="https://images.unsplash.com/photo-1615266895858-c243b139d5b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=80" className="img-fluid" alt="funny dog with banana"></img>
    </div>
  );
}

export default LoginForm;