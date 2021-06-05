// import React from "react";

import React, { useState} from "react";
import { Button } from '@material-ui/core';
import API from "../../utils/API";

// const bcrypt = require("bcrypt");

function NewUserForm(props) {

  const [newUser, setNewUser] = useState({})

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewUser({...newUser, [name]: value})
    };

  function handleFormSubmitNewUser(event) {
      event.preventDefault();
      console.log("Hi from over here we are entering user data")  
      
      // if (newUser.email && newUser.password) {
        API.saveUser({
          name: newUser.name,
          email: newUser.email,
          password: newUser.password,
        })
        // .then(res => loadJokes())
        .catch(err => console.log(err));
      // }
    };

  return (
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
  );
}

export default NewUserForm;