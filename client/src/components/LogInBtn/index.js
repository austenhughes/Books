import React from "react";
import { Button } from '@material-ui/core';


function LogInBtn(props) {
  return (
    <Button 
        onClick={props.handleFormSubmitLogIn} 
        className="btn btn-primary LogInBtn">
        Log in
    </Button>
  );
}

export default LogInBtn;
