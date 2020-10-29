import React from 'react';
import exampleImage from '../../assets/image/bear.png';


const CardMenu =({menu})=> {
  return (
    <div className='col mb-4'>
      <div className="card">
        <img src={exampleImage} className="card-img-top" alt="..."/>
        <h5 className="card-title">{menu.name}</h5>
        <p className="card-text">{menu.price.toLocaleString('id', { style: 'currency', currency: 'IDR' })}</p>
        {/* <div className="card-body">
          <h5 className="card-title">{menu.name}</h5>
          <p className="card-text">{menu.price}</p>
        </div> */}
      </div>
    </div>
  )
}

export default CardMenu;
