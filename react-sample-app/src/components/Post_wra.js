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
import { create_pro,upload_your_file } from '../actions/postActions';
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
      this.handleChange=this.handleChange.bind(this);
      this.submit=this.submit.bind(this);
      this.onFileChange=this.onFileChange.bind(this);
      this.fileData=this.fileData.bind(this);



    

      this.state={
        name:'',
        selectedFile: ''


      }
     
  }

  componentWillMount() {
  console.log("wra");
}
onFileChange = event => { 
	
	// Update the state 
	// this.setState({ selectedFile: event.target.files[0] }); 
  // console.log(this.state.selectedFile);
  // console.log(event.target.files[0] );
//   this.setState(prevState => ({
//     selectedFile: prevState.selectedFile+event.target.files[0],
//  }))
//     console.log(this.state.selectedFile);

this.setState({ selectedFile: event.target.files[0] }, () => { console.log(this.state.selectedFile) });

  
	}; 
	
	// On file upload (click the upload button) 

fileData = () => { 
	
	if (this.state.selectedFile) { 
		
		return ( 
		<div> 
			<h2>File Details:</h2> 
			<p>File Name: {this.state.selectedFile.name}</p> 
			<p>File Type: {this.state.selectedFile.type}</p> 
			<p> 
			Last Modified:{" "} 
			{this.state.selectedFile.lastModifiedDate.toDateString()} 
			</p> 
		</div> 
		); 
	} else { 
		return ( 
		<div> 
			<br /> 
			<h4>Choose before Pressing the Submit button</h4> 
		</div> 
		); 
	} 
	}; 
handleChange = (prop) => (event) => {
  // setValues({ ...values, [prop]: event.target.value });
  this.setState({
    ...this.state,
    [prop]: event.target.value,
  });
};

submit=()=>{
  
  // console.log(this.state);
  console.log(this.props.temp.tid,this.props.temp.mode,this.state.selectedFile,this.state.name);
  this.props.upload_your_file(this.props.temp.tid,this.props.temp.mode,this.state.selectedFile,this.state.name);
  // this.props.update_data(this.state);
}

render() {

  // const classes = useStyles();


    return (
    <div>
<br/>
<br/>
<br/>
{
        // this.props.register_.success ?
        this.props.file_uploaded.status=='success' ?
        <span>
          {/* {this.props.save_id(this.props.loggedin.uid)} */}
        <Redirect to="/DashBoard" />
        </span>
        :
        
<Grid container>
  {this.props.file_uploaded.status}
  <Grid item lg={4} md={4} sm={2} xs={2} >
  </Grid>

  <Grid item lg={4} md={4} sm={8} xs={8} >

        {/* <Post/> */}
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="share your exp"
            defaultValue={this.state.name}
            autoFocus
            onChange={this.handleChange('name')}
            />

<div> 
				<input type="file" onChange={this.onFileChange} /> 
				{/* <button onClick={this.onFileUpload}> 
				Upload! 
				</button>  */}
			</div> 
		{this.fileData()} 

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
  <Grid item lg={4} md={4} sm={2} xs={2} >
  </Grid>
  </Grid>
    
    }
    </div>
        );
        }

    }

    const mapStateToProps = state => ({
      temp: state.data.temp,
      file_uploaded: state.data.file_uploaded,

      // newPost: state.posts.item
      
    });

    export default connect(mapStateToProps,{upload_your_file})(Post_wra);