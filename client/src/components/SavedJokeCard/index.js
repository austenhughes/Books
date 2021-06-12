// import React from 'react';
import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core';

import API from "../../utils/API";
import { List } from "../List";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SavedJokeCard(props) {
const classes = useStyles();

const [jokes, setJokes] = useState([])
  
  // Load user and store them with setJokes
  useEffect(() => {
    console.log("hi")
    loadJokes()
  }, [])

  // Loads current user and sets them to jokes
  function loadJokes() {
    const user = localStorage.getItem("userInfo")
    const userInfo = JSON.parse(user)
    const userID = userInfo[0]._id
    console.log("also hi")
    API.getUsersById(userID)
      .then(res => {
        console.log(res.data)
        setJokes(res.data[0].savedJokes)
        // setJokes(res.data[0])
        // console.log(jokes)
  })
      .catch(err => console.log(err));
  };

  console.log(jokes[0])
  // console.log(res.data)


// above here is a try thing 

// console.log(props.jokes[0])
// const saved = props.jokes[0]
// console.log(saved)
// const jokes = JSON.stringify(saved)
// console.log(jokes)

// console.log(props.jokes[0].savedJokes)

// this works but wrong 
// const user = localStorage.getItem("userInfo")
// const userInfo = JSON.parse(user)
// const savedJokes = userInfo[0].savedJokes
// console.log(savedJokes)

// need to rework for delete from saved
function deleteJoke(_id) {
  console.log(_id)
    // API.deleteJokes(_id)
      .catch(err => console.log(err));
  }

  return (
    <div>
    {jokes.map(joke => (
      
    <List key={joke._id} >

    <Card className={classes.root} variant="outlined">

    <CardContent className="cardContent">

      <div>
              <div className="jokeCard">
              <div>{joke.joketype}</div>
              <div>{joke.partOne}</div>
              <div>{joke.partTwo}</div>
              </div> 
      </div>

    </CardContent>

      <Button 
        onClick={ () => deleteJoke()} 
        className="btn btn-primary DeleteBtn">
        Delete
      </Button>

    </Card>
    </List>
    ))} 
    </div>
  );
}

