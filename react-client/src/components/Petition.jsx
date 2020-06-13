import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Petition = (props) => (
    
    <Container>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <h2 style={{fontFamily: 'Permanent Marker, cursive', textAlign: "center", color: "#fff"}}>Petition ✊🏿</h2>
            </Col>
        </Row>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <h5 style={{fontFamily: 'Coustard, serif', color: "#fff"}}>Demand Racial Data on Coronavirus</h5>
                <p style={{fontFamily: 'Coustard, serif', color: "#fff"}}>We are losing our friends, family, and neighbors at unprecedented and disproportionate rates as COVID-19 tears through our communities.</p>
                <Button href="https://blacklivesmatter.com/demand-racial-data-on-coronavirus/" block size="lg" style={{height: "5vh", fontFamily: 'Coustard, serif'} } variant="warning" >Add Your Name</Button>
            </Col>
        </Row>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <h5 style={{fontFamily: 'Coustard, serif', color: "#fff"}}>Coronavirus: Demand More from the Government</h5>
                <p style={{fontFamily: 'Coustard, serif', color: "#fff"}}>At the current rate, the United States is at risk of experiencing not only a deadly healthcare crisis but one that has the potential to result in massive social, economic, and political upheaval as systems reach crisis points and begin to fracture.</p>
                <Button href="https://blacklivesmatter.com/coronavirus-demand-more-from-the-government/" block size="lg" style={{height: "5vh", fontFamily: 'Coustard, serif'}} variant="warning">Add Your Name</Button>
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

export default Petition;