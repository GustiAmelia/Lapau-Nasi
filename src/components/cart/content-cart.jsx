import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Counter from './counter-qty';
import foodAndRestaurant from '../../images/food-and-restaurant.png';
import {useSelector} from 'react-redux';



const ContentCart=({increase,decrease,removeCart})=>{
  const carts = useSelector((state)=>state.menu.carts)
    return (
      <div>
        {
          carts.length ?carts.map(item => {
            return (
              <>
                <Container fluid={true}>
                  <Row className="content-cart" key={item.id}>
                    <Col className="img-cart"><img src={item.images} alt="item"/></Col>
                    <Col>
                      <Row>
                        <Col><p>{item.menu}</p></Col>
                      </Row>
                      <Row>
                        <Col> 
                          <Counter 
                          item={item}
                          increase={increase}
                          decrease={decrease}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col><p>{`Rp.${item.price*item.quantity}`}</p></Col>
                  </Row>
                </Container> 
              </>
            )
          })
           : <div className="noCart">
            <img src={foodAndRestaurant} alt=""/>
            <h5>Your cart is empty</h5>
            <p>Please add some items from the menu</p>
        </div>
        }
        {carts.length ?
        <div>
          <Container fluid={true}>
            <Row>
              <Col className='total-font'>Total :</Col>
              <Col className='total'>Rp {carts.reduce((total, item) => { return total + (item.price * item.quantity) }, 0).toLocaleString()}</Col>
            </Row>
            <Row>
              <Col><p className='text-ppn'>*Belum termasuk ppn</p></Col>
            </Row>
          </Container>
          <button type="button" className="btn btn-lg btn-block btn-checkout" >Checkout</button>
          <button type="button" className="btn btn-lg btn-block btn-cancel" onClick={()=>removeCart()}>Cancel</button>
        </div>
         :""}
      </div>
    );
  
}
 
export default ContentCart;