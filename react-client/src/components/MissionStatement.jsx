import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const MissionStatement = (props) => (
    
    <Jumbotron style={{marginTop: "20px", backgroundColor: "#2b2b2b"}} >
        {/* <p style={{color: "#ffffff", fontFamily: 'Coustard, serif', fontSize: "0.9rem", textAlign: "justify"}} > 
            We love the enthusiasm of info online, but found it difficult to sort through it all, so we created a site of useful information and resources on issues of racial injustice.  
        </p> */}
        <h2 style={{color: "#ffffff", fontFamily: 'Permanent Marker, cursive', textAlign: "Center"}} > 
            Momentum Is Essential
        </h2>
        {/* <p style={{color: "#ffffff", fontFamily: 'Coustard, serif', fontSize: "1rem", textAlign: "center"}} > 
            The most trusted source for movements and causes relating to racial and social injustice. 
        </p> */}
        <p style={{color: "#ffffff", fontFamily: 'Coustard, serif', fontSize: ".95rem", textAlign: "center"}} > 
        We love the enthusiasm of info online, so we created a site of useful information and resources on issues of racial injustice. 
        </p>
        {/* <p style={{textAlign: "center", fontSize:"2rem"}}>
            ✌🏿❤️
        </p> */}
        <p style={{color: "#ffc107", fontFamily: 'Coustard, serif', fontSize: ".85rem", textAlign: "center"}}>
            Repost On Your Story!
            <Button block style={{ fontFamily: 'Permanent Marker, cursive'}} variant="warning" href="https://zollstorage.s3-us-west-1.amazonaws.com/momentum+seekers/Momentum-Seekers-Story-v6-mobileDownload.png">Download Juneteeth #BLMChallenge</Button>
        </p>
    </Jumbotron>
)

export default MissionStatement;