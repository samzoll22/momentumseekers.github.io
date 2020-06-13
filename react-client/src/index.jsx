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
            <img
              alt="momentum seekers logo"
              src="https://zollstorage.s3-us-west-1.amazonaws.com/momentum+seekers/momentum+seekers+logo+%40+200px.png"
              width="30"
              height="30"
              // className="d-inline-block align-top"
            />{' '}
            momentum seekers
          </Navbar.Brand>
        </Navbar>
        <Quiz />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));