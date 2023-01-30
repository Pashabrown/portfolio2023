import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Button } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://www.pashabrownbooks.com">
        Pasha Brown Books
      </Link>{' / '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[400],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          
          Skills
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          <Button href="https://javascript.info/js" color="secondary" type="submit" value="Javascript Link">Javascript</Button>
          <img src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' width= "25"></img>
          <hr></hr>
          <Button href="https://reactjs.org/" color="secondary" type="submit" value="React Link">React.js</Button>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png' width= "35"></img>
          <hr></hr>
          <Button href="https://expressjs.com/" color="secondary" type="submit" value="Express Link">Express</Button>
          <img src='https://miro.medium.com/max/365/1*Jr3NFSKTfQWRUyjblBSKeg.png' width= "45"></img>
          <hr></hr>
          <Button href="https://docs.mongodb.com/manual/tutorial/" color="secondary" type="submit" value="MongoDb Link">MongoDb</Button>
          <img src='https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png' width= "55"></img>
          <hr></hr>
          <Button href="https://developer.mozilla.org/en-US/docs/Web/HTML" color="secondary" type="submit" value="HTML">HTML</Button>
          
          <hr></hr>
          <Button href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" color="secondary" type="submit" value="CSS">CSS</Button>
          
          <hr/>
          <h1>{''}</h1>
        </Typography>
        <Button href="https://i.imgur.com/AUW3FJC.png" color="secondary" type="submit" value="Resume">Resume</Button>
          <img src='https://i.imgur.com/AUW3FJC.png' width= "18"></img>
          <hr></hr>
        <Link variant="body1" href="https://www.pashabrownbooks.com">Children's Book Writer</Link>
        <hr/>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Santa Cruz, USA</Typography>
          <Copyright/>
        </Container>
      </footer>
    </div>
  );
}