import React from 'react';
import { Row, Col } from 'reactstrap';
import menu from '../../images/menu.png';

const Header=()=>{
  return(
    <Row>
      <Col sm='1' md='1' lg='1' xl='1'><img src={menu} alt="mecuIcon"/></Col>
      <Col><h1 className='fontTitle'>History</h1></Col>
    </Row>
  );
}
 
export default Header;