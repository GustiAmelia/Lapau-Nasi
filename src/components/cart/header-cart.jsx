import React, { Component } from 'react';

class HeaderCart extends Component {
    render() { 
        return ( 
            <div className="cart-header">
                <h5>Cart <span className="zero">{this.props.totalCart}</span></h5>
            </div>
        );
    }
}
 
export default HeaderCart;