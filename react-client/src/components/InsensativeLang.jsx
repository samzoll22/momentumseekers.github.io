import React from 'react';
// import termData from '../assets/insensativeLang.js'
import { Table, Container, Row, Col, Button } from 'react-bootstrap';

const InsensativeLang = (props) => (
    <Container>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <h2 style={{fontFamily: 'Permanent Marker, cursive', textAlign: "center", color: "#fff"}}>Racially Insensitive Language 🤬</h2>
            </Col>
        </Row>
        <Row>
            <Col>
                <Table responsive size="sm" style={{color: "#fff", marginTop: "20px", fontFamily: 'Coustard, serif'}}>
                    <thead>
                        <tr>
                            <th>Slur</th>
                            <th>Reason & Origin</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            termData.map((term, i) => {
                                return(
                                    <tr key={i}>
                                        <td style={{fontSize:".9rem"}} >{term.Slur}</td>
                                        <td style={{fontSize:".7rem"}}>{term.Reason}</td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </Table>
            </Col>
        </Row>
        <Row>
            <Col>
                <Button block variant="outline-warning" href="http://www.rsdb.org/race/blacks">Source</Button>
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

export default InsensativeLang;