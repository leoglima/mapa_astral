import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Typography,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import Cadastro from './templates/Cadastro';

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' },
  link: { textDecoration: 'none', color: theme.palette.text.primary },
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Drawer
          style={{ width: '220px' }}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{ paper: classes.drawerPaper }}
        >
          <List>
            <Link to="/" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={'Home'} />
              </ListItem>
            </Link>
            <Link to="/about" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={'About'} />
              </ListItem>
            </Link>
            <Link to="/cadastro" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HowToRegIcon />
                </ListItemIcon>
                <ListItemText primary={'Cadstro'} />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <Switch>
          <Route exact path="/">
            <Container>Home</Container>
          </Route>
          <Route exact path="/about">
            <Container>About</Container>
          </Route>
          <Route exact path="/cadastro">
            <Cadastro />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
