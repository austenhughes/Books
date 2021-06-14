import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  head: {
    fontSize: "50px",
    textAlign: "center",
    width: "100%",
    margin: "10px",
  }
});

function Header() {
  const classes = useStyles();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className={classes.head}>The Buffoonery</div>
  </nav>
  );
}

export default Header;