import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles';
import {NoMatch} from './pages/404'
import {Stage} from './components/Stage'
import Login from './pages/login/LoginForm'
import validation from './utils/validation'


function App() {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      padding: 10
    },
    link: {
      color: "white"
    }
  }));


  const classes = useStyles();
  return (
    <Router>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            <Link className={classes.link}  to={"/login"}>Login</Link>
          </Typography>
          <Typography className={classes.title} variant="h6">
            <Link className={classes.link}  to={"/app"}>App</Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/app" component={validation(Stage)}/>
        <Route path="/login" component={Login}/>
        <Route component={NoMatch} path="*" />
      </Switch>
    </Router>
  )
}

export default App
