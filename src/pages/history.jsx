import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../components/history/header';
import LeftSideBar from '../components/content/leftSideBar';
import Card from '../components/history/card';

class History extends Component {
  state = {  }
  render() { 
    return (
      <Container fluid={true}>
        <Row>
          <Col><Header/></Col>
        </Row>
        <Row>
          <Col md='1' lg='1' xl='1'><LeftSideBar/></Col>
          <Col><Card/></Col>
        </Row>
      </Container>
    );
  }
}
 
export default History;