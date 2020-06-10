import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const MissionStatement = (props) => (
    
    <Jumbotron style={{marginTop: "20px", backgroundColor: "#2b2b2b"}} >
        <h1 style={{color: "#ffffff"}}>Mission</h1>
        <p style={{color: "#ffffff"}} >
            This is where the mission statement will go once C finishes it and we get move input.
        </p>
        <p>
            <Button variant="outline-primary">Learn more</Button>
        </p>
    </Jumbotron>
)

export default MissionStatement;