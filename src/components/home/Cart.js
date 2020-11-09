import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import noCart from '../../assets/image/food-and-restaurant.png';
import CartCard from './CartCard';
import ModalCheckout from '../modal/ModalCheckout';
import EditCard from './EditCard';

const Cart =()=> {

  const carts = useSelector((state)=>state.menu.carts);
  const isAdmin = useSelector((state)=>state.auth.isAdmin);

  const total = carts.reduce((total, item) => { return total + (item.price * item.quantity) }, 0);
  
  return (
    <div className='cart'>
      <div className='navbar-cart no-gutters'>
        {!isAdmin ?
        <h1 className='cart-title'>Cart</h1>
        :
        <h1 className='cart-title'>Selected</h1>
        }
        <h1 className='quantity-in-cart'>{carts.length}</h1>
      </div>
      {!isAdmin ?
      <>
      <div className='content-cart'>
        {carts.length === 0 ?
        <>
          <div className='image-no-cart-wrapper'>
            <img src={noCart} className='image-no-cart' alt='...'/>
          </div>
          <h3 className='text-cart'>Your cart is empty</h3>
          <p className='message-cart'>Please add some items from the menu</p>
        </>
        :
        <>
          {carts.map((item,index)=>{
            return (
              <CartCard item={item} key={index}/>
            )
          })}
        </>
        } 
      </div>
      {carts.length === 0 ? null :
        <>
          <div className='total-wrapper'>
            <h5>Total:</h5>
            <h5>{total.toLocaleString('id', { style: 'currency', currency: 'IDR' })}*</h5>
          </div>
          <p className='msg-ppn'>*Belum termasuk ppn</p>
          <button type="submit" className="btn btn-lg btn-block btn-checkout" data-toggle="modal" data-target="#modalCheckout">Checkout</button>
          <button type="button" className="btn btn-lg btn-block btn-cancel">Cancel</button>
          <ModalCheckout total={total}/>
        </>
      }
      </>
      :
      <>
        {carts.map((item,index)=>{
          return (
            <EditCard item={item} key={index}/>
          )
        })}
      </>
      }
    </div>

  )
}

export default Cart;
