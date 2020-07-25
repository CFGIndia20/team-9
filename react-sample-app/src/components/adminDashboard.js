import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';

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
                        <Button variant="primary" style={{margin:'50px'}}>Assign Task</Button>
                        <Button variant="primary" style={{margin:'50px'}}>Assign HomeWork</Button>
                    </ButtonGroup>
                </Container>
            </div>
        )
    }
}

export default adminDashboard
