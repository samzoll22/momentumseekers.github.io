import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Navbar, Row, Col, Card, Accordion, Badge, Button } from 'react-bootstrap';
import Quiz from './components/Quiz.jsx';

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
          <Navbar.Brand style={{fontFamily: 'Permanent Marker, cursive', fontSize: "2em"}}>
            momentum seekers
          </Navbar.Brand>
        </Navbar>
        <Quiz />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));