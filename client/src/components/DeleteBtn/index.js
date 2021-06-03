import React from "react";
import { Button } from '@material-ui/core';

// import API from "../../utils/API";

function DeleteBtn(props) {

  function deleteJoke(id) {
    console.log(id)
      API.deleteJokes(id)
        .catch(err => console.log(err));
    }

  return (
    <Button 
        onClick={deleteJoke(props.joke._id)} 
        className="btn btn-primary DeleteBtn">
        Delete
    </Button>
  );
}

export default DeleteBtn;
