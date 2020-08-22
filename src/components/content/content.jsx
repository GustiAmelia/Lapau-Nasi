import React, { Component } from 'react';
import Header from './header';
import Menu from './menu';
import LeftSideBar from './leftSideBar';
import { Container, Row, Col } from 'reactstrap';

class Content extends Component {

    render() { 
     
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
              {this.props.menus.map((menuitem,index)=>{
                return(
                  <Menu
                    key={menuitem.id}
                    image ={menuitem.images}
                    name = {menuitem.menu}
                    price ={`RP.${menuitem.price}`}
                    click ={()=>this.props.click(index)}
                    isCheckListOpen={this.props.isCheckListOpen}
                    index={index}
                  />
                )
              })}
            </Col>
          </Row>
        </Container>
              
        );
    }
}
 
export default Content;
