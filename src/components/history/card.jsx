import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Card extends Component {
  state = {  }
  render() { 
    return (
      <Container fluid={true}>
        <Row className='card-wrapper'>
          <Col sm='6' md='4'>
            <div className="card">
              <div className="card-content">
                <h6>Today's Income</h6>
                <h5>RP.1.000.000</h5>
                <h6>+2% Yesterday</h6>
              </div>
              <div className="buble1" Style="left:80%; top:5%;"></div>
              <div className="buble1" Style="left:66%; top:18%;"></div>
              <div className="buble1" Style="left:72%; top:12%;"></div>
            </div>
          </Col>
          <Col sm='6' md='4'>
            <div className="card">
              <div className="card-content">
                <h6>Today's Income</h6>
                <h5>RP.1.000.000</h5>
                <h6>+2% Yesterday</h6>
              </div>
              <div className="buble1" Style="left:80%; top:5%;"></div>
              <div className="buble1" Style="left:66%; top:18%;"></div>
              <div className="buble1" Style="left:72%; top:12%;"></div>
            </div>
          </Col>
          <Col sm='6' md='4'>
            <div className="card">
              <div className="card-content">
                <h6>Today's Income</h6>
                <h5>RP.1.000.000</h5>
                <h6>+2% Yesterday</h6>
              </div>
              <div className="buble1" Style="left:80%; top:5%;"></div>
              <div className="buble1" Style="left:66%; top:18%;"></div>
              <div className="buble1" Style="left:72%; top:12%;"></div>
            </div>
          </Col>
        </Row>
      </Container>
      
    );
  }
}
 
export default Card;