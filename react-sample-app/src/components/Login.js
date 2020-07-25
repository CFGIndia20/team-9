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
// import Register from './Register' ;
import { createStore, applyMiddleware, compose } from 'redux';
import Create_profile from './Create_profile';

import { connect } from 'react-redux';
import { login,register } from '../actions/postActions';

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


// function Login(props) {

  class Login extends Component {


    constructor(props) {
      super(props);

      this.handleChange=this.handleChange.bind(this);
      this.handleClickShowPassword=this.handleClickShowPassword.bind(this);
      this.handleMouseDownPassword=this.handleMouseDownPassword.bind(this);
      this.login_api=this.login_api.bind(this);
      this.register_api=this.register_api.bind(this);




      this.state={
        password: '',
        phone_no:'',
        showPassword: false,
        password_limit:0,
        // loading : false,
      }

  }

  componentWillMount() {
    // this.props.fetchPosts(1);
  console.log('login');

}



 handleChange = (prop) => (event) => {
  // setValues({ ...values, [prop]: event.target.value });
  if(prop=='phone_no'){
    var len=event.target.value.length;
    if(len>10){
      alert("Mobile no must be of 10 digits");
    }
    else{
      // console.log(len);
      this.setState({
        ...this.state,
        [prop]: event.target.value,
        password_limit:len,
      });
      // console.log(this.state);
    }
    
  }
  else{
    this.setState({
      ...this.state,
      [prop]: event.target.value,
    });
  }
 
};

 handleClickShowPassword = () => {
  this.setState({
    ...this.state,
    showPassword:!this.state.showPassword
  });
  // setValues({ ...values, showPassword: !values.showPassword });
};

 handleMouseDownPassword = (event) => {
  event.preventDefault();
};
register_api=()=>{
console.log(this.state.phone_no,this.state.password);
this.props.register(this.state.phone_no,this.state.password);

};
 login_api= () => {
  // console.log(this.state);
  this.props.login(this.state.phone_no,this.state.password);

  
  // console.log(this.props.loggedin);
  // document.querySelector('.login').click();
  // this.setState((state, props) => ({
  //   loading: true
  // }));
  // this.setState({
  //   loading : !this.state.loading
  // })
  // this.state.loading=true;
  // console.log(this.state);

};


render() {

  // const classes = useStyles();

    return (
<div>
  {this.props.register_.error}
{
        // this.props.register_.success ?
        this.props.loggedin.status=='success' ?
        <Redirect to="/" />:
        null
}
      {
        // this.props.register_.success ?
        this.props.register_.status=='success' ?

        <div>
        <Create_profile />
          </div>
          :
        <div>
    
<Grid container>
  <Grid item lg={4} md={4} sm={2} xs={2} >
  </Grid>
  <Grid item lg={4} md={4} sm={8} xs={8} >

 
      <br/>
      <br/>
      <br/>

    
      <br/>



  <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="phone_no"
      label="Phone No."
      name="phone_no"
      autoComplete="phone_no"
      autoFocus
      helperText={`${this.state.password_limit}/10`}
      FormHelperTextProps={{
        classes:{
          root: classe.lef,
          // error: classes.yourErrorCSS
        }
      }}
      onChange={this.handleChange('phone_no')}  
    />
       {/* <Grid container>
    <Grid item lg={12} md={12} sm={12} xs={12} >
    <br/>
  </Grid>
    </Grid> */}




<FormControl fullWidth className={clsx(classe.margin, classe.textField)} margin="normal" variant="filled">
    <InputLabel  htmlFor="outlined-adornment-password">Password *</InputLabel>
    <OutlinedInput
      id="outlined-adornment-password"
      type={this.state.showPassword ? 'text' : 'password'}
      value={this.state.password}
      onChange={this.handleChange('password')}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={this.handleClickShowPassword}
            onMouseDown={this.handleMouseDownPassword}
            edge="end"
          >
            {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>}
      // labelWidth={70}
      
    />
  </FormControl>

 
    <Grid container>
    <Grid item lg={12} md={12} sm={12} xs={12} >
    <br/>
  </Grid>
    </Grid>

  <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={classe.submit}
      onClick={this.register_api}
    >
      REGISTER
    </Button>

    <Grid container>
    <Grid item lg={12} md={12} sm={12} xs={12} >
    <br/>
  </Grid>
    </Grid> 
    
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={classe.submit}
      onClick={this.login_api}
    >
     LOGIN
    </Button>


    <Grid container>
      <Grid item xs>
        {/* <Link href="#" variant="body2"> */}
          {/* Forgot password? */}
        {/* </Link> */}
      </Grid>
      </Grid>


  </Grid>
  <Grid item lg={4} md={4} sm={2} xs={2} >
  </Grid>
      </Grid>

        </div>


  }
  </div>
        );
        }

    }

    const mapStateToProps = state => ({
      register_: state.data.register_,
      loggedin: state.data.loggedin,
      
    });

    export default connect(mapStateToProps,{login,register})(Login);