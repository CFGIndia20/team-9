import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class adminDashboard extends Component {
    constructor(props){
        super(props);
        this.state={

        };
    }
    render() {
        return (
            <div>
                <Container fluid>
                    <ButtonGroup aria-label="Basic example">
                    <Link to="/AdminDashboard/assigntask">
                        <Button variant="" style={{margin:'50px',background:'#9e1f5f',color:'white'}}>Assign Task</Button>
                    </Link>
                    <Link to="/AdminDashboard/assignhomework">
                        <Button variant="" style={{margin:'50px',background:'#9e1f5f',color:'white'}}>Assign HomeWork</Button>
                        </Link>
                    </ButtonGroup>
                </Container>
            </div>
        )
    }
}

export default adminDashboard
