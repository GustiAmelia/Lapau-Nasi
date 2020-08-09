import React, { Component } from 'react';

class Cart extends Component {
    render() { 
        return ( 
            <div>
                <div className="cart-header">
                    <h5>Cart <span className="zero">0</span></h5>
                </div>
                 <div className="noCart">
                    <img src={process.env.PUBLIC_URL + './images/food-and-restaurant.png'} alt=""/>
                    <h5>Your cart is empty</h5>
                    <p>Please add some items from the menu</p>
                </div>
            </div>
           
         );
    }
}
 
export default Cart;