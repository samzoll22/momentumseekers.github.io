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
            <Button block size="lg" style={{height: "20vh"}} variant="danger" >Take Action</Button>
            <Button block size="lg" style={{height: "20vh", marginTop: "30px"}} variant="outline-primary">Find Information</Button>
        </div>
    )
  }
}

export default Quiz;