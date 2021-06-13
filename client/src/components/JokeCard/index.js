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

export default function JokeCard(props) {

  const user = localStorage.getItem("userInfo")
  const userInfo = JSON.parse(user)
  const userID = userInfo[0]._id
  
  const [jokes, setJokes] = useState([])
  
  // Load user and store them with setJokes
  useEffect(() => {
    console.log("hi")
    // getUserId()
  }, [])

  function getUserId (joke){
    API.getUsersById(userID)
    .then(res => {
      console.log(joke)
      console.log(res.data)
      setJokes(res.data[0].savedJokes)
      console.log(res.data[0].savedJokes)
      const myjokes = res.data[0].savedJokes
      console.log(myjokes)
      saveJoke ()
      
      function saveJoke(){
        console.log(myjokes)
        console.log(joke)
        let newSavedJokesData = []
        let savedJokesData = myjokes
        newSavedJokesData = savedJokesData.push(joke)
        console.log(savedJokesData)

        // only lets you save a joke once 
        var obj = {};
        for ( var i=0, len=savedJokesData.length; i < len; i++ )
        obj[savedJokesData[i]['_id']] = savedJokesData[i];
        savedJokesData = new Array();
        for ( var key in obj )
        savedJokesData.push(obj[key]);
        console.log(savedJokesData)

        API.saveJokeToUser(userID, 
        {savedJokes : savedJokesData})
      }

    })
    .catch(err => console.log(err));
    }
  
const classes = useStyles();
console.log(props)

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
        onClick={ () => getUserId(joke)} 
        className="btn btn-primary saveBtn">
        save
      </Button>
  
    </Card>
    </List>
    ))} 
    </div>
  );
}


