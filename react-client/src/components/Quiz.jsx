import React from 'react';
import { Container, Button } from 'react-bootstrap';

class Quiz extends React.Component {
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
            <Button block size="lg" style={{height: "20vh", fontFamily: 'Coustard, serif'}} variant="warning" ><h1>Take Action</h1></Button>
            <Button block size="lg" style={{height: "20vh", fontFamily: 'Coustard, serif', marginTop: "30px"}} variant="outline-light"><h1>Learn More</h1></Button>
        </div>
    )
  }
}

export default Quiz;