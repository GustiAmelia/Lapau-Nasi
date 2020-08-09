import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Header extends Component {
  
  state={

  }

  render() {
    return(
      <>  
        <Container fluid={true}>
            <Row>
                <Col><img src={process.env.PUBLIC_URL +'./images/menu (1).png'} alt="mecuIcon"/></Col>
                <Col><h1 className='fontTitle'>Food Items</h1></Col>
                <Col><img src={process.env.PUBLIC_URL +'./images/magnifying-glass.png'} alt="" className='float-right'/></Col>
            </Row>
        </Container>
    </>
    );
  }
}
 
export default Header;