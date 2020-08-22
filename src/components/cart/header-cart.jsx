import React, { Component } from 'react';

class HeaderCart extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="cart-header">
                <h5>Cart <span className="zero">0</span></h5>
            </div>
        );
    }
}
 
export default HeaderCart;