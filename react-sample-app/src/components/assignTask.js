import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export class AssignTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            date:'',
            description:'',
            deadline:'',
            quantity:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        alert('Task was submitted: ' + this.state.task);
    }

    render() {
        return (
            <div>
                <Container>
                <div>`</div>
                <Form onSubmit={()=>this.handleSubmit()}>
                    <Form.Group>
                        <Form.Label>Task:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Task" />
                        <Form.Text className="text-muted">
                        Enter the title of the task
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
                        Enter the description of the task
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Deadline:</Form.Label>
                        <Form.Control type="date" placeholder="Enter Deadline" />
                        <Form.Text className="text-muted">
                        Enter the deadline of the task
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Quantity:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Quantity" />
                        <Form.Text className="text-muted">
                        Enter the quantity of the product
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>To:</Form.Label>
                        <Form.Control type="text" placeholder="Assign task to ..." />
                        <Form.Text className="text-muted">
                        Enter whom you want to assign the task
                        </Form.Text>
                    </Form.Group>

                    <Button type="submit">
                        Submit
                    </Button>
                </Form>
                </Container>
            </div>
        )
    }
}


export default AssignTask;