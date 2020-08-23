import React, { Component } from 'react';
import HeaderCart from './header-cart';
import ContentCart from './content-cart';

class Cart extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <HeaderCart
                totalCart={this.props.totalCart}/>
                <ContentCart
                choosedMenu={this.props.choosedMenu}
                countQuantity={this.props.countQuantity}
                />
            </div>
         );
    }
}
 
export default Cart;