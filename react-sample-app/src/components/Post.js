import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import classe from './Post.module.css';
import FileUpload from './FileUpload';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(3),
        width: '100%',
      },
    },
  }));

function Post(props) {

    const classes = useStyles();
    const [value,setValue] = useState("");
    const handleChange = (event) => {
      console.log(event.target.value);
        setValue(event.target.value);
    }

        return (
            <div className={classe.border}>
            <form className={classes.root}>
            <div className = {classe.left}>
              <TextField
                  id="standard-multiline-textfield"
                  multiline
                  rows={4}
                  value={value}
                  onChange={handleChange}
                  placeholder="Enter your experience"/>
            </div>
            <div>
                <FileUpload/>
            </div>
            </form>
            </div>
        )
    
}

export default Post;

