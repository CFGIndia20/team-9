import React ,{Component} from 'react';
import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Main from './components/Main';
import Grid from '@material-ui/core/Grid';  
import Button from '@material-ui/core/Button';
// import Property_detail from './components/Property_detail';


import {
  BrowserRouter as Router,
  Switch,
  useLocation,
  IndexRoute,
  Route,
  Link,
  HashRouter,
  Redirect
} from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store';


function App() {
  // const classes = useStyles();

  return (

    
        
      <div>

<Provider store={store}>
<HashRouter>
    <Main/>
  </HashRouter>
  </Provider>

        
        </div>


  );
}

export default App;
