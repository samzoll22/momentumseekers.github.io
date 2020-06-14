import React from 'react';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';

const LearnMore = (props) => (
    
    <Container>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <h2 style={{fontFamily: 'Permanent Marker, cursive', textAlign: "center", color: "#fff"}}>Learn More</h2>
            </Col>
        </Row>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <Alert variant="dark" style={{fontFamily: 'Coustard, serif'}}>
                    Work in progress  🚧  check back soon!
                </Alert>
            </Col>
        </Row>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <Button value="helpfulOrganizations" onClick={props.handleStateChange}  block size="lg" style={{height: "16vh", fontFamily: 'Coustard, serif'} } variant="warning" >Orgs Taking Charge 👏🏿</Button>
            </Col>
            <Col>
                <Button value="secureMessaging" onClick={props.handleStateChange} block size="lg" style={{height: "16vh", fontFamily: 'Coustard, serif'}} variant="outline-light">Secure Messaging 🔒</Button>
            </Col>
        </Row>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <Button disabled value="books" onClick={props.handleStateChange} block size="lg" style={{height: "16vh", fontFamily: 'Coustard, serif'}} variant="outline-light" >Books 📚</Button>
            </Col>
            <Col>
                <Button disabled value="movies" onClick={props.handleStateChange} block size="lg" style={{height: "16vh", fontFamily: 'Coustard, serif'}} variant="warning">Movies 🎥</Button>
            </Col>
        </Row>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <Button disabled value="podcasts" onClick={props.handleStateChange} block size="lg" style={{height: "16vh", fontFamily: 'Coustard, serif'}} variant="warning" >Podcasts 🎤</Button>
            </Col>
            <Col>
                <Button disabled value="memes" onClick={props.handleStateChange} block size="lg" style={{height: "16vh", fontFamily: 'Coustard, serif'}} variant="outline-light">Memes 👻</Button>
            </Col>
        </Row>
        <Row style={{marginTop: "30px", marginBottom: "40px"}}>
            <Col>
                <Button value="homePage" onClick={props.handleStateChange} block style={{height: "5vh", fontFamily: 'Coustard, serif'}} variant="outline-light" >Home 🏡</Button>
            </Col>
        </Row>
    </Container>
)

export default LearnMore;