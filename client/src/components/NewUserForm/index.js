// import React from "react";
import { Redirect } from "react-router-dom";
import React, { useState} from "react";
import { Button } from '@material-ui/core';
import API from "../../utils/API";

const bcrypt = require("bcryptjs");

function NewUserForm(props) {

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

      console.log("Hi from over here we are entering user data")  
      console.log(newUser.password)

      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            console.log(hash)
            API.saveUser({
              name: newUser.name,
              email: newUser.email,
              password: hash,
              })
        });
      });
    };

  return (
    <div>
       {redirectOnCreate && <Redirect to="/login" />}
    <form>
      <div className="newUserForm">
        <input
          onChange={handleInputChange}
          value={props.value}
          name="name"
          type="text"
          className="form-control"
          placeholder="name"
          id="name"
        />
        <input
          onChange={handleInputChange}
          value={props.value}
          name="email"
          type="text"
          className="form-control"
          placeholder="email"
          id="email"
        />
        <input
          onChange={handleInputChange}
          value={props.value}
          name="password"
          type="text"
          className="form-control"
          placeholder="password"
          id="password"
        />
      </div>

      <Button 
        onClick={handleFormSubmitNewUser} 
        className="btn btn-primary SaveNewUserBtn">
        SAVE
    </Button>

    </form>
    </div>
  );
}

export default NewUserForm;