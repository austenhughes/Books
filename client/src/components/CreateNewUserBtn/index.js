import React from "react";
import { Button } from '@material-ui/core';

function CreateNewUserBtn(props) {
  return (
    <Button 
        onClick={props.handleFormSubmitCreateNewUser} 
        className="btn btn-primary createNewUserBtn">
        New User
    </Button>
  );
}

export default CreateNewUserBtn;