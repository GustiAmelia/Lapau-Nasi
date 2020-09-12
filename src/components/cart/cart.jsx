import React from 'react';
import HeaderCart from './header-cart';
import ContentCart from './content-cart';

const Cart =({increase,decrease,carts,removeCart})=> {

  return ( 
    <div>
      <HeaderCart
      carts={carts}/>
      <ContentCart
      increase={increase}
      decrease={decrease}
      removeCart={removeCart}
      />
    </div>
    );

}
 
export default Cart;