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
import classe from './Login.module.css' ;
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
}


render() {

  // const classes = useStyles();

    return (
        <div>
            <br/>
  heom     
        </div>
        );
        }

    }

    const mapStateToProps = state => ({
      // trading: state.data.item,
      // newPost: state.posts.item
      
    });

    export default connect(mapStateToProps,{})(Home);