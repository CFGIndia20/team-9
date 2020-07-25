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
import Post from './Post' ;

import classe from './Login.module.css' ;
import { connect } from 'react-redux';
import { create_pro } from '../actions/postActions';
import Select from '@material-ui/core/Select';
import MultipleSelect from 'react-multiple-select-dropdown';
import 'react-multiple-select-dropdown/dist/index.css';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
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

  class Post_wra extends Component {


    constructor(props) {
      super(props);
    //   this.handleChange=this.handleChange.bind(this);
    //   this.submit=this.submit.bind(this);


    

      this.state={


      }
     
  }

  componentWillMount() {
  console.log("wra");
}


render() {

  // const classes = useStyles();


    return (
    <div>
<br/>
<br/>
<br/>

<Grid container>
  <Grid item lg={4} md={4} sm={2} xs={2} >
  </Grid>

  <Grid item lg={4} md={4} sm={8} xs={8} >

        {/* <Post/> */}
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="outlined"
        />

  </Grid>
  <Grid item lg={4} md={4} sm={2} xs={2} >
  </Grid>
  </Grid>
    </div>
        );
        }

    }

    const mapStateToProps = state => ({
        // profile_created: state.data.profile_created,
      // newPost: state.posts.item
      
    });

    export default connect(mapStateToProps,{})(Post_wra);