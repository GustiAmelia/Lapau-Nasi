import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import imgCart from '../../assets/image/bear.png';
import { incrementCreator,decrementCreator} from '../../redux/actions/menu';

const CartCard =({item})=> {

  const dispatch = useDispatch();

  const handleButtonPositive =()=>{
    dispatch(incrementCreator(item.id))
  }

  const handleButtonNegative = ()=>{
    dispatch(decrementCreator(item.id))
  }

  return (
    <div className='card-cart'>
      <div className='image-cart-wrapper'>
        <img src={process.env.REACT_APP_API_URL+'/'+item.image} alt='...' className='image-cart'/>
      </div>
      <div className='name-and-quantity'>
        <h4>{item.product_name}</h4>
        <div className='button-wrapper'>
          <button type='button' className='btn btn-counter' onClick={handleButtonNegative}>-</button>
          <button className='btn quantity'>{item.quantity}</button>
          <button type='button' className='btn btn-counter' onClick={handleButtonPositive}>+</button>
        </div>
      </div>
      <div className='price-wrapper'>
        <h4 className='price'>{(item.price*item.quantity).toLocaleString('id', { style: 'currency', currency: 'IDR' })}</h4>
      </div>
    </div>
  )
}

export default CartCard;
