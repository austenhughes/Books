import React from "react";
import { Button } from '@material-ui/core';

function LogOutBtn(props) {
  return (
    <Button 
        onClick={props.handleFormSubmitLogOut} 
        className="btn btn-primary LogOutBtn">
        Log out
    </Button>
  );
}

export default LogOutBtn;