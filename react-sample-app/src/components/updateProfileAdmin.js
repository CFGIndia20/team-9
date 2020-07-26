import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

export class updateProfileAdmin extends Component {
    constructor(props){
        super(props);
        this.state={
            user:"",
        };
    }
    render() {
        return (
            <div>
                <Form onSubmit={()=>this.handleSubmit()}>
                    <Form.Group>
                        <Form.Label>Enter skills of the user:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Task" />
                        <Form.Text className="text-muted">
                        Enter the avaiability
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

export default updateProfileAdmin
