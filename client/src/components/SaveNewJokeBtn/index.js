import React from "react";
import { Button } from '@material-ui/core';

function SaveNewJokeBtn(props) {
  return (
    <Button 
        onClick={props.handleFormSubmitNewJoke} 
        className="btn btn-primary SaveNewJokeBtn">
        SAVE
    </Button>
    );
}

export default SaveNewJokeBtn;