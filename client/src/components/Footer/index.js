import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  foot: {
  position: "fixed",
  bottom: "0px", 
  }
});

function Footer() {
  const classes = useStyles();
  return (
    <footer className="sticky footer mt-auto py-3" style={{ textAlign: "center" }}>
    <div className={classes.foot}>
        <span>&copy; 2021 The Buffoonery</span>
    </div>
</footer>
  );
}

export default Footer;

