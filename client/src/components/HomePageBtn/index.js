import React from "react";
import { Button } from '@material-ui/core';

function HomePageBtn(props) {
  return (
    <Button 
        onClick={props.handleFormSubmitHome} 
        className="btn btn-primary homePageBtn">
        Home
    </Button>
  );
}

export default HomePageBtn;