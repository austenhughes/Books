import React from "react";
import { Button } from '@material-ui/core';

function PersonalPageBtn(props) {
  return (
    <Button 
        onClick={props.handleFormSubmitPersonalPage} 
        className="btn btn-primary PersonalPageBtn">
        Saved Jokes
    </Button>
  );
}

export default PersonalPageBtn;
