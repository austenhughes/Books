import React from "react";
import { Button } from '@material-ui/core';

function LogOutBtn(props) {
  return (
      <Button href="/login" target="_"><input 
      type="button" value="Log out"/></Button>
  );
}

export default LogOutBtn;