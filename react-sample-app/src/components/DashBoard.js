import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import classe from './DashBoard.module.css';
import Grid from '@material-ui/core/Grid';

import {
  BrowserRouter as Router,
  Switch,
  useLocation,
  IndexRoute,
  Route,
  Link,
  Redirect,
  useParams
} from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(34),
//     },
//   },
// }));

function Dashboard() {
    // const classes=useStyles();
    return (
      <div>
        <br/>
  <br/>
  <br/>
  
<Grid container>
  

  <Grid item lg={4} md={4} sm={2} xs={2} >
  </Grid>
  <Grid item lg={4} md={4} sm={8} xs={8} >
  {/* <div className={classes.root}> */}
  <Grid container>
                    <Grid item lg={6} md={6} sm={6} xs={6} >
                    <Link to="/HomeWork" ><Button  color="primary" style={{background:'#9e1f5f',color:'white'}} variant="contained">HOMEWORK</Button></Link>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6} >
                    <Link to="/ProductTask" ><Button  color="primary" style={{background:'#9e1f5f',color:'white'}} variant="contained">TASKS</Button></Link>
                      </Grid>

  </Grid>
        {/* </div> */}
  </Grid>

  <Grid item lg={4} md={4} sm={2} xs={2} >
  </Grid>
  </Grid>
  </div>

       
    );
}
export default Dashboard;