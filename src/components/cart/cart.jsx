import React, { Component } from 'react';
import HeaderCart from './header-cart';
import ContentCart from './content-cart';

class Cart extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <HeaderCart/>
                <ContentCart
                choosedMenu={this.props.choosedMenu}
                />
            </div>
         );
    }
}
 
export default Cart;