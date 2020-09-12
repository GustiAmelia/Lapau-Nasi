import React from 'react';
import Header from './header';
import Menu from './menu';
import LeftSideBar from './leftSideBar';
import { Container, Row, Col } from 'reactstrap';

const Content =({menus,click})=>{
  return ( 
    <Container fluid={true}>
      <Row>
        <Col className="header">
            <Header/>
        </Col>
      </Row>
      <Row>
        <Col md="1">
            <LeftSideBar/>
        </Col>
        <Col className="card-menu">
          {menus.map((menu,index)=>{
            return(
              <Menu menu={menu} click={click} key ={menu.id}/>
            )
          })}
        </Col>
      </Row>
    </Container>    
  );  
}
 
export default Content;