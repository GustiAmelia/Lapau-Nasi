import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteItemCartCreator, deleteProductCreator} from '../../redux/actions/menu';
import ModalEditProduct from '../modal/ModalEditProduct'

const EditCard =({item})=> {

  const dispatch = useDispatch();
  const handleDelete =()=>{
    dispatch(deleteProductCreator(item.id))
    dispatch(deleteItemCartCreator(item.id))
  }
  return (
    <div className='card-cart'>
      <div className='image-cart-wrapper'>
        <img src={process.env.REACT_APP_API_URL+'/'+item.image} alt='...' className='image-cart'/>
      </div>
      <div className='name-and-quantity'>
        <h4>{item.product_name}</h4>
        <div className='button-wrapper'>
          <button type='button' className='btn btn-edit' data-toggle="modal" data-target="#modalEditProduct">Edit</button>
          <button type='button' className='btn btn-delete' onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <ModalEditProduct item={item}/>
    </div>
  )
}

export default EditCard;
