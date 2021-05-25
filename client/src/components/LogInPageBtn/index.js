import React from "react";
import { Button } from '@material-ui/core';

function LogInPageBtn(props) {
  return (
    <Button href="/login" target="_"><input 
    type="button" value="Log in"/></Button>
  );
}

export default LogInPageBtn;