import React, { Component } from 'react';
import Counter from './counter-cart';
import { Container, Row, Col } from 'reactstrap';


class ContentCart extends Component {
  state = {  }
  render() { 
    const{choosedMenu}=this.props
    return ( 
      <div>
        {
          choosedMenu.length ? choosedMenu.map(item => {
            return (
              <>
                <Container fluid={true}>
                  <Row className="content-cart">
                    <Col className="img-cart"><img src={item.images} alt=""/></Col>
                    <Col>
                      <Row>
                        <Col><p>{item.menu}</p></Col>
                      </Row>
                      <Row>
                        <Col><Counter/></Col>
                      </Row>
                    </Col>
                    <Col><p>{`Rp.${item.price}`}</p></Col>
                  </Row>
                </Container> 
              </>
            )
          })
           : <div className="noCart">
            <img src={process.env.PUBLIC_URL + './images/food-and-restaurant.png'} alt=""/>
            <h5>Your cart is empty</h5>
            <p>Please add some items from the menu</p>
        </div>
        }
        {choosedMenu.length ?
        <div>
          <p>*Belum termasuk ppn</p>
          <button type="button" className="btn btn-lg btn-block btn-checkout">Checkout</button>
          <button type="button" className="btn btn-lg btn-block btn-cancel">Cancel</button>
        </div>
         :""}
        
      </div>
    );
  }
}
 
export default ContentCart;