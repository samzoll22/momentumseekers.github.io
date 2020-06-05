import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Navbar, Jumbotron, Button, Card, Accordion, Badge } from 'react-bootstrap';
// import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {

  }

  render () {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            the movement
          </Navbar.Brand>
        </Navbar>
        <Container>
          <Jumbotron style={{marginTop: "20px"}} >
            <h1>Mission</h1>
            <p>
              This is where the mission statement will go once C finishes it and we get move input.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
          <h1>
            What can I do? <h4><Badge variant="danger">Updated June 4!</Badge></h4>
          </h1>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Calling / Emailing Representatives
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>where stuff goes </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Donations
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>where stuff goes</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Petitions
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>where stuff goes</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));