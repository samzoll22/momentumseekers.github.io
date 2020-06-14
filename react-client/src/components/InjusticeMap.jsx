import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


const InjusticeMap = (props) => (
    
    <Container>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <h2 style={{fontFamily: 'Permanent Marker, cursive', textAlign: "center", color: "#fff"}}>Injustice Map</h2>
            </Col>
        </Row>
        <Row style={{marginTop: "30px"}}>
            <Col>
                {/* <h5 style={{fontFamily: 'Coustard, serif', color: "#fff"}}>Get Involved with Black Lives Matters ATL</h5> */}
                {/* <iframe width='100' height='70' src='http://www.justicemap.org/index.php?giIframe=1'> </iframe>
                 */}
  
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

export default InjusticeMap;