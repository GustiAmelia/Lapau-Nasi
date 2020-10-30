import {fetchAllMenu} from '../../services/urlApi';

import * as actions from './actionTypes'

export const getAllMenus =(page,limit)=>{
  return{
    type : actions.fetchMenu,
    payload :fetchAllMenu(page,limit),
  };
};

export const itemToCart = (id,images, name, price ) => {
  return {
      type: actions.addMenuToCart,
      payload: {
          id,
          images,
          quantity: 1,
          name,
          price,
      }
  };
};

export const incrementCreator = (id)=>{
  return {
    type : actions.increase,
    payload:{
      id
    }
    
  };
};

export const decrementCreator = (id)=>{
  return {
    type : actions.decrease,
    payload:{
      id
    }
  };
};

export const removeCartCreator =()=>{
  return{
    type : actions.removeItemCart
  }
}





