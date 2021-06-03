// import React from "react";
import React, { useState} from "react";
import { Button } from '@material-ui/core';

import API from "../../utils/API";

function NewJokeForm(props) {

  // const [jokes, setJokes] = useState([])
  const [newJoke, setNewJoke] = useState({})

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewJoke({...newJoke, [name]: value})
    };

  function handleFormSubmitNewJoke(event) {
      event.preventDefault();
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
        <input
          onChange={handleInputChange}
          value={props.value}
          name="joketype"
          type="text"
          className="form-control"
          placeholder="Joke type"
          id="joketype"
        />
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
  );
}

export default NewJokeForm;