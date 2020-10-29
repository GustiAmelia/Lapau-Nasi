import React from 'react';
import noCart from '../../assets/image/food-and-restaurant.png';
import CartCard from './CartCard';

const Cart =()=> {
  const data =[
    {name:'Espresso',price:100000,id:1},
    {name:'Cappucino',price:1000,id:2},
    {name:'Coffee Latte',price:1000,id:3},
    {name:'Nasi Goreng',price:1000,id:4},
    {name:'Ayam Gulai',price:1000,id:5},
    {name:'Ayam Bumbu',price:1000,id:6},
    {name:'Ayam Bakar',price:1000,id:7},
    {name:'Nasi Kuning',price:1000,id:8},
    {name:'Nasi Bakar',price:1000,id:9},
    {name:'Nasi Bumbu',price:1000,id:10},
  ]
  const cart = 's';
  return (
    <div className='cart'>
      <div className='navbar-cart no-gutters'>
        <h1 className='cart-title'>Cart</h1>
        <h1 className='quantity-in-cart'>0</h1>
      </div>
      <div className='content-cart'>
        {cart === null ?
        <>
          <div className='image-no-cart-wrapper'>
            <img src={noCart} className='image-no-cart' alt='...'/>
          </div>
          <h3 className='text-cart'>Your cart is empty</h3>
          <p className='message-cart'>Please add some items from the menu</p>
        </>
        :
        <>
          {data.map((item,index)=>{
            return (
              <CartCard item={item} key={index}/>
            )
          })}
        </>
        }
        
      </div>
      {cart === null ? null :
        <>
          <div className='total-wrapper'>
            <h5>Total:</h5>
            <h5>Rp5.000,00*</h5>
          </div>
          <p className='msg-ppn'>*Belum termasuk ppn</p>
          <button type="button" className="btn btn-lg btn-block btn-checkout">Checkout</button>
          <button type="button" className="btn btn-lg btn-block btn-cancel">Cancel</button>
        </>
      }
    </div>
  )
}

export default Cart;
