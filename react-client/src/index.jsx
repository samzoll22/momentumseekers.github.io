import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Navbar, Jumbotron, Button } from 'react-bootstrap';
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
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
        </Container>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));