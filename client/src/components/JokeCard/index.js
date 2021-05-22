import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import SaveToLibraryBtn from "../SaveToLibraryBtn";

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


export default function JokeCard() {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className="cardContent">
        <div className="jokeTitle"> Joke title </div>
        <div className="part1"> part 1 </div>
        <div className="part2"> part 2 </div>
        <div className="time"> time </div>
        <div className="username"> Username </div>
      </CardContent>
      <SaveToLibraryBtn />
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}


