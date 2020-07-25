import React from 'react';
import classe from './Post.module.css';
import { Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

function FileUpload() {
    return (
       <Container>
                <Row>
                    <label > Select File : </label>
                    <input type="file" name="upload_file"/>
                </Row>
                
                <Row>
                    <Button type="submit" variant="secondary" style={{margin:'20px',background:'#9e1f5f',color:'white'}}>
                        Submit
                    </Button>
                </Row>
        </Container>
    );
}

export default FileUpload;