import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const TakeAction = (props) => (
    
    <Container>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <h2 style={{fontFamily: 'Permanent Marker, cursive', textAlign: "center", color: "#fff"}}>Take Action</h2>
            </Col>
        </Row>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <Button value="registerToVote" onClick={props.handleStateChange} block size="lg" style={{height: "20vh", fontFamily: 'Coustard, serif'} } variant="warning" >Register To Vote ✍🏿</Button>
            </Col>
            <Col>
                <Button value="volunteer" onClick={props.handleStateChange} block size="lg" style={{height: "20vh", fontFamily: 'Coustard, serif'}} variant="warning">Volunteer 🙌🏿</Button>
            </Col>
        </Row>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <Button value="petition" onClick={props.handleStateChange} block size="lg" style={{height: "20vh", fontFamily: 'Coustard, serif'}} variant="warning" >Petition ✊🏿</Button>
            </Col>
            <Col>
                <Button value="donate" onClick={props.handleStateChange} block size="lg" style={{height: "20vh", fontFamily: 'Coustard, serif'}} variant="warning">Donate 💸</Button>
            </Col>
        </Row>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <Button value="homePage" onClick={props.handleStateChange} block style={{height: "5vh", fontFamily: 'Coustard, serif'}} variant="outline-light" >Home 🏡</Button>
            </Col>
        </Row>
    </Container>
)

export default TakeAction;