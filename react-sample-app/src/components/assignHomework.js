import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export class AssignHomework extends Component {
    constructor(props) {
        super(props);
        this.state = {
            HomeWork: '',
            date:'',
            description:'',
            deadline:'',
            quantity:'',
            to:'',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        alert('HomeWork was submitted: ' + this.state.task);
    }

    render() {
        return (
            <div>
                <Container>
                <div>`</div>
                <Form onSubmit={()=>this.handleSubmit()}>
                    <Form.Group>
                        <Form.Label>HomeWork:</Form.Label>
                        <Form.Control type="text" placeholder="Enter HomeWork" />
                        <Form.Text className="text-muted">
                        Enter the title of the homework
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Date:</Form.Label>
                        <Form.Control type="date" placeholder="Enter Date" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description:</Form.Label>
                        <Form.Control type="textfield" placeholder="Enter description" />
                        <Form.Text className="text-muted">
                        Enter the description of the homework
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Deadline:</Form.Label>
                        <Form.Control type="date" placeholder="Enter Deadline" />
                        <Form.Text className="text-muted">
                        Enter the deadline of the homework
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>To:</Form.Label>
                        <Form.Control type="text" placeholder="Assign homework to ..." />
                        <Form.Text className="text-muted">
                        Enter whom you want to assign the homework
                        </Form.Text>
                    </Form.Group>

                    <Button type="submit" variant="secondary" style={{background:'#9e1f5f',color:'white'}}>
                        Submit
                    </Button>
                </Form>
                </Container>
            </div>
        )
    }
}


export default AssignHomework;