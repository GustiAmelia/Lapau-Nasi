import React, { Component } from 'react';
import Content from '../components/content/content';
import Cart from '../components/cart/cart';
import { Container, Row, Col } from 'reactstrap';
import {connect} from 'react-redux';
import {getAllMenus,itemToCart,
  incrementCreator,decrementCreator,removeCartCreator} from '../redux/actions/menu';



class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      
      isCheckListOpen:false,
      
    }
  }
 
  componentDidMount =()=>{
    this.props.getAllMenus();
  }

    render() {
      const {menus,carts,itemToCart,increase,decrease,removeCart}=this.props
      return (
        <Container fluid={true}>
          <Row>
            <Col md="8" lg="8" xl="8">
              <Content 
              menus={menus}
              click={itemToCart}
              isCheckListOpen={this.state.isCheckListOpen}
              />
            </Col>
            <Col md="4" lg="4" xl="4" className="cart-item">
              <Cart
              increase={increase}
              decrease={decrease}
              removeCart={removeCart}
              carts={carts}
              />
            </Col>
          </Row>
        </Container>  
      );
    }
}

const mapStateToProps=(state)=>{
  return{
    menus : state.menu.menus,
    carts :state.menu.carts
  }
}

const mapDispatchToProps =(dispatch)=>{
  return{
    getAllMenus:()=>dispatch(getAllMenus()),
    itemToCart:(id,images,name,price)=>dispatch(itemToCart(id,images,name,price)),
    increase:(id)=>dispatch(incrementCreator(id)),
    decrease :(id)=>dispatch(decrementCreator(id)),
    removeCart :()=>dispatch(removeCartCreator())

  }
  
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Home);
