import React from 'react';

const HeaderCart =({carts})=> {
        return ( 
            <div className="cart-header">
                <h5>Cart <span className="zero">{carts.length}</span></h5>
            </div>
        );
    
}
 
export default HeaderCart;