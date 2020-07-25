// import React from 'react';
import { connect } from 'react-redux';
import React,{Component} from "react";
import Button from '@material-ui/core/Button';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import classe from './DashBoard.module.css';
import Grid from '@material-ui/core/Grid';
import { HC,PC  } from '../actions/postActions';

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

// function Dashboard() {
  
  class Dashboard extends Component {


    constructor(props) {
      super(props);
    }

    // const classes=useStyles();

    render() {

      // const classes = useStyles();
    
      const call1 = () => {
        console.log("call 1");
 
      this.props.HC(this.props.userid);

    }
    const call2 = () => {
      console.log("call 2");
      this.props.PC(this.props.userid);

    }
        return (
    // return (
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
                    <Link to="/HomeWork" ><Button onClick={call1} color="primary" variant="contained">HOMEWORK</Button></Link>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6} >
                    <Link to="/ProductTask" ><Button onClick={call2}  color="primary" variant="contained">TASKS</Button></Link>
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
  }
// export default Dashboard;
const mapStateToProps = state => ({
  userid: state.data.userid,
// newPost: state.posts.item

});

export default connect(mapStateToProps,{HC,PC})(Dashboard);