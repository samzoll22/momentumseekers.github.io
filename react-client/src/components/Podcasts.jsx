import React from 'react';
import podcastData from '../assets/podcasts.js'
import { Container, Row, Col, Button, CardColumns, Card} from 'react-bootstrap';

const Podcasts = (props) => (
    <Container>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <h2 style={{fontFamily: 'Permanent Marker, cursive', textAlign: "center", color: "#fff"}}>Podcasts 🎤</h2>
            </Col>
        </Row>
        <Row>
            <Col>
                <CardColumns>
                { 
                            podcastData.map((podcast, i) => {
                                return(
                                    <Card key={i} bg="dark" text="white">
                                        <Card.Img variant="top" src={`${podcast.imageURL}`} />
                                        <Card.Body>
                                        <Card.Title style={{fontFamily: 'Coustard, serif'}}>{podcast.Title}</Card.Title>
                                        <Card.Text>
                                            <Row>
                                                <Col>
                                                    <p style={{fontFamily: 'Coustard, serif', fontSize: ".7rem"}}>{`${podcast.Description}`}</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Button href={podcast.URL} block style={{fontFamily: 'Coustard, serif'}} variant="warning" >{podcast.Company}</Button>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                )
                            })
                        }
                    
                </CardColumns>
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

export default Podcasts;