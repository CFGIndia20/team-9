import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { create_pro,aas,aaw } from '../actions/postActions';
export class AssignTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            date:'',
            description:'',
            deadline:'',
            quantity:'',
            to:'',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange=this.handleChange.bind(this);

    }

    handleChange = (prop) => (event) => {
        // setValues({ ...values, [prop]: event.target.value });
        this.setState({
          ...this.state,
          [prop]: event.target.value,
        });
      };
    handleSubmit() {
        // alert('Task was submitted: ' + this.state.task);

        // event.preventDefault();
        console.log(this.state);
        // this.props.aas(this.state);
//   console.log(event.target.elements.username.value);
  alert(this.state);
    }

    render() {
        return (
            <div>
                <Container>
                <div>`</div>
                {/* onSubmit={()=>this.handleSubmit()} */}
                <Form onSubmit={()=>this.handleSubmit()}>
                    <Form.Group>
                        <Form.Label>Task:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Task" onChange={this.handleChange('task')} />
                        <Form.Text className="text-muted">
                        Enter the title of the task
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Date:</Form.Label>
                        <Form.Control type="date" placeholder="Enter Date" onChange={this.handleChange('date')}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description:</Form.Label>
                        <Form.Control type="textfield" placeholder="Enter description" onChange={this.handleChange('description')} />
                        <Form.Text className="text-muted">
                        Enter the description of the task
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Deadline:</Form.Label>
                        <Form.Control type="date" placeholder="Enter Deadline" onChange={this.handleChange('deadline')} />
                        <Form.Text className="text-muted">
                        Enter the deadline of the task
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Quantity:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Quantity" onChange={this.handleChange('quantity')} />
                        <Form.Text className="text-muted">
                        Enter the quantity of the product
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>To:</Form.Label>
                        <Form.Control type="text" placeholder="Assign task to ..." onChange={this.handleChange('to')} />
                        <Form.Text className="text-muted">
                        Enter whom you want to assign the task
                        </Form.Text>
                    </Form.Group>

                    <Button onClick={this.handleSubmit} variant="secondary" style={{background:'#9e1f5f',color:'white'}}>
                        Submit
                    </Button>
                </Form>
                </Container>
            </div>
        )
    }
}


// export default AssignTask;
const mapStateToProps = state => ({
    profile_created: state.data.profile_created,
  // newPost: state.posts.item
  
});

export default connect(mapStateToProps,{aas,aaw})(AssignTask);