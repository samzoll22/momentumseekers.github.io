import React from 'react';
// import termData from '../assets/insensativeLang.js'
import { Table, Container, Row, Col, Button } from 'react-bootstrap';

const SecureMessaging = (props) => (
    <Container>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <h2 style={{fontFamily: 'Permanent Marker, cursive', textAlign: "center", color: "#fff"}}>Secure Messaging 🔒</h2>
            </Col>
        </Row>
        <Row style={{marginTop: "30px"}}>
            <Col style={{fontFamily: 'Coustard, serif', color: "#fff"}}>
                <h3>
                   Use Signal To Stay Safe and Secure
                </h3>
                <p>• Signal is incredibly secure, if your phone is taken by law enforcement (e.g. from protesting), they will not be able to access your data without you</p>
                <p>• Signal isn't owned by Facebook, Google, or Apple</p>
                <p>• Signal is cross-platform and doesn't mine your data for ad targeting</p>
                <p>• Signal is open-source and a nonprofit</p>
            </Col>
        </Row>
            <Col style={{fontFamily: 'Coustard, serif', color: "#fff", fontSize: ".7rem"}}>
                <p>FYI - we do not recieve any commision - this is strictly for privacy awareness</p>
            </Col>
        <Row>
        </Row>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <Button block style={{fontFamily: 'Coustard, serif'}} variant="warning" href="https://signal.org/en/download/">Download 📲</Button>
            </Col>
        </Row>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <Button block style={{fontFamily: 'Coustard, serif'}} variant="outline-light" href="https://www.fastcompany.com/90335034/if-you-value-your-privacy-switch-to-signal-as-your-messaging-app-now">Article Source</Button>
            </Col>
        </Row>
        <Row style={{marginTop: "20px", marginBottom: "40px"}}>
            <Col>
                <Button value="homePage" onClick={props.handleStateChange} block style={{height: "5vh", fontFamily: 'Coustard, serif'}} variant="outline-light" >Home 🏡</Button>
            </Col>
            <Col>
                <Button value="learnMore" onClick={props.handleStateChange} block style={{height: "5vh", fontFamily: 'Coustard, serif'}} variant="warning" >Learn More 📚</Button>
            </Col>
        </Row>
    </Container>
)

export default SecureMessaging;