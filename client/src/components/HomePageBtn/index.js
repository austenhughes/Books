import React from "react";
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // add things to here 
  button: {
    borderRadius: "18px",
    backgroundColor: "#FFEE32",
    fontSize : "20px",
  }
}));

function HomePageBtn(props) {
  const classes = useStyles();
  return (
    <Button  href="/Home" target="_">
    <input className={classes.button} 
    type="button" value="Home"/>
    </Button>
  );
}

export default HomePageBtn;