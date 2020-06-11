import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const MissionStatement = (props) => (
    
    <Jumbotron style={{marginTop: "20px", padding: "2rem 2rem", backgroundColor: "#2b2b2b"}} >
        <p style={{color: "#ffffff", fontFamily: 'Coustard, serif', fontSize: "0.9rem", textAlign: "justify"}} > 
            We love the enthusiasm of info online, but found it difficult to sort through it all, so we created a site of useful information and resources on issues of racial injustice.  
        </p>
        <p style={{textAlign: "center"}}>
            <h2>✌🏿❤️ </h2>
        </p>
        {/* <p>
            <Button variant="outline-light" style={{fontFamily: 'Coustard, serif'}}>About Us</Button>
        </p> */}
    </Jumbotron>
)

export default MissionStatement;