import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Card, Accordion, Badge, Button } from 'react-bootstrap';
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
        <Quiz />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));