// import React from "react";
import { Redirect } from "react-router-dom";
import React, { useState} from "react";
import { Button } from '@material-ui/core';
// import { Dropdown } from 'react-bootstrap';

import API from "../../utils/API";

function NewJokeForm(props) {

  const [redirectOnCreate, setRedirectOnCreate] = useState(false);

  const [newJoke, setNewJoke] = useState({})

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewJoke({...newJoke, [name]: value})
    };

  function handleFormSubmitNewJoke(event) {
      event.preventDefault();
      const user = localStorage.getItem("userInfo")
      const userInfo = JSON.parse(user)
      console.log(userInfo[0]._id)

      // const id = req.body.userInfo._id

      setTimeout(() => {
      setRedirectOnCreate(true);
      }, 500);

      console.log("Hi from over here")  
        API.saveJokes({
          userID: userInfo[0]._id,
          joketype: newJoke.joketype,
          partOne: newJoke.partOne,
          partTwo: newJoke.partTwo
        })
        .catch(err => console.log(err));
    };

  return (
    <div>
    {redirectOnCreate && <Redirect to="/home" />}
    <form>
      <div className="newJokeForm">
       
        {/*  many need to change back  */}

        <input
          onChange={handleInputChange}
          value={props.value}
          name="joketype"
          type="text"
          className="form-control"
          placeholder="Joke type"
          id="joketype"
        />

        {/* <select className="dropdown" value={props.value} onChange={handleInputChange}> 
          <option className="dropdownItem" name="joketype" value="one">One</option>
          <option className="dropdownItem" name="joketype" value="two">Two</option>
        </select> */}

        <input
          onChange={handleInputChange}
          value={props.value}
          name="partOne"
          type="text"
          className="form-control"
          placeholder="Part 1"
          id="PartOne"
        />
        <input
          onChange={handleInputChange}
          value={props.value}
          name="partTwo"
          type="text"
          className="form-control"
          placeholder="Part 2"
          id="PartTwo"
        />
      </div>

      <Button 
        onClick={handleFormSubmitNewJoke} 
        className="btn btn-primary SaveNewJokeBtn">
        SAVE
      </Button>

    </form>
    </div>
  );
}

export default NewJokeForm;