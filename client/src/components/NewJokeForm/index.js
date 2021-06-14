// import React from "react";
import { Redirect } from "react-router-dom";
import React, { useState} from "react";
import { Button } from '@material-ui/core';
// import { Dropdown } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';

import API from "../../utils/API";

const useStyles = makeStyles({
  button: {
    borderRadius: "18px",
    backgroundColor: "#FFEE32",
    fontSize : "20px",
    textAlign: "center",
    width: "40%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  form: {
    borderRadius: "18px",
    // backgroundColor: "#FFEE32",
    fontSize : "20px",
    textAlign: "center",
    width: "65%",
    height: "50px",
    marginLeft: "auto",
    marginRight: "auto",
    margin: "5px",
  }
});

// import API from "../../utils/API";

function NewJokeForm(props) {
  const classes = useStyles();

  const [redirectOnCreate, setRedirectOnCreate] = useState(false);

  const [newJoke, setNewJoke] = useState({})

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewJoke({...newJoke, [name]: value})
    };

  function handleFormSubmitNewJoke(event) {
      event.preventDefault();
      const user = localStorage.getItem("userInfo")
      const userInfo = JSON.parse(user)
      console.log(userInfo[0]._id)

      // const id = req.body.userInfo._id

      setTimeout(() => {
      setRedirectOnCreate(true);
      }, 500);

      console.log("Hi from over here")  
        API.saveJokes({
          userID: userInfo[0]._id,
          joketype: newJoke.joketype,
          partOne: newJoke.partOne,
          partTwo: newJoke.partTwo
        })
        .catch(err => console.log(err));
    };

  return (
    <div>
    {redirectOnCreate && <Redirect to="/home" />}
    <form>
      <div className="newJokeForm">
       
        {/*  many need to change back  */}

        <input
          onChange={handleInputChange}
          value={props.value}
          name="joketype"
          type="text"
          className={classes.form}
          placeholder="Joke type"
          id="joketype"
        />

        {/* <select className="dropdown" value={props.value} onChange={handleInputChange}> 
          <option className="dropdownItem" name="joketype" value="one">One</option>
          <option className="dropdownItem" name="joketype" value="two">Two</option>
        </select> */}

        <input
          onChange={handleInputChange}
          value={props.value}
          name="partOne"
          type="text"
          className={classes.form}
          placeholder="Part 1"
          id="PartOne"
        />
        <input
          // className={classes.button}
          onChange={handleInputChange}
          value={props.value}
          name="partTwo"
          type="text"
          className={classes.form}
          placeholder="Part 2"
          id="PartTwo"
        />
      </div>

      <Button 
        onClick={handleFormSubmitNewJoke} 
        className="btn btn-primary SaveNewJokeBtn">
        <input className={classes.button} value="save"/>
      </Button>

    </form>
    </div>
  );
}

export default NewJokeForm;