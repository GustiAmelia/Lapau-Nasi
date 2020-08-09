import React, { Component } from 'react';
import Axios from 'axios';
import Header from '../components/header';
import Menu from '../components/menu';
import LeftSideBar from '../components/leftSideBar';
import Cart from '../components/cart';
import { Container, Row, Col } from 'reactstrap';

class Home extends Component {
    constructor(){
        super()
        this.state ={
            menus : []
        }
    }
   
    

   componentDidMount =()=>{
       const urlString = 'http://localhost:7000/product';
       Axios.get(urlString)
       .then((res)=>{
           this.setState({
               menus : res.data.results
           })
       }).catch((err)=>{
           console.log(err)
       })
   }
    render() { 
      return (
        <Container fluid={true}>
          <Row>
            <Col md="8" lg="8" xl="8">
              <Row>
                <Col  className="headerItem">
                  <Header/>
                </Col>
              </Row>
              <Row>
                <Col md="1" lg="1" xl="1">
                  <LeftSideBar/>
                </Col>
                <Col xs="12" sm="12" md="11" lg="11" xl="11" >
                  <div className="card-menu">
                    {this.state.menus.map((menuitem)=>{
                      return(
                        <Menu
                          image ={process.env.PUBLIC_URL +`./images/${menuitem.images}`}
                          name = {menuitem.menu}
                          price ={`RP.${menuitem.price}`}
                        />
                      )
                    })}
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md="4" lg="4" xl="4" className="cart-item">
              <Cart/>
            </Col>
          </Row>
        </Container>
          
         
          
          
      );
    }
}
 
export default Home;