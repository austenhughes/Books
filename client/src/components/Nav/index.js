import React from "react";
import { Button } from '@material-ui/core';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Welcome to the Baffoonery!!! 
      </a>
      <Button color="primary">Home</Button>;
      <Button color="primary">Sign Out</Button>;
      <Button color="primary">Add New Joke</Button>;
    </nav>
  );
}

export default Nav;
