import React from 'react';
import donateData from '../assets/donate.js'
import { Container, Row, Col, Button } from 'react-bootstrap';

const Donate = (props) => (
    
    <Container>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <h2 style={{fontFamily: 'Permanent Marker, cursive', textAlign: "center", color: "#fff"}}>Donate 💸</h2>
            </Col>
        </Row>
        { 
                            donateData.map((donation, i) => {
                                return(
                                <Row key={i} style={{marginTop: "30px"}}>
                                    <Col>
                                        <h5 style={{fontFamily: 'Coustard, serif', color: "#fff"}}>{donation.Name}</h5>
                                        <p style={{fontFamily: 'Coustard, serif', color: "#fff"}}>{donation.Description}</p>
                                        <Row>
                                            <Col>
                                                <Button href={donation.HomeURL} block size="lg" style={{height: "5vh", fontFamily: 'Coustard, serif'} } variant="warning" >Check It Out</Button>
                                            </Col>
                                            <Col>
                                                <Button href={donation.DonateURL} block size="lg" style={{height: "5vh", fontFamily: 'Coustard, serif'} } variant="warning" >Donate Now</Button>
                                            </Col>
                                        </Row>
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

export default Donate;