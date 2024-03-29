import React ,{Component} from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';  
import {  fade,makeStyles, useTheme }  from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination';
import Hidden from '@material-ui/core/Hidden';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
import CircularProgress from '@material-ui/core/CircularProgress';
// import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Home from './Home';
import Login from './Login';
import Contact_us from './Contact_us';
import Post from './Post';
import Post_wra from './Post_wra';
import FileUpload from './FileUpload';

import DashBoard from './DashBoard';
import HomeWork from './HomeWork';
import ProductTask from './ProductTask';
import classes from './Main.module.css' ;
import { AssignTask } from './assignTask';
import { AssignHomework } from './assignHomework';


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

import { connect } from 'react-redux';
import Attendance from './Attendance';
import adminDashboard from './adminDashboard';
import updateProfileAdmin from './updateProfileAdmin';
import updateProfileUser from './updateProfileUser';
// import { } from '../actions/postActions';
import { } from '../actions/postActions';



class Main extends Component{

  constructor(props){
      super(props);
      
      
      this.state={
        value:0,
        
      }

      

      }

      componentDidMount()
      {
          console.log('sample app');
          
      }

  render(){

       
        return(               
              
              <div>
            <br/>
            <br/>

                <Route exact path='/' component={Home} />
                <Route exact path='/Contact' component={Contact_us} />
                <Route exact path='/Attendance' component={Attendance} />
                <Route exact path='/AdminDashboard' component={adminDashboard} />
                <Route exact path='/AdminDashboard/assigntask' component={AssignTask} />
                <Route exact path='/AdminDashboard/updateprofile' component={updateProfileAdmin} />
                <Route exact path='/AdminDashboard/assignhomework' component={AssignHomework} />
                <Route exact path='/updateprofile' component={updateProfileUser} />
                <Route exact path='/Login' component={Login} />
                <Route exact path='/Post' component={Post_wra}/>
                <Route exact path='/DashBoard' component={DashBoard}/>
                <Route exact path='/HomeWork' component={HomeWork}/>
                <Route exact path='/ProductTask' component={ProductTask}/>
                <Route exact path='/FileUpload' component={FileUpload}/>


                <Grid item   lg={12} md={12}>

                    <AppBar style={{ background: '#9e1f5f' }}>

                        <Toolbar>

                                <Grid container>
                                <Grid item  md={1} lg={1} >
                                </Grid>
                                <Grid item  md={3} lg={3} >
                                {/* logo */}
                                {/* <img className={classes.img} src={require('./resource/uploads/2020/02/logo-1-uai-258x93.png')} /> */}
                                {/* <div className={classes}> */}
                                <img  className={classes.img} src={require('./logo.png')} />
                                {/* </div> */}
                                </Grid>
                                <Grid item  md={2} lg={2} >
                                </Grid>
                                <Grid item  md={6} lg={6} >
                                <div >
                                <Link to="/DashBoard" ><Button   >
                                        <Typography 
                                    className={classes.logo}
                                    >
                                            DashBoard
                                        </Typography>
                                </Button></Link>
                                <Link to="/" ><Button   >
                                        <Typography 
                                    className={classes.logo}
                                    >
                                            Home
                                        </Typography>
                                </Button></Link>
                                {/* <Link to="/Contact"><Button   >
                                        <Typography 
                                    className={classes.logo}
                                    >
                                            Contact us
                                        </Typography>
                                </Button></Link> */}

                                {/* {
                                this.props.loggedin.status=='success' || this.props.is_log  ?
                                <span>hey</span>
                                    
                                    :
                                <span>
                                    <Link to="/Login">
                                    <Button  >
                                    
                                    <Typography 
                                    className={classes.logo}
                                    >Login</Typography>
                                    </Button>
                                    
                                    </Link>  
                                    </span>
                                } */}

                                </div>


                                </Grid>
                                </Grid>

                        </Toolbar>
                    
                    </AppBar>
                </Grid>

              </div>
            );
      
  }
}


const mapStateToProps = state => ({
  loggedin: state.data.loggedin,
  is_log: state.data.is_log,
  
});


export default connect(mapStateToProps, {  })(Main);
