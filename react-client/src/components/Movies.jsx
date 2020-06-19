import React from 'react';
import movieData from '../assets/movies.js'
import { Table, Container, Row, Col, Button, CardColumns, Card, Image } from 'react-bootstrap';

const Movie = (props) => (
    <Container>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <h2 style={{fontFamily: 'Permanent Marker, cursive', textAlign: "center", color: "#fff"}}>Movies 🎥</h2>
            </Col>
        </Row>
        <Row>
            <Col>
                <CardColumns>
                { 
                            movieData.map((movie, i) => {
                                return(
                                    <Card key={i} bg="dark" text="white">
                                        <Card.Img variant="top" src={`${movie.imageURL}`} />
                                        <Card.Body>
                                        <Card.Title style={{fontFamily: 'Coustard, serif'}}>{movie.Title}</Card.Title>
                                        <Card.Text>
                                            <Row>
                                                <Col>
                                                    <p style={{fontFamily: 'Coustard, serif', fontSize: ".7rem"}}>{`${movie.Genre}  ${movie.Year}`}</p>
                                                </Col>
                                                <Col>
                                                    <p style={{fontFamily: 'Coustard, serif', fontSize: ".7rem"}}>{`Directed by ${movie.Director}`}</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Button href={movie.URL1} block style={{fontFamily: 'Coustard, serif'}} variant="warning" >{movie.Site1}</Button>
                                                </Col>
                                            {movie.URL2 && <Col><Button href={movie.URL2} block style={{fontFamily: 'Coustard, serif'}} variant="warning" >{movie.Site2}</Button></Col>}
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

export default Movie;