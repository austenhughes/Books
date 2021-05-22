import React from "react";
import { Button } from '@material-ui/core';
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    // <span className="delete-btn" {...props} role="button" tabIndex="0">
    //   ✗
    // </span>
    <Button color="primary">Delete</Button>
  );
}

export default DeleteBtn;
