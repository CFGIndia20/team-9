import React,{Component} from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import classe from './Home.module.css' ;
import { connect } from 'react-redux';
import { fetchPosts,get_property,login,verify_otp,register,clear } from '../actions/postActions';

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

  class Home extends Component {


    constructor(props) {
      super(props);

      this.state={
        val:0,
      }
     
  }

  componentWillMount() {
  console.log("home");
  console.log(window.location.href);
}


render() {

  // const classes = useStyles();

    return (
        <div>
            <br/>
  {/* heom      */}

  <Grid container>
  <Grid item lg={12} md={12} sm={12} xs={12} >
  <img  className={classe.img} src={require('./head.png')} />

  </Grid>
  </Grid>
   
<Grid container>
 

  <Grid item lg={4} md={4} sm={1} xs={1} >
  </Grid>
  <Grid item lg={4} md={4} sm={10} xs={10} >
      
  <Grid item lg={12} md={12} sm={12} xs={12} >
    {/* <span className={classe.head} ></span> */}
  {/* home */}
  {/* <Grid container>

  </Grid> */}
  <Grid item lg={12} md={12} sm={12} xs={12} >
    <div className={classe.back} >
      
{/* <ul> */}
  
{/* <li> */}
  <p className={classe.body}>
  Umeed is a<span className={classe.col}> non-profit </span>that hopes to promote<span className={classe.col}> women’s empowerment</span> and radically
   alter the mindsets that exist within society.
  </p>
  {/* </li> */}
  {/* <li> */}
  <p className={classe.body}>
  Through providing<span className={classe.col}>  training and knowledge </span>to women, we aspire to bring
   about an immediate and lasting difference; one of hope, dignity and security.
  </p>
  {/* </li> */}
  {/* <li> */}
  <p className={classe.body}> 

We provide training to women to<span className={classe.col}>  create and sell</span> simple and beautiful eco-friendly 
newspaper handicrafts, thus giving these women <span className={classe.col}> exposure to new life-skills;</span> such as planning, budgeting, teamwork and creativity. 

 </p>
 {/* </li> */}
 {/* <li> */}
 <p className={classe.body}>
 These skills will go a long way to drive their confidence,
  empower them and, eventually, <span className={classe.col}> alter the oppressive mindsets around them to progressive ones.</span>
 </p>
 {/* </li> */}
 {/* <li> */}
 <p className={classe.body}>

 Umeed does not exist only to better the lives of these women; but to better the lives of their <span className={classe.col}> whole families and communities.</span>
 </p>
 {/* </li> */}
{/* </ul>   */}
</div>


  </Grid>

      </Grid>

  </Grid>
  <Grid item lg={4} md={4} sm={1} xs={1} >
  </Grid>
      </Grid>
        </div>
        );
        }

    }

    const mapStateToProps = state => ({
      // trading: state.data.item,
      // newPost: state.posts.item
      
    });

    export default connect(mapStateToProps,{})(Home);