import React from "react";
import { Button } from '@material-ui/core';

function LogInPageBtn(props) {
  return (
    <Button 
        onClick={props.handleFormSubmitLogInPage} 
        className="btn btn-primary LogInPageBtn">
        Log in
    </Button>
  );
}

export default LogInPageBtn;