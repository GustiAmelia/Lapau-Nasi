import React from 'react';
import exampleImage from '../../assets/image/bear.png';


const CardMenu =({menu})=> {
  return (
    <div className='col mb-4'>
      <div className="card">
        <img src={process.env.REACT_APP_API_URL+'/'+menu.image} className="card-img-top" alt="..."/>
        <h5 className="card-title">{menu.product_name}</h5>
        <p className="card-text">{menu.price.toLocaleString('id', { style: 'currency', currency: 'IDR' })}</p>
      </div>
    </div>
  )
}

export default CardMenu;
