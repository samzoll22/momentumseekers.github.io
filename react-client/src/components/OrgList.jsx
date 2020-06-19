import React from 'react';
import orgListData from '../assets/orgList.js'
import { Table, Container, Row, Col, Button, Image } from 'react-bootstrap';

const OrgList = (props) => (
    <Container>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <h2 style={{fontFamily: 'Permanent Marker, cursive', textAlign: "center", color: "#fff"}}>Organizations Taking Charge👏🏿</h2>
            </Col>
        </Row>
        <Row>
            <Col>
                <Table responsive size="sm" style={{color: "#fff", marginTop: "20px", fontFamily: 'Coustard, serif'}}>
                    <thead>
                        <tr>
                            <th style={{textAlign: "center"}}>Organization</th>
                            <th style={{textAlign: "center"}}>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            orgListData.map((org, i) => {
                                return(
                                    <tr key={i}>
                                        <td style={{textAlign: "center", fontSize:".9rem"}} ><Button href={org.Link} variant="outline-warning">{org.Title}</Button></td>
                                        <td style={{textAlign: "center", fontSize:".7rem"}}>{org.Description}</td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </Table>
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

export default OrgList;