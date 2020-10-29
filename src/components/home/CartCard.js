import React from 'react';
import imgCart from '../../assets/image/bear.png';

const CartCard =({item})=> {
  return (
    <div className='card-cart'>
      <div className='image-cart-wrapper'>
        <img src={imgCart} alt='...' className='image-cart'/>
      </div>
      <div className='name-and-quantity'>
        <h4>{item.name}</h4>
        <div className='button-wrapper'>
          <button type='button' className='btn btn-counter'>-</button>
          <button className='btn quantity'>1</button>
          <button type='button' className='btn btn-counter'>+</button>
        </div>
      </div>
      <div className='price-wrapper'>
        <h4 className='price'>{item.price.toLocaleString('id', { style: 'currency', currency: 'IDR' })}</h4>
      </div>
    </div>
  )
}

export default CartCard;
