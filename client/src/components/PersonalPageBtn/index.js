import React from "react";
import { Button } from '@material-ui/core';

function PersonalPageBtn(props) {
  return (
    <Button href="/yourJokes" target="_"><input 
    type="button" value="Saved jokes"/></Button>
  );
}

export default PersonalPageBtn;
