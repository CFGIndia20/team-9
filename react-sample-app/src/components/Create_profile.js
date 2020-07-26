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

  class Create_profile extends Component {


    constructor(props) {
      super(props);
      this.handleChange=this.handleChange.bind(this); 
      this.submit=this.submit.bind(this); 


    

      this.state={

        name:'',
        avail:'',
        location:'',
        

      }
     
  }

  componentWillMount() {
  console.log("home");
}
submit=()=>{
    if(this.state.location==''){
        // this.setState({
        //     ...this.state,
        //     location:'Mumbai',
        //   });
        // console.log("error");
        alert("select a location");
    }
    else{
        this.props.create_pro(this.state); 
    }
    console.log(this.state);

    // this.props.update_data(this.state);
}

handleChange = (prop) => (event) => {
    // setValues({ ...values, [prop]: event.target.value });
    this.setState({
      ...this.state,
      [prop]: event.target.value,
    });
  };

render() {

  // const classes = useStyles();


    return (
        <div>
             {/* {
        // this.props.register_.success ?
        this.props.register_.status=='success' ?
        <Redirect to="/" />:
    
    null         
    } */}
            {
  this.props.profile_created.status=='success' ?
  <Redirect to="/Login" />
  :
        <div>
            <br/>
  create your Profile

     
<Grid container>
    <Grid item lg={3} md={3} sm={1} xs={1} >
    </Grid>

      
        <Grid item lg={6} md={6} sm={10} xs={10} >
        
        <Grid container>
       
        <Grid item lg={8} md={8} sm={8} xs={8} >

        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Name"
            defaultValue={this.state.name}
            autoFocus
            onChange={this.handleChange('name')}
            />
{/* 
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Last Name"
            defaultValue={this.state.last_name}
            autoFocus
            onChange={this.handleChange('last_name')}
            /> */}


        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Time(in Hours) available per week"
            defaultValue={this.state.avail}
            autoFocus
            onChange={this.handleChange('avail')}
            />
           
        <FormControl variant="outlined" fullWidth  margin="normal">
                <InputLabel htmlFor="outlined-age-native-simple">Location</InputLabel>
                <Select
                native
                  value={this.state.location}
                  onChange={this.handleChange('location')}
                label="Location"
                inputProps={{
                    name: 'Location',
                    id: 'outlined-age-native-simple',
                }}
                >
                <option aria-label="None" value="" />
                <option value={'Mumbai'}>Mumbai</option>
                <option value={'Bangalore'}>Bangalore</option>
                <option value={'Chennai'}>Chennai</option>
                </Select>
         </FormControl>


            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                //   className={classe.submit}
                onClick={this.submit}
                >
                SUBMIT
                </Button>
                    
        
        </Grid>
        </Grid>
       
        </Grid>
       
        </Grid>



        </div>
}

        </div>
        
        );
        }

    }

    const mapStateToProps = state => ({
        profile_created: state.data.profile_created,
      // newPost: state.posts.item
      
    });

    export default connect(mapStateToProps,{create_pro})(Create_profile);