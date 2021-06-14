// import React from "react";
import { Redirect } from "react-router-dom";
import React, { useState} from "react";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import API from "../../utils/API";

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

const bcrypt = require("bcryptjs");

function NewUserForm(props) {
  const classes = useStyles();

  const [redirectOnCreate, setRedirectOnCreate] = useState(false);

  const [newUser, setNewUser] = useState({})

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewUser({...newUser, [name]: value})
    };

  function handleFormSubmitNewUser(event) {
      event.preventDefault();

      setTimeout(() => {
      setRedirectOnCreate(true);
      }, 500);

      // console.log("Hi from over here we are entering user data")  
      // console.log(newUser.password)

      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            // console.log(hash)
            API.saveUser({
              name: newUser.name,
              email: newUser.email,
              password: hash,
              })
        });
      });
    };

  return (
    <div className={classes.form}>
       {redirectOnCreate && <Redirect to="/login" />}
    <form>
      <div className="newUserForm">
        <input
          onChange={handleInputChange}
          value={props.value}
          name="name"
          type="text"
          className={classes.form}
          placeholder="name"
          id="name"
        />
        <input
          onChange={handleInputChange}
          value={props.value}
          name="email"
          type="text"
          className={classes.form}
          placeholder="email"
          id="email"
        />
        <input
          onChange={handleInputChange}
          value={props.value}
          name="password"
          type="password"
          className={classes.form}
          placeholder="password"
          id="password"
        />
      </div>

      <Button 
        onClick={handleFormSubmitNewUser} 
        className="btn btn-primary SaveNewUserBtn">
        <input className={classes.button} value="save"/>
    </Button>

    </form>
    </div>
  );
}

export default NewUserForm;