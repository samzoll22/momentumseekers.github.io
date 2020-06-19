import React from 'react';
import MissionStatement from './MissionStatement.jsx';
import TakeAction from './TakeAction.jsx';
import LearnMore from './LearnMore.jsx';
import RegisterToVote from './RegisterToVote.jsx';
import Petition from './Petition.jsx';
import Volunteer from './Volunteer.jsx';
import Donate from './Donate.jsx';
import HelpfulOrganizations from './OrgList.jsx';
import SecureMessaging from './SecureMessaging.jsx';
import Movies from './Movies.jsx';
import Podcasts from './Podcasts.jsx';
import { Navbar, Container, Row, Col, Button } from 'react-bootstrap';

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
                                <Button value="takeAction" onClick={this.handleStateChange} block size="lg" style={{height: "15vh", fontFamily: 'Coustard, serif', fontSize: "2.5rem"}} variant="warning" >Take Action ✊🏿</Button>
                                <Button value="learnMore" onClick={this.handleStateChange} block size="lg" style={{height: "15vh", fontFamily: 'Coustard, serif', marginTop: "30px", fontSize: "2.5rem"}} variant="warning">Learn More 📚</Button>
                            </Col>
                        </Row>
                        <Row style={{marginBottom: "40px", marginTop: "40px"}}>
                            <Col>
                                <p style={{fontFamily: 'Permanent Marker, cursive', textAlign: "center", color: "#fff"}}>Made with ❤️ in Chicago, DC & NYC</p>
                            </Col>
                        </Row>
                    </Container>

        const quizComponent = (state) => {
            switch(this.state.currentPage) {

            case "homePage":   return homePage;
            case "takeAction":   return <TakeAction handleStateChange={this.handleStateChange}/>;
            case "learnMore":   return <LearnMore handleStateChange={this.handleStateChange}/>;
            case "registerToVote": return <RegisterToVote handleStateChange={this.handleStateChange} />
            case "petition": return <Petition handleStateChange={this.handleStateChange} />
            case "volunteer": return <Volunteer handleStateChange={this.handleStateChange} />
            case "donate": return <Donate handleStateChange={this.handleStateChange} />
            case "secureMessaging": return <SecureMessaging handleStateChange={this.handleStateChange} />
            case "helpfulOrganizations": return <HelpfulOrganizations handleStateChange={this.handleStateChange} />
            case "movies": return <Movies handleStateChange={this.handleStateChange} />
            case "podcasts": return <Podcasts handleStateChange={this.handleStateChange} />
            default: return homePage;
            }
        }

    return (
          <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand style={{fontFamily: 'Permanent Marker, cursive', fontSize: "2em"}} value="homePage" onClick={this.handleStateChange}>
                    <img
                    alt="momentum seekers logo"
                    src="https://zollstorage.s3-us-west-1.amazonaws.com/momentum+seekers/momentum+seekers+logo+%40+200px.png"
                    width="32"
                    height="32"
                    />{' '}
                    momentum seekers
                </Navbar.Brand>
            </Navbar>

            {
                this.state.currentPage ? quizComponent() : homePage
            }
          </div>
    )
  }
}

export default Quiz;