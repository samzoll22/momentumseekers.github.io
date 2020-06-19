import React from 'react';
import petitionData from '../assets/petitions.js'
import { Container, Row, Col, Button } from 'react-bootstrap';

const Petition = (props) => (
    
    <Container>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <h2 style={{fontFamily: 'Permanent Marker, cursive', textAlign: "center", color: "#fff"}}>Petition ✊🏿</h2>
            </Col>
        </Row>
        { 
                            petitionData.map((petition, i) => {
                                return(
                                <Row key={i} style={{marginTop: "30px"}}>
                                    <Col>
                                        <h5 style={{fontFamily: 'Coustard, serif', color: "#fff"}}>{petition.Title}</h5>
                                        <p style={{fontFamily: 'Coustard, serif', color: "#fff"}}>{petition.Description}</p>
                                        <Button href={petition.Link} block size="lg" style={{height: "5vh", fontFamily: 'Coustard, serif'} } variant="warning" >Add Your Name</Button>
                                    </Col>
                                </Row>
                                )
                            })
                        }
        <Row style={{marginTop: "30px", marginBottom: "40px"}}>
            <Col>
                <Button value="homePage" onClick={props.handleStateChange} block style={{height: "5vh", fontFamily: 'Coustard, serif'}} variant="outline-light" >Home 🏡</Button>
            </Col>
            <Col>
                <Button value="takeAction" onClick={props.handleStateChange} block style={{height: "5vh", fontFamily: 'Coustard, serif'}} variant="warning" >Take Action ✊🏿</Button>
            </Col>
        </Row>
    </Container>
)

export default Petition;