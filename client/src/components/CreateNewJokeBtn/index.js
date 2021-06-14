import React from "react";
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // add things to here 
  button: {
    borderRadius: "18px",
    backgroundColor: "#FFEE32",
    fontSize : "20px",
  }
}));

function CreateNewJokeBtn() {
  const classes = useStyles();
  return (
    <Button href="/newJoke" target="_">
    <input className={classes.button}
    type="button" value="New Joke"/>
    </Button>
  );
}

export default CreateNewJokeBtn;