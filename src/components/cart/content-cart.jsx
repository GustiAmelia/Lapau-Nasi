import React, { Component } from 'react';

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
                <img src={item.images} alt=""/>
                <p>{item.menu}</p>
                <p>{`Rp.${item.price}`}</p>
                
                {/* <Counter jumlah={item.jumlah} allItem={choosedMenu.length} setItemInCart={this.setItemInCart}/> */}
              </>
            )
          })
           : <div className="noCart">
            <img src={process.env.PUBLIC_URL + './images/food-and-restaurant.png'} alt=""/>
            <h5>Your cart is empty</h5>
            <p>Please add some items from the menu</p>
        </div>
        }
        
        {/* <p>*Belum termasuk ppn</p>
        <button type="button" className="btn btn-lg btn-block btn-checkout">Checkout</button>
        <button type="button" className="btn btn-lg btn-block btn-cancel">Cancel</button> */}
      </div>
    );
  }
}
 
export default ContentCart;