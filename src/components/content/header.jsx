import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import menu from '../../images/menu.png';
import magnifying from '../../images/magnifying-glass.png';

const Header=()=>{
    return(
      <>  
        <Container fluid={true}>
            <Row>
                <Col><img src={menu} alt="mecuIcon"/></Col>
                <Col><h1 className='fontTitle'>Food Items</h1></Col>
                <Col><img src={magnifying} alt="" className='float-right'/></Col>
            </Row>
        </Container>
    </>
    );
}
 
export default Header;