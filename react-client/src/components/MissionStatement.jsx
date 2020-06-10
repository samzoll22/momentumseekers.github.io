import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const MissionStatement = (props) => (
    
    <Jumbotron style={{marginTop: "20px", backgroundColor: "#2b2b2b"}} >
        <p style={{color: "#ffffff", fontFamily: 'Coustard, serif'}} >
            We love the enthusiasm of info online, but found it difficult to sort through it all, so we created a site of useful information and resources on issues of racial injustice.
        </p>
        <p>
            <Button variant="outline-light" style={{fontFamily: 'Coustard, serif'}}>About Us</Button>
        </p>
    </Jumbotron>
)

export default MissionStatement;