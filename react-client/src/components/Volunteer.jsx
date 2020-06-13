import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Volunteer = (props) => (
    
    <Container>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <h2 style={{fontFamily: 'Permanent Marker, cursive', textAlign: "center", color: "#fff"}}>Volunteer 🙌🏿</h2>
            </Col>
        </Row>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <h5 style={{fontFamily: 'Coustard, serif', color: "#fff"}}>Get Involved with Black Lives Matters ATL</h5>
                <Button href="https://www.brightest.io/cause/black-lives-matter/activity/get-involved-with-black-lives-matters-atl/" block size="lg" style={{height: "5vh", fontFamily: 'Coustard, serif'} } variant="outline-warning" >Volunteer</Button>
            </Col>
        </Row>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <h5 style={{fontFamily: 'Coustard, serif', color: "#fff"}}>Get Involved with Black Lives Matter Boston</h5>
                <Button href="https://www.brightest.io/cause/black-lives-matter/activity/get-involved-with-black-lives-matter-boston/" block size="lg" style={{height: "5vh", fontFamily: 'Coustard, serif'} } variant="outline-warning" >Volunteer</Button>
            </Col>
        </Row>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <h5 style={{fontFamily: 'Coustard, serif', color: "#fff"}}>Get Involved with Black Lives Matter Chicago</h5>
                <Button href="https://www.brightest.io/cause/black-lives-matter/activity/get-involved-with-black-lives-matter-chicago/" block size="lg" style={{height: "5vh", fontFamily: 'Coustard, serif'} } variant="outline-warning" >Volunteer</Button>
            </Col>
        </Row>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <h5 style={{fontFamily: 'Coustard, serif', color: "#fff"}}>Volunteer & Get Involved with Black Lives Matter Vermont</h5>
                <Button href="https://www.brightest.io/cause/black-lives-matter/activity/volunteer-get-involved-with-black-lives-matter-vermont/" block size="lg" style={{height: "5vh", fontFamily: 'Coustard, serif'} } variant="outline-warning" >Volunteer</Button>
            </Col>
        </Row>
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

export default Volunteer;