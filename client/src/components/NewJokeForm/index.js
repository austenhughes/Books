// import React from "react";
import { Redirect } from "react-router-dom";
import React, { useState} from "react";
import { Button } from '@material-ui/core';
// import { Dropdown } from 'react-bootstrap';

import API from "../../utils/API";

function NewJokeForm(props) {

  const [redirectOnCreate, setRedirectOnCreate] = useState(false);

  // const [jokes, setJokes] = useState([])
  const [newJoke, setNewJoke] = useState({})

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewJoke({...newJoke, [name]: value})
    };

  function handleFormSubmitNewJoke(event) {
      event.preventDefault();

      setTimeout(() => {
      setRedirectOnCreate(true);
      }, 500);

      console.log("Hi from over here")  
      // if (newJoke.partOne) {
        API.saveJokes({
          userID: newJoke.userID,
          jokeID: newJoke.jokeID,
          joketype: newJoke.joketype,
          partOne: newJoke.partOne,
          partTwo: newJoke.partTwo
        })
        // .then(res => loadJokes())
        .catch(err => console.log(err));
      // }
    };

  return (
    <div>
    {redirectOnCreate && <Redirect to="/home" />}
    <form>
      <div className="newJokeForm">
        <input
          onChange={handleInputChange}
          value={props.value}
          name="userID"
          type="text"
          className="form-control"
          placeholder="User ID"
          id="userID"
        />
        <input
          onChange={handleInputChange}
          value={props.value}
          name="jokeID"
          type="text"
          className="form-control"
          placeholder="Joke ID"
          id="jokeID"
        />

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