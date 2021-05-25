import React from "react";
import { Button } from '@material-ui/core';

function CreateNewUserBtn(props) {
  return (
      <Button href="/newUser" target="_"><input 
      type="button" value="New User"/></Button>
  );
}

export default CreateNewUserBtn;