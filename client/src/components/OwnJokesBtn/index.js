import React from "react";
import { Button } from '@material-ui/core';

function OwnJokesBtn(props) {
  return (
    <Button href="/OwnJokes" target="_"><input 
    type="button" value="your Jokes"/></Button>
  );
}

export default OwnJokesBtn;