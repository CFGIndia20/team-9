import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import classe from './Post.module.css';
import FileUpload from './FileUpload';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(3),
        width: '100ch',
      },
    },
  }));

function Post(props) {

    const classes = useStyles();
    const [value,setValue] = useState("");
    const handleChange = (event) => {
        setValue(event.target.value);
    }

        return (
          <Container>
            <Row>
            <Form className={classes.root}>
            <Row>
              <TextField
                  id="standard-multiline-textfield"
                  multiline
                  rows={4}
                  value={value}
                  onChange={handleChange}
                  placeholder="Enter your experience"/>
            </Row>
            <Row>
                <FileUpload/>
                </Row>
            </Form>
            </Row>
        </Container>
        )
    
}

export default Post;

