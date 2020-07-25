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
import classes from './Main.module.css' ;




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
// import { } from '../actions/postActions';



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
                <Route exact path='/Login' component={Login} />
                
                
                <Grid item   lg={12} md={12}>

                    <AppBar style={{ background: '#5C9AEE' }}>

                        <Toolbar>

                                <Grid container>
                                <Grid item  md={2} lg={2} >
                                </Grid>
                                <Grid item  md={2} lg={2} >
                                logo
                                {/* <img className={classes.img} src={require('./resource/uploads/2020/02/logo-1-uai-258x93.png')} /> */}
                                </Grid>
                                <Grid item  md={2} lg={2} >
                                </Grid>
                                <Grid item  md={6} lg={6} >
                                <div >
                                <Link to="/" ><Button   >
                                        <Typography 
                                    className={classes.logo}
                                    >
                                            Home
                                        </Typography>
                                </Button></Link>
                                <Link to="/Contact"><Button   >
                                        <Typography 
                                    className={classes.logo}
                                    >
                                            Contact us
                                        </Typography>
                                </Button></Link>

                                {
                                this.props.loggedin.success ?
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
                                }

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

  
});


export default connect(mapStateToProps, {  })(Main);
