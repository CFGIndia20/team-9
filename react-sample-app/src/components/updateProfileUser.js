import React, { Component } from 'react'
import { Button, Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

export class updateProfileUser extends Component {
    constructor(props){
        super(props);
        this.state={
            user:"",
        };
    }
    render() {
        return (
            <div>
                <Row>`</Row>
                <Form onSubmit={()=>this.handleSubmit()}>
                    <Form.Group>
                        <Form.Label>Avaiability for week:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Task" />
                        <Form.Text className="text-muted">
                        Enter the avaiability
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Location:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Task" />
                        <Form.Text className="text-muted">
                        Enter your location
                        </Form.Text>
                    </Form.Group>
                    
                </Form>
                <Button type="submit" variant="secondary" style={{background:'#9e1f5f',color:'white'}}>
                    Submit
                </Button>
            </div>
        )
    }
}

export default updateProfileUser
