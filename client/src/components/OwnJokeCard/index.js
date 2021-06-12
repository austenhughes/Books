import React from 'react';
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

export default function OwnJokeCard(props) {
  
const classes = useStyles();
console.log(props)

function deleteJoke(_id) {
  console.log(_id)
    API.deleteJokes(_id)
      .catch(err => console.log(err));
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
        onClick={ () => deleteJoke(joke._id)} 
        className="btn btn-primary DeleteBtn">
        Delete
      </Button>
  
    </Card>
    </List>
    ))} 
    </div>
  );
}

