import React from 'react';
// import React, { useState, useEffect } from "react";
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

export default function JokeCard(props) {
  
const classes = useStyles();
console.log(props)

function saveJoke(joke){
  const user = localStorage.getItem("userInfo")
  const userInfo = JSON.parse(user)
  const userID = userInfo[0]._id
  console.log(joke)

  API.getUsersById(userID)

  let newSavedJokesData = []
  let savedJokesData = userInfo[0].savedJokes
  newSavedJokesData = savedJokesData.push(joke)
  // newSavedJokesData = newSavedJokesData.push(joke)
  console.log(savedJokesData)
  console.log(newSavedJokesData)

  API.saveJokeToUser(userID, 
    {savedJokes : savedJokesData})
  console.log(userInfo)
}

  return (
    <div>
    {props.jokes.map(joke => (
      
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
        onClick={ () => saveJoke(joke)} 
        className="btn btn-primary saveBtn">
        save
      </Button>
  
    </Card>
    </List>
    ))} 
    </div>
  );
}


