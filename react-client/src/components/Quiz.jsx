import React from 'react';
import MissionStatement from './MissionStatement.jsx';
import { Container, Row, Col, Button } from 'react-bootstrap';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentPage: "homePage"
    }

    this.handleStateChange = this.handleStateChange.bind(this);
  }

  componentDidMount() {
      this.setState({
          currentPage: "homePage"
      })

  }

  handleStateChange(e) {
    this.setState({
        currentPage: e.target.value
    })
  }

  render () {
        const homePage = <Container>
                        <Row>
                            <Col>
                                <MissionStatement />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2 style={{fontFamily: 'Permanent Marker, cursive', textAlign: "center", color: "#fff"}}>How can you help?</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button value="takeAction" onClick={this.handleStateChange} block size="lg" style={{height: "20vh", fontFamily: 'Coustard, serif'}} variant="warning" ><h1>Take Action ✊🏿</h1></Button>
                                <Button value="learnMore" onClick={this.handleStateChange} block size="lg" style={{height: "20vh", fontFamily: 'Coustard, serif', marginTop: "30px"}} variant="outline-light"><h1>Learn More 📚</h1></Button>
                            </Col>
                        </Row>
                    </Container>

        const takeAction = <Container>
                                <Row style={{marginTop: "30px"}}>
                                    <Col>
                                        <h2 style={{fontFamily: 'Permanent Marker, cursive', textAlign: "center", color: "#fff"}}>Take Action</h2>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: "30px"}}>
                                    <Col>
                                        <Button value="registerToVote" onClick={this.handleStateChange} block size="lg" style={{height: "20vh", fontFamily: 'Coustard, serif'} } variant="warning" >Register To Vote ✍🏿</Button>
                                    </Col>
                                    <Col>
                                        <Button value="volunteer" onClick={this.handleStateChange} block size="lg" style={{height: "20vh", fontFamily: 'Coustard, serif'}} variant="outline-light">Volunteer 🙌</Button>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: "30px"}}>
                                    <Col>
                                        <Button value="petition" onClick={this.handleStateChange} block size="lg" style={{height: "20vh", fontFamily: 'Coustard, serif'}} variant="warning" >Petition ✊🏿</Button>
                                    </Col>
                                    <Col>
                                        <Button value="donate" onClick={this.handleStateChange} block size="lg" style={{height: "20vh", fontFamily: 'Coustard, serif'}} variant="outline-light">Donate 💸</Button>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: "30px"}}>
                                    <Col>
                                        <Button value="homePage" onClick={this.handleStateChange} block style={{height: "5vh", fontFamily: 'Coustard, serif'}} variant="warning" >Home</Button>
                                    </Col>
                                </Row>
                            </Container>

        const learnMore = <Container>
                                <Row style={{marginTop: "30px"}}>
                                    <Col>
                                        <h2 style={{fontFamily: 'Permanent Marker, cursive', textAlign: "center", color: "#fff"}}>Learn More</h2>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: "30px"}}>
                                    <Col>
                                        <Button value="language" onClick={this.handleStateChange} block size="lg" style={{height: "20vh", fontFamily: 'Coustard, serif'} } variant="warning" >Racial Insensitive Language 🤬</Button>
                                    </Col>
                                    <Col>
                                        <Button value="classes" onClick={this.handleStateChange} block size="lg" style={{height: "20vh", fontFamily: 'Coustard, serif'}} variant="outline-light">Classes 🧑🏿‍🏫</Button>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: "30px"}}>
                                    <Col>
                                        <Button value="books" onClick={this.handleStateChange} block size="lg" style={{height: "20vh", fontFamily: 'Coustard, serif'}} variant="warning" >Books📚</Button>
                                    </Col>
                                    <Col>
                                        <Button value="movies" onClick={this.handleStateChange} block size="lg" style={{height: "20vh", fontFamily: 'Coustard, serif'}} variant="outline-light">Movies 🎥</Button>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: "30px"}}>
                                    <Col>
                                        <Button value="podcasts" onClick={this.handleStateChange} block size="lg" style={{height: "20vh", fontFamily: 'Coustard, serif'}} variant="warning" >Podcasts 🎤</Button>
                                    </Col>
                                    <Col>
                                        <Button value="memes" onClick={this.handleStateChange} block size="lg" style={{height: "20vh", fontFamily: 'Coustard, serif'}} variant="outline-light">Memes 👻</Button>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: "30px"}}>
                                    <Col>
                                        <Button value="homePage" onClick={this.handleStateChange} block style={{height: "5vh", fontFamily: 'Coustard, serif'}} variant="warning" >Home</Button>
                                    </Col>
                                </Row>
                            </Container>

        const quizComponent = (state) => {
            switch(this.state.currentPage) {

            case "homePage":   return homePage;
            case "takeAction":   return takeAction;
            case "learnMore":   return learnMore;
            default: return homePage;
            }
        }

    return (
          <div>
              {
                  this.state.currentPage && quizComponent()
              }
          </div>
    )
  }
}

export default Quiz;