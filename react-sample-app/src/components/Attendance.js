import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';


class Attendance extends Component {
    constructor(props){
        super(props);

        this.state={
            names:["Gauri","Udita","Riya","Tania","Shruti","Samiksha","Mridula","Janvi","Kamla","Anjana"],
            //names:this.props.names,
            buttons:true,
        }

    }

    toggleButtons = () => {
        this.setState({
            names:this.state.names,
            buttons:!this.state.buttons
        });
    }

    markPresent = () => {
        this.toggleButtons();
    }

    markAbsent = () => {
        this.toggleButtons();
    }

    render(){
        var items=[];
        console.log("Buttons state",this.state.buttons);
        if(!this.state.buttons){
            var retry=<Button className="float-right" variant="secondary" style={{margin:'10px'}} onClick={ this.toggleButtons } disabled={this.state.buttons} size="sm">R</Button>;
        }
        else{
            var retry=null;
        }
        for(let i in this.state.names){
            items.push(
                <Card style={{width:'250px', margin:'20px'}} key={i}>
                    <Card.Body>
                        <Card.Title>{this.state.names[i]}</Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                        <Row>
                            <Button variant="primary" style={{margin:'10px'}} onClick={ this.markPresent } disabled={!this.state.buttons} size="sm">Mark Present</Button>
                            {retry}
                            <Button variant="danger" style={{margin:'10px'}} onClick={ this.markAbsent } disabled={!this.state.buttons} size="sm">Mark Absent</Button>
                        </Row>
                    </Card.Body>
                </Card>
            );
        }
        return (
            <div>
                <Container fluid>
                    <Row>
                        {items}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Attendance
