import React from "react";
import { Button } from '@material-ui/core';


function CreateNewJokeBtn(props) {
  return (
    <Button 
        onClick={props.handleFormSubmitCreateNewJoke} 
        className="btn btn-primary createNewJokeBtn">
        New Joke
    </Button>
  );
}

export default CreateNewJokeBtn;