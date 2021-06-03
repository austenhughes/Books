import React from "react";
import { Button } from '@material-ui/core';


function CreateNewJokeBtn(props) {
  return (
    <Button href="/newJoke" target="_">
    <input type="button" value="New Joke"/>
    </Button>
  );
}

export default CreateNewJokeBtn;